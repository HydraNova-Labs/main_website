import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { FlaskConical, Database, Search, Wrench } from 'lucide-react'

const services = [
  {
    icon: FlaskConical,
    title: 'Tissue Culture Clones',
    description:
      'The gold standard in cultivation, delivering genetically identical, virus-free plants that thrive in any environment. Our process eliminates pathogens and harmful viruses, giving you a clean slate for cultivation.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80',
  },
  {
    icon: Database,
    title: 'Genetic Storage',
    description:
      'Protect your investment in unique and high-performing strains, ensuring that your genetic legacy endures with each new cultivation cycle.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
  },
  {
    icon: Search,
    title: 'Virus Testing',
    description:
      'Comprehensive disease testing including HLVD-specific protocols, ensuring your plants are continuously monitored and protected against potential threats.',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&q=80',
  },
  {
    icon: Wrench,
    title: 'Genetic Remediation',
    description:
      'Genetic clean-up and restoration services that rejuvenate valuable strains, ensuring optimal performance and preservation of unique attributes.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
]

export function Services() {
  return (
    <Section id="services">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            Services
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            End-to-End <span className="italic">Plant Solutions</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            From tissue culture to genetic preservation, we provide a complete 360-degree
            program for cultivators at every scale.
          </p>
        </FadeIn>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1} className="h-full">
            <div className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark overflow-hidden hover:border-brand-500/25 dark:hover:border-brand-400/25 transition-all duration-500 group h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-9 md:p-10">
                <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-6">
                  <s.icon size={22} className="text-brand-500 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {s.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark leading-[1.7] text-[15px]">
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
