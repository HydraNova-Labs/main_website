export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          &copy; {new Date().getFullYear()} HydraNova Labs. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:grow@hydranovalabs.com"
            className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            grow@hydranovalabs.com
          </a>
          <a
            href="tel:+12142250544"
            className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            214-225-0544
          </a>
        </div>
      </div>
    </footer>
  )
}
