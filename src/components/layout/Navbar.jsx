import { useState } from 'react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line/60 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm text-paper">
          sv<span className="text-signal">.</span>dev
        </a>

        <ul className="hidden gap-8 font-mono text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-signal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="font-mono text-sm text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-ink-line/60 px-6 pb-4 font-mono text-sm text-muted md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 transition-colors hover:text-signal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
