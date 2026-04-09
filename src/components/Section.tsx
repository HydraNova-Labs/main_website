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
      className={`py-14 sm:py-16 md:py-20 lg:py-24 px-8 sm:px-12 md:px-16 lg:px-8 ${
        dark
          ? 'bg-surface-elevated-light dark:bg-surface-elevated-dark'
          : 'bg-surface-light dark:bg-surface-dark'
      } ${className}`}
    >
      <div className="max-w-[1080px] mx-auto">
        {children}
      </div>
    </section>
  )
}
