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
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            The Crisis
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            The World's Food System
            <br />
            Is Under Attack
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-lg leading-relaxed">
            Agricultural productivity faces existential threats that jeopardize global food security
            and sustainability. By 2050, the world needs 70% more food — existing systems are failing.
          </p>
        </FadeIn>
      </div>

      {/* Full-bleed image */}
      <FadeIn delay={0.15}>
        <div className="relative rounded-2xl overflow-hidden mb-20 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80"
            alt="Agricultural field showing effects of crop disease"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-8 right-8 text-white/90 text-lg md:text-xl font-medium">
            "Plant diseases, driven by aggressive viruses and fungal pathogens,
            compromise global food security by reducing crop yields and quality."
          </p>
        </div>
      </FadeIn>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <s.icon size={28} className="mx-auto mb-4 text-brand-500 dark:text-brand-400" />
              <p className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark leading-snug">
                {s.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Threat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {threats.map((t, i) => (
          <FadeIn key={t.title} delay={i * 0.08}>
            <div className="p-8 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark h-full">
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                {t.title}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {t.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
