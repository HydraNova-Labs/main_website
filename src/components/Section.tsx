interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function Section({ id, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-36 lg:py-40 px-6 md:px-12 lg:px-8 ${
        dark
          ? 'bg-surface-elevated-light dark:bg-surface-elevated-dark'
          : 'bg-surface-light dark:bg-surface-dark'
      } ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}
