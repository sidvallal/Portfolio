import { profile } from '../../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 font-mono text-xs text-muted md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>built with react + tailwind</p>
      </div>
    </footer>
  )
}
