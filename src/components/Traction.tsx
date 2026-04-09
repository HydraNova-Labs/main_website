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
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Traction
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            This Isn't a Theory.
            <br />
            <span className="text-brand-500 dark:text-brand-400">It's Already Working.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-xl mx-auto text-lg leading-relaxed">
            Processes validated and repeatable. The science is done. Now we scale.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.12}>
            <div className="text-center py-10 px-4 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark">
              <p className="text-4xl md:text-5xl font-bold text-brand-500 dark:text-brand-400 tracking-tight">
                {s.value}
              </p>
              <p className="mt-3 font-semibold text-text-primary-light dark:text-text-primary-dark text-lg">
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
