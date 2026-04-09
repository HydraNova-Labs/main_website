import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { AlertTriangle, Bug, TrendingDown, Globe } from 'lucide-react'

const stats = [
  { value: '$220B+', label: 'Annual Global Crop Losses', icon: TrendingDown },
  { value: '1.7B', label: 'People Facing Lower Yields', icon: Globe },
  { value: '20–40%', label: 'Crops Lost Annually', icon: Bug },
  { value: '70%', label: 'Traditional Clone Failure', icon: AlertTriangle },
]

const threats = [
  {
    title: 'Seed Contamination',
    text: 'Infected planting material spreads disease globally. One contaminated batch acts as a "Trojan Horse," destroying entire seasons before they begin.',
  },
  {
    title: 'Genetic Degradation',
    text: 'Traditional cloning amplifies genetic weaknesses over generations, leading to progressively weaker crops.',
  },
  {
    title: 'Limited Scalability',
    text: 'Conventional propagation cannot meet growing demand. Manual cloning is slow, labor-intensive, and prone to human error.',
  },
  {
    title: 'Climate Volatility',
    text: 'Extreme weather, drought cycles, and soil degradation are destroying traditional agriculture. Controlled environments are no longer optional.',
  },
]

export function Problem() {
  return (
    <Section id="problem" dark>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            The Crisis
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            The World's Food System
            <br />
            Is <span className="italic text-brand-500 dark:text-brand-400">Under Attack</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            Agricultural productivity faces existential threats that jeopardize global food security
            and sustainability. By 2050, the world needs 70% more food — existing systems are failing.
          </p>
        </FadeIn>
      </div>

      {/* Image */}
      <FadeIn delay={0.15}>
        <div className="relative rounded-2xl overflow-hidden mb-24 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80"
            alt="Agricultural field showing effects of crop disease"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="absolute bottom-8 left-10 right-10 text-white/80 text-base md:text-lg font-serif italic leading-relaxed">
            "Plant diseases, driven by aggressive viruses and fungal pathogens,
            compromise global food security by reducing crop yields and quality."
          </p>
        </div>
      </FadeIn>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-24">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} className="text-center">
            <s.icon size={24} className="mx-auto mb-5 text-brand-500 dark:text-brand-400 opacity-70" />
            <p className="text-4xl md:text-5xl font-serif text-text-primary-light dark:text-text-primary-dark tracking-tight">
              {s.value}
            </p>
            <p className="mt-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {s.label}
            </p>
          </FadeIn>
        ))}
      </div>

      {/* Threat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {threats.map((t, i) => (
          <FadeIn key={t.title} delay={i * 0.08} className="h-full">
            <div className="p-9 md:p-10 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark h-full">
              <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                {t.title}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-[1.7]">
                {t.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
