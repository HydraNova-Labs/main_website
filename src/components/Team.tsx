import { Section } from './Section'
import { FadeIn } from './FadeIn'

const team: { name: string; role: string; headshot?: string; description: string; tags: string[] }[] = [
  {
    name: 'Nevada King',
    role: 'Chief Executive Officer',
    headshot: 'headshots/Nevada_headshot.jpg',
    description:
      'Expert in Microbiology & Synthetic Biology. Architect of the HydraNova TC platform with deep domain expertise in genetic stability.',
    tags: ['Synthetic Biology', 'Genetics', 'R&D Strategy'],
  },
  {
    name: 'Braz Vaidya',
    role: 'Chief Science Officer',
    headshot: 'headshots/Braz_headshot.jpg',
    description:
      'Veteran plant biotech leader with 30+ years scaling tissue culture from lab to commercial automation. Founder of multiple international biotech ventures.',
    tags: ['Micropropagation', 'Plant Tissue Culture Research', 'Commercial Automation'],
  },
  {
    name: 'Adam Meek',
    role: 'Chief Operating Officer',
    headshot: 'headshots/Adam_headshot.jpg',
    description:
      'Project management expert with 40+ years scaling projects. Ensures the roadmap executes on schedule.',
    tags: ['Operations', 'Infrastructure', 'Scaling'],
  },
  {
    name: 'Clovis McCary',
    role: 'Chief Marketing Officer',
    headshot: 'headshots/Clovis_headshot.jpg',
    description:
      'Award-winning B2B agricultural sales leader. The relationship engine behind 7 global LOIs and the 178,000-plant pre-sale pipeline.',
    tags: ['Global Sales', 'B2B Partnerships', 'Ag-Tech'],
  },
  {
    name: 'Clay Moore',
    role: 'Chief AI Officer',
    headshot: 'headshots/Clay_headshot.jpg',
    description:
      'Plant genomics & drug discovery researcher at Texas A&M. Specializes in engineering bioactive compounds through computational modeling and molecular biology.',
    tags: ['Molecular Biology', 'Plant Genomics', 'Drug Discovery'],
  },
  {
    name: 'Alex Buettner',
    role: 'Chief Technology Officer',
    headshot: 'headshots/Alex_headshot.jpg',
    description:
      'M.S. Chemical Engineering with Fortune 500 platform engineering leadership. Published researcher in computational modeling and ML-driven optimization.',
    tags: ['Platform Engineering', 'Scientific Computing', 'ML Infrastructure'],
  },

]

export function Team() {
  return (
    <Section id="team" dark>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            Leadership
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            Science. Sales. <span className="italic">Execution.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            A team combining deep scientific and technological expertise, proven sales execution, and decades of
            operational scaling.
          </p>
        </FadeIn>
      </div>

      {/* Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.12} className="h-full">
            <div className="p-10 md:p-11 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark text-center h-full flex flex-col">
              {/* Avatar */}
              <div className="w-28 h-28 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-7 overflow-hidden">
                {t.headshot ? (
                  <img src={t.headshot} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-semibold text-brand-500 dark:text-brand-400">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                {t.name}
              </h3>
              <p className="text-brand-500 dark:text-brand-400 font-medium text-sm mt-2 mb-6">
                {t.role}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-[1.7] text-[15px] mb-7 flex-1">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {t.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-surface-elevated-light dark:bg-surface-elevated-dark text-text-secondary-light dark:text-text-secondary-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </Section>
  )
}
