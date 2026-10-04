import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Resume', 'Contact']
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(scrollY > 20)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-ink/60 backdrop-blur-xl border-b border-violet/20' : 'bg-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-bold tracking-widest grad-text">VARADARAJ</a>
        <ul className="hidden items-center gap-6 text-sm text-zinc-300 lg:flex">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-violet-300">{l}</a></li>)}
        </ul>
        <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-5 lg:hidden">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">{l}</a></li>)}
        </ul>
      )}
    </header>
  )
}
