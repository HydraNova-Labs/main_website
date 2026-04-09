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
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Global Impact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            Humanitarianism
            <br />
            at Industrial Scale
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-lg leading-relaxed">
            In a world where climate change, population growth, and geopolitical instability threaten
            food supply chains — genetic stability in the field isn't a luxury. It's a matter of
            national security.
          </p>
        </FadeIn>
      </div>

      {/* Image */}
      <FadeIn delay={0.15}>
        <div className="rounded-2xl overflow-hidden mb-20 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1400&q=80"
            alt="Global agriculture and food security"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div className="p-10 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/40 flex items-center justify-center mb-6">
                <p.icon size={28} className="text-brand-500 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                {p.title}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-text-primary-light dark:text-text-primary-dark italic leading-snug max-w-2xl mx-auto">
            "Stability at the cellular level
            <br />
            becomes stability at the national level."
          </p>
        </div>
      </FadeIn>
    </Section>
  )
}
