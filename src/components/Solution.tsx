import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { ShieldCheck, Dna, Layers, SlidersHorizontal } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Clean',
    description: 'Zero pathogens, zero viruses. Every plant begins in a sterile, controlled environment.',
  },
  {
    icon: Dna,
    title: 'Uniform',
    description: 'Genetic consistency at scale. Every plant identical in performance, yield, and structure.',
  },
  {
    icon: Layers,
    title: 'Unlimited',
    description: 'Modular infrastructure scales from 5 to 130 chambers seamlessly.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Precise',
    description: 'Total control over variables — temperature, nutrients, light, hormones.',
  },
]

export function Solution() {
  return (
    <Section id="solution">
      <div className="text-center mb-20">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            The Solution
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            We Don't Clone Plants.
            <br />
            <span className="text-brand-500 dark:text-brand-400">We Engineer Certainty.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-lg leading-relaxed">
            Our precision tissue culture platform eliminates uncertainty, delivering disease-free,
            genetically stable plants at industrial scale — grown from individual cells in
            sterile, nutrient-rich medium, completely outside of soil.
          </p>
        </FadeIn>
      </div>

      {/* Image */}
      <FadeIn delay={0.15}>
        <div className="rounded-2xl overflow-hidden mb-20 aspect-[16/7]">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1400&q=80"
            alt="Laboratory tissue culture environment"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/40 flex items-center justify-center mx-auto mb-5">
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

      {/* Differentiators */}
      <FadeIn delay={0.2}>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border-light dark:border-border-dark">
          {[
            { title: 'Virus-Free', sub: 'Disease-free at cellular level' },
            { title: 'Identical Genetics', sub: 'Matched to top-performing parents' },
            { title: 'Scalable to Millions', sub: 'From a single source plant' },
            { title: 'Year-Round', sub: 'Independent of season' },
          ].map(d => (
            <div key={d.title} className="text-center">
              <p className="font-semibold text-text-primary-light dark:text-text-primary-dark text-lg">{d.title}</p>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">{d.sub}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}
