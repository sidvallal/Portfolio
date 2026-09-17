import { education } from '../../data/education.js'

export default function Education() {
  return (
    <section id="education" className="section border-t border-ink-line/60">
      <p className="prompt-label">$ cat education.md</p>
      <h2 className="heading-2 mt-4">Education</h2>

      <div className="mt-8 space-y-8">
        {education.map((entry) => (
          <div key={entry.degree} className="border-l border-ink-line pl-6">
            <p className="font-mono text-sm text-muted">{entry.period}</p>
            <h3 className="mt-1 font-display text-xl font-medium text-paper">{entry.degree}</h3>
            <p className="mt-1 text-ion">{entry.institution}</p>
            {entry.note && <p className="mt-2 max-w-prose text-muted">{entry.note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
