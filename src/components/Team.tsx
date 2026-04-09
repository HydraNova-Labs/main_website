import { Section } from './Section'
import { FadeIn } from './FadeIn'

const team = [
  {
    name: 'Nevada King',
    role: 'CEO',
    description:
      'Expert in Microbiology & Synthetic Biology. Architect of the HydraNova TC platform with deep domain expertise in genetic stability.',
    tags: ['Synthetic Biology', 'Genetics', 'R&D Strategy'],
  },
  {
    name: 'Clovis McCary',
    role: 'CSO',
    description:
      'Award-winning B2B agricultural sales leader. The relationship engine behind 7 global LOIs and the 178,000-plant pre-sale pipeline.',
    tags: ['Global Sales', 'B2B Partnerships', 'Ag-Tech'],
  },
  {
    name: 'Adam Meek',
    role: 'COO',
    description:
      'Project management expert with 40+ years scaling projects. Ensures the roadmap executes on schedule.',
    tags: ['Operations', 'Infrastructure', 'Scaling'],
  },
]

export function Team() {
  return (
    <Section id="team">
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Leadership
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            Science. Sales. Execution.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-lg leading-relaxed">
            A team combining deep scientific expertise, proven sales execution, and decades of
            operational scaling.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.12}>
            <div className="p-10 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark text-center h-full">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-900/40 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-500 dark:text-brand-400">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                {t.name}
              </h3>
              <p className="text-brand-500 dark:text-brand-400 font-medium text-sm mt-1 mb-5">
                {t.role}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {t.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-surface-elevated-light dark:bg-surface-elevated-dark text-text-secondary-light dark:text-text-secondary-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Partners */}
      <FadeIn delay={0.2}>
        <div className="mt-24 pt-16 border-t border-border-light dark:border-border-dark text-center">
          <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-10">
            Strategic Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Biora Technologies', sub: 'Precision Controlled Environments' },
              { name: 'Advanced Nutrients', sub: 'Agricultural Biotech Solutions' },
            ].map(p => (
              <div
                key={p.name}
                className="px-10 py-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark"
              >
                <p className="font-semibold text-text-primary-light dark:text-text-primary-dark text-lg">
                  {p.name}
                </p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
                  {p.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
