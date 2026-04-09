import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <Section id="contact" dark>
      <div className="text-center max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Get Started
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-tight">
            Join Us in Engineering
            <br />
            the Future of Food
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            The science is proven. The demand is real. The moment is now.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="mailto:grow@hydranovalabs.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20"
            >
              <Mail size={20} />
              grow@hydranovalabs.com
            </a>
            <a
              href="tel:+12142250544"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold rounded-xl hover:bg-surface-card-light dark:hover:bg-surface-card-dark transition-all duration-300"
            >
              <Phone size={20} />
              214-225-0544
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
