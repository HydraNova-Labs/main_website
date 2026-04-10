import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-8 bg-surface-light dark:bg-surface-dark overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1530836176759-510f58baebf4?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-surface-light/90 dark:bg-surface-dark/90" />
      </div>

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-[1080px] w-full mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-brand-600 dark:text-brand-400 font-medium text-sm tracking-[0.25em] uppercase mb-10"
        >
          Precision Biotech Since 2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-text-primary-light dark:text-text-primary-dark leading-[1.08] tracking-[-0.02em]"
        >
          Strong Genetics,
          <br />
          <span className="italic text-brand-500 dark:text-brand-400">Sustainable Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-8 md:mt-10 text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-[560px] mx-auto leading-relaxed"
        >
          We deliver high-quality, lab-verified Generation Zero plants with a
          complete 360-degree program for an optimized seed-to-harvest cycle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-5 text-sm text-text-secondary-light dark:text-text-secondary-dark italic tracking-wide"
        >
          Where Biology Meets Engineering. Where Science Becomes Scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#solution"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/15 text-[15px]"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-medium rounded-full hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-all duration-300 text-[15px]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} className="text-text-secondary-light/30 dark:text-text-secondary-dark/30 animate-bounce" />
      </motion.a>
    </section>
  )
}
