export function Footer() {
  return (
    <footer className="py-12 px-8 sm:px-12 md:px-16 lg:px-8 border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <p>&copy; {new Date().getFullYear()} Atlas Bioindustries. All rights reserved.</p>
          <span aria-hidden="true">·</span>
          <a
            href="/privacy.html"
            className="hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-8">
          <a
            href="mailto:grow@atlasbioindustries.com"
            className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-300"
          >
            grow@atlasbioindustries.com
          </a>
          <a
            href="tel:+12142250544"
            className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-300"
          >
            214-225-0544
          </a>
        </div>
      </div>
    </footer>
  )
}
