import { Section } from './Section'
import { FadeIn } from './FadeIn'

const stages = [
  { step: '0', title: 'Donor Intake', description: 'Elite genetics validated' },
  { step: '1', title: 'Callus Initiation', description: 'Cell mass formation' },
  { step: '2', title: 'Cell Suspension', description: 'Rapid multiplication' },
  { step: '3', title: 'Vessel Transfer', description: 'Genetic verification' },
  { step: '4', title: 'Plantlet Formation', description: 'Roots & shoots emerge' },
  { step: '5', title: 'Hardening & Sale', description: 'Disease-free delivery' },
]

export function Process() {
  return (
    <Section id="process" dark>
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            The Process
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            From Single Cell
            <br />
            to Perfect Clone
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-xl mx-auto text-lg leading-relaxed">
            Six stages to a perfect plant. Automated, modular, and repeatable.
          </p>
        </FadeIn>
      </div>

      {/* Desktop: horizontal stepper */}
      <FadeIn delay={0.15}>
        <div className="hidden md:block mb-20">
          <div className="flex items-start justify-between relative">
            {/* Connector line */}
            <div className="absolute top-7 left-[8%] right-[8%] h-px bg-brand-500/20 dark:bg-brand-400/20" />

            {stages.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center flex-1 px-2">
                <div className="w-14 h-14 rounded-full bg-brand-500 dark:bg-brand-400 flex items-center justify-center text-white dark:text-surface-dark font-bold text-lg z-10 shadow-lg shadow-brand-500/20">
                  {s.step}
                </div>
                <h3 className="mt-5 font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  {s.description}
                </p>
                {i < stages.length - 1 && (
                  <div className="hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Mobile: vertical stepper */}
      <div className="md:hidden mb-16 space-y-8">
        {stages.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.08}>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-500 dark:bg-brand-400 flex items-center justify-center text-white dark:text-surface-dark font-bold shadow-lg shadow-brand-500/20">
                {s.step}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-lg">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Production stat */}
      <FadeIn>
        <div className="text-center py-12 border border-border-light dark:border-border-dark rounded-2xl bg-surface-card-light dark:bg-surface-card-dark">
          <p className="text-5xl md:text-7xl font-bold text-brand-500 dark:text-brand-400 tracking-tight">
            90,000+
          </p>
          <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark text-lg">
            Plants per day at full scale production capacity
          </p>
        </div>
      </FadeIn>
    </Section>
  )
}
