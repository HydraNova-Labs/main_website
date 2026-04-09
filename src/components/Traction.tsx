import { Section } from './Section'
import { FadeIn } from './FadeIn'

const stats = [
  { value: '20,000+', label: 'Plants Delivered', sub: 'Successful delivery to early partners' },
  { value: '178,000+', label: 'Plants Pre-Sold', sub: 'Active order pipeline awaiting production' },
  { value: '7 LOIs', label: 'Global Partnerships', sub: 'Secured across 45 countries' },
  { value: '10.4x', label: 'Validated ROI', sub: 'Return on pilot runs' },
]

export function Traction() {
  return (
    <Section id="traction">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            Traction
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            This Isn't a Theory.
            <br />
            <span className="italic text-brand-500 dark:text-brand-400">It's Already Working.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            Processes validated and repeatable. The science is done. Now we scale.
          </p>
        </FadeIn>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.12} className="h-full">
            <div className="text-center py-12 px-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark h-full flex flex-col justify-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-500 dark:text-brand-400 tracking-tight">
                {s.value}
              </p>
              <p className="mt-4 font-semibold text-text-primary-light dark:text-text-primary-dark">
                {s.label}
              </p>
              <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark leading-snug">
                {s.sub}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
