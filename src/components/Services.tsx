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
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Services
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            End-to-End Plant Solutions
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-lg leading-relaxed">
            From tissue culture to genetic preservation, we provide a complete 360-degree
            program for cultivators at every scale.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark overflow-hidden hover:border-brand-500/30 dark:hover:border-brand-400/30 transition-all duration-300 group h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/40 flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-brand-500 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
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
