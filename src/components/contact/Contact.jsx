import { profile } from '../../data/profile.js'
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-ink-line/60">
      <p className="prompt-label">$ contact --send</p>
      <h2 className="heading-2 mt-4">Get in touch</h2>

      <p className="mt-4 max-w-prose text-lg text-muted">
        Working on something in generative AI or agentic systems, or just want to talk shop?
        Reach out — I read everything that lands here.
      </p>

      <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
        <a
          href={`mailto:${profile.socialLinks.email}`}
          className="flex items-center gap-2 rounded-sm border border-ink-line px-4 py-3 text-paper transition-colors hover:border-signal hover:text-signal"
        >
          <FiMail aria-hidden="true" /> {profile.socialLinks.email}
        </a>
        <a
          href={profile.socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-sm border border-ink-line px-4 py-3 text-paper transition-colors hover:border-signal hover:text-signal"
        >
          <FiGithub aria-hidden="true" /> github.com/sidvallal
        </a>
        <a
          href={profile.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-sm border border-ink-line px-4 py-3 text-paper transition-colors hover:border-signal hover:text-signal"
        >
          <FiLinkedin aria-hidden="true" /> linkedin.com/in/siddharth-vallal
        </a>
      </div>
    </section>
  )
}
