import { motion } from 'framer-motion'
import { profile } from '../../data/profile.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="section pt-16 md:pt-24">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
        <motion.p variants={item} className="prompt-label">
          $ whoami
        </motion.p>

        <motion.h1 variants={item} className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {profile.name}
          <span className="animate-cursor text-signal">_</span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 font-mono text-base text-ion md:text-lg">
          {profile.role}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-sm bg-signal px-5 py-3 font-mono text-sm text-ink transition-colors hover:bg-signal-dim"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-ink-line px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal"
          >
            get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
