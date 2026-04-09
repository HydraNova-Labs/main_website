import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { Wheat, ShieldCheck, CloudRain, Globe } from 'lucide-react'

const pillars = [
  {
    icon: Wheat,
    title: 'Food Security',
    description:
      'Reduce food insecurity in import-dependent countries by enabling localized, high-yield production.',
  },
  {
    icon: ShieldCheck,
    title: 'Disease Elimination',
    description:
      'Provide certified disease-free planting material to developing agriculture markets, stopping crop failure at the source.',
  },
  {
    icon: CloudRain,
    title: 'Climate Resilience',
    description:
      'Enable precision crop production in water-scarce and climate-stressed regions through controlled environments.',
  },
  {
    icon: Globe,
    title: 'Genetic Democracy',
    description:
      'Democratize access to elite genetic plant material globally, leveling the playing field for smallholder nations.',
  },
]

export function Impact() {
  return (
    <Section id="impact" dark>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            Global Impact
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            Humanitarianism at
            <br />
            <span className="italic text-brand-500 dark:text-brand-400">Industrial Scale</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            In a world where climate change, population growth, and geopolitical instability threaten
            food supply chains — genetic stability in the field isn't a luxury. It's a matter of
            national security.
          </p>
        </FadeIn>
      </div>

      {/* Image */}
      <FadeIn delay={0.15}>
        <div className="rounded-2xl overflow-hidden mb-24 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1400&q=80"
            alt="Global agriculture and food security"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Pillar cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1} className="h-full">
            <div className="p-10 md:p-12 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark h-full">
              <div className="w-13 h-13 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-7 w-14 h-14">
                <p.icon size={26} className="text-brand-500 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                {p.title}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-[1.7]">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Quote */}
      <FadeIn delay={0.3}>
        <div className="mt-24 text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-text-primary-light dark:text-text-primary-dark italic leading-snug max-w-2xl mx-auto">
            "Stability at the cellular level
            becomes stability at the national level."
          </p>
        </div>
      </FadeIn>
    </Section>
  )
}
