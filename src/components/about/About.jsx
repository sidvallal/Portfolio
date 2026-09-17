import { profile } from '../../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section border-t border-ink-line/60">
      <p className="prompt-label">$ cat about.md</p>
      <h2 className="heading-2 mt-4">About</h2>

      <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-muted">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
