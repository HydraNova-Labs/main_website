import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-surface-light dark:bg-surface-dark overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1530836176759-510f58baebf4?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85 dark:bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/30 to-transparent dark:from-brand-900/20 dark:to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-brand-500 dark:text-brand-400 font-semibold text-sm tracking-[0.2em] uppercase mb-8"
        >
          Precision Biotech Since 2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-text-primary-light dark:text-text-primary-dark tracking-tight leading-[1.05]"
        >
          Genetically Stable
          <br />
          Plants for a
          <br />
          <span className="text-brand-500 dark:text-brand-400">Volatile Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-xl mx-auto leading-relaxed"
        >
          We deliver high-quality, lab-verified Generation Zero plants with a
          complete 360-degree program for an optimized seed-to-harvest cycle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 text-base text-text-secondary-light/60 dark:text-text-secondary-dark/60 italic"
        >
          Where Biology Meets Engineering. Where Science Becomes Scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#solution"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold rounded-xl hover:bg-surface-elevated-light dark:hover:bg-surface-elevated-dark transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#problem" aria-label="Scroll down">
          <ArrowDown size={22} className="text-text-secondary-light/30 dark:text-text-secondary-dark/30 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
