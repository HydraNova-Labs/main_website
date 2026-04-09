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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-xl border-b border-border-light dark:border-border-dark">
      <div className="max-w-[1080px] mx-auto px-8 sm:px-12 md:px-16 lg:px-8 flex items-center justify-between h-16 md:h-18">
        <a href="#" className="font-serif text-xl md:text-2xl italic text-text-primary-light dark:text-text-primary-dark">
          HydraNova Labs
        </a>

        {/* Desktop + iPad nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2.5 rounded-full hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggle}
            className="p-2.5 rounded-full hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2.5 rounded-full hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-xl px-8 sm:px-12 py-6 space-y-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
