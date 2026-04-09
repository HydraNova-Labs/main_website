import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface NavbarProps {
  dark: boolean
  toggle: () => void
}

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Process', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ dark, toggle }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight">
          HydraNova Labs
        </a>

        {/* Desktop + iPad nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-4 space-y-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
