import { skillCategories } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-ink-line/60">
      <p className="prompt-label">$ ls skills/</p>
      <h2 className="heading-2 mt-4">Skills</h2>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h3 className="font-mono text-sm text-ion">{category.label}</h3>
            <ul className="mt-4 space-y-2 border-l border-ink-line pl-4">
              {category.items.map((item) => (
                <li key={item} className="text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
