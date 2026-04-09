import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { Wind, Lightbulb, Box, ThermometerSun } from 'lucide-react'

const specs = [
  { icon: ThermometerSun, title: '300K+ Plants', description: 'Chamber capacity at scale' },
  { icon: Wind, title: 'Airflow System', description: 'Upward airflow minimizes condensation' },
  { icon: Lightbulb, title: 'LED Lighting', description: 'Full spectrum control for optimal growth' },
  { icon: Box, title: 'Stainless Steel', description: 'Specialized shelving for tissue culture' },
]

const categories = [
  {
    title: 'Horticulture',
    text: 'Advanced horticultural genetics ensuring improved yield, resilience, and consistency in everyday staples.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    title: 'Tree Species',
    text: 'Reliable, genetically optimized tree varieties for sustainable landscaping and agricultural applications.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80',
  },
  {
    title: 'Floriculture',
    text: 'Specialized floriculture genetics for vibrant and resilient blooms, including refined Orchids and robust Chrysanthemums.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80',
  },
]

export function Technology() {
  return (
    <Section id="technology" dark>
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Technology
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight">
            Powered by Biora
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-lg leading-relaxed">
            Strategic partnership with Biora Technologies for precision-controlled tissue culture
            environments — the safest and most stable environment for tissue culture.
          </p>
        </FadeIn>
      </div>

      {/* Tech image */}
      <FadeIn delay={0.15}>
        <div className="rounded-2xl overflow-hidden mb-20 aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1400&q=80"
            alt="Controlled environment agriculture technology"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Specs grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {specs.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}>
            <div className="p-8 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark text-center h-full">
              <s.icon size={32} className="mx-auto mb-5 text-brand-500 dark:text-brand-400" />
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 text-lg">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {s.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Product categories */}
      <FadeIn>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Product Categories
          </h3>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark overflow-hidden h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-lg mb-2">
                  {c.title}
                </h4>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  {c.text}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
