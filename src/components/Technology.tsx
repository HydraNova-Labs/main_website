import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { Wind, Lightbulb, Box, ThermometerSun } from 'lucide-react'

const specs = [
  { icon: ThermometerSun, title: '300K+ Plants', description: 'Chamber capacity at scale' },
  { icon: Wind, title: 'Airflow System', description: 'Upward airflow minimizes condensation' },
  { icon: Lightbulb, title: 'LED Lighting', description: 'Full spectrum control for optimal growth' },
  { icon: Box, title: 'Stainless Steel', description: 'Specialized shelving for tissue culture' },
]

/* Product categories — hidden for now, may re-enable later
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
    image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=600&q=80',
  },
]
*/

export function Technology() {
  return (
    <Section id="technology">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            Technology
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            Powered by <span className="italic text-brand-500 dark:text-brand-400">Biora</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            Strategic partnership with Biora Technologies for precision-controlled tissue culture
            environments — the safest and most stable environment for tissue culture.
          </p>
        </FadeIn>
      </div>

      {/* Tech image */}
      <FadeIn delay={0.15}>
        <div className="rounded-2xl overflow-hidden mb-24 aspect-[21/9]">
          <img
            src="/renders/biora_module_render_sky2.png"
            alt="Controlled environment agriculture technology"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Specs grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-28">
        {specs.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08} className="h-full">
            <div className="p-8 md:p-9 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark text-center h-full">
              <s.icon size={28} className="mx-auto mb-5 text-brand-500 dark:text-brand-400 opacity-80" />
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {s.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Product categories — hidden for now, may re-enable later */}
      {/*
      <FadeIn className="text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-text-primary-light dark:text-text-primary-dark mb-14">
          Product Categories
        </h3>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1} className="h-full">
            <div className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark overflow-hidden h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-lg mb-3">
                  {c.title}
                </h4>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-[1.7]">
                  {c.text}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      */}

      {/* Strategic Partners */}
      <FadeIn delay={0.2}>
        <div className="mt-28 pt-16 border-t border-border-light dark:border-border-dark text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-12">
            Strategic Partners
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'Biora Technologies', sub: 'Precision Controlled Environments' },
              { name: 'Advanced Nutrients', sub: 'Agricultural Biotech Solutions' },
              { name: 'ABI Technologies', sub: 'Technical Consultation' },
            ].map(p => (
              <div
                key={p.name}
                className="py-8 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark text-center"
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
