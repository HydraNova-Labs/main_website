import { Section } from './Section'
import { FadeIn } from './FadeIn'
import { Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <Section id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <FadeIn className="text-center">
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-5">
            Get Started
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary-light dark:text-text-primary-dark leading-[1.1] tracking-[-0.01em]">
            Join Us in Engineering
            <br />
            the <span className="italic text-brand-500 dark:text-brand-400">Future of Agriculture</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="text-center">
          <p className="mt-7 text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            The science is proven. The demand is real. The moment is now.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex justify-center">
          <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="mailto:grow@atlasbioindustries.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/15 text-[15px]"
            >
              <Mail size={18} />
              grow@atlasbioindustries.com
            </a>
            <a
              href="tel:+12142250544"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-medium rounded-full hover:bg-surface-card-light dark:hover:bg-surface-card-dark transition-all duration-300 text-[15px]"
            >
              <Phone size={18} />
              214-225-0544
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
