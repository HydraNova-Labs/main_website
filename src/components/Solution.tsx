import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { ShieldCheck, Dna, Layers, SlidersHorizontal } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Clean & Pathogen-Free',
    description: 'Zero disease, zero pathogens — pathogen-free at every level. Every plant begins in a sterile, controlled environment.',
  },
  {
    icon: Dna,
    title: 'Identical Genetics',
    description: 'Genetic consistency at scale, true to type and matched to top-performing parents. Every plant identical in performance, yield, and structure.',
  },
  {
    icon: Layers,
    title: 'Scalable to Millions',
    description: 'Scale production from thousands to millions of plants seamlessly — all from a single source plant.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Precise & Year-Round',
    description: 'Total control over temperature, nutrients, light, and Plant Growth Regulators (PGRs). Production 24/7/365.',
  },
]

export function Solution() {
  return (
    <Section id="solution">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            The Solution
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            We Grow More Than Plants.
            <br />
            <span className="italic text-brand-500 dark:text-brand-400">We Grow Certainty.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            Our precision tissue culture platform eliminates uncertainty, delivering pathogen-free,
            genetically stable plants at industrial scale — grown from plant tissues in
            sterile, nutrient-rich medium, completely outside of soil.
          </p>
        </FadeIn>
      </div>

      {/* Image */}
      <FadeIn delay={0.15}>
        <div className="rounded-2xl overflow-hidden mb-24 aspect-[16/7]">
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1400&q=80"
            alt="Laboratory tissue culture environment"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-10">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1} className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-6">
              <p.icon size={24} className="text-brand-500 dark:text-brand-400" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
              {p.title}
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-[1.7] text-[15px]">
              {p.description}
            </p>
          </FadeIn>
        ))}
      </div>

      {/* Traction stats */}
      <FadeIn delay={0.2}>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '20,000+', label: 'Plants Delivered' },
            { value: '178,000+', label: 'Plants Pre-Sold' },
            { value: '7 LOIs', label: 'Global Partnerships' },
            { value: '10.4x', label: 'Validated ROI' },
          ].map(s => (
            <div key={s.label} className="text-center py-8 px-4 rounded-2xl border border-border-light dark:border-border-dark bg-surface-card-light dark:bg-surface-card-dark">
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-500 dark:text-brand-400 tracking-tight">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

    </Section>
  )
}
