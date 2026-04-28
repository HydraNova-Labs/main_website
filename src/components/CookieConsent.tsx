import { useState, useEffect } from 'react'

// Analytics disabled — set GA_ID and flip ANALYTICS_ENABLED to re-enable.
const ANALYTICS_ENABLED = false
const GA_ID = ''
const STORAGE_KEY = 'cookie_consent'

function loadGA() {
  if (!ANALYTICS_ENABLED || !GA_ID) return
  if (document.getElementById('ga-script')) return
  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_ID)
}

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ANALYTICS_ENABLED) return
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted') {
      loadGA()
    } else if (!stored) {
      // small delay so page content loads first
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    loadGA()
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!ANALYTICS_ENABLED || !visible) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 animate-slide-up"
    >
      <div className="border-t border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark">
        <div className="max-w-[1080px] mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            We use cookies for analytics.{' '}
            <a
              href="/privacy.html"
              className="underline underline-offset-2 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            >
              Privacy Policy
            </a>
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-1.5 text-sm rounded-md border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-4 py-1.5 text-sm rounded-md bg-brand-500 text-white hover:bg-brand-600 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
