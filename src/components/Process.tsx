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
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            The Process
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            From Single Cell
            <br />
            to <span className="italic text-brand-500 dark:text-brand-400">Perfect Clone</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            Six stages to a perfect plant. Automated, modular, and repeatable.
          </p>
        </FadeIn>
      </div>

      {/* Desktop: horizontal stepper */}
      <FadeIn delay={0.15}>
        <div className="hidden md:block mb-24">
          <div className="flex items-start justify-between relative px-4">
            {/* Connector line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-px bg-brand-500/20 dark:bg-brand-400/15" />

            {stages.map(s => (
              <div key={s.step} className="relative flex flex-col items-center text-center flex-1 px-3">
                <div className="w-14 h-14 rounded-full bg-brand-500 dark:bg-brand-400 flex items-center justify-center text-white dark:text-surface-dark font-semibold text-base z-10 shadow-lg shadow-brand-500/15">
                  {s.step}
                </div>
                <h3 className="mt-6 font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Mobile: vertical stepper */}
      <div className="md:hidden mb-20 space-y-10 pl-2">
        {stages.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.08}>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-500 dark:bg-brand-400 flex items-center justify-center text-white dark:text-surface-dark font-semibold shadow-lg shadow-brand-500/15">
                {s.step}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-base">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1.5 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Production stat */}
      <FadeIn>
        <div className="text-center py-16 md:py-20 border border-border-light dark:border-border-dark rounded-2xl bg-surface-card-light dark:bg-surface-card-dark">
          <p className="text-5xl md:text-7xl font-serif text-brand-500 dark:text-brand-400 tracking-tight">
            90,000+
          </p>
          <p className="mt-5 text-text-secondary-light dark:text-text-secondary-dark text-lg">
            Plants per day at full scale production capacity
          </p>
        </div>
      </FadeIn>
    </Section>
  )
}
