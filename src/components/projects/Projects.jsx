import { projects } from '../../data/projects.js'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-ink-line/60">
      <p className="prompt-label">$ ls projects/</p>
      <h2 className="heading-2 mt-4">Projects</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col justify-between rounded-sm border border-ink-line bg-ink-soft p-6 transition-colors hover:border-signal/60"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-medium text-paper">{p.title}</h3>
                {p.status && (
                  <span
                    className={`mt-1 flex shrink-0 items-center gap-1.5 font-mono text-xs ${
                      p.status === 'completed' ? 'text-ion' : 'text-signal'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        p.status === 'completed' ? 'bg-ion' : 'bg-signal'
                      }`}
                    />
                    {p.status}
                  </span>
                )}
              </div>
              <p className="mt-3 text-muted">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-sm border border-ink-line px-2 py-1 font-mono text-xs text-ion">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-4 font-mono text-sm">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted transition-colors hover:text-signal"
                >
                  <FiGithub aria-hidden="true" /> code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted transition-colors hover:text-signal"
                >
                  <FiExternalLink aria-hidden="true" /> live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
