import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, FolderGit2 } from 'lucide-react'
import { projects } from '../data/portfolioData'

const Btn = ({ href, icon: Icon, children }) => href
  ? <a href={href} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:border-violet-400"><Icon size={14} />{children}</a>
  : <span aria-disabled="true" title="No public link yet" className="glass inline-flex cursor-not-allowed items-center gap-2 rounded-full px-4 py-2 text-sm opacity-40"><Icon size={14} />{children}</span>

function ProjectCard({ p, onOpen }) {
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      className="glass glow-hover group flex flex-col overflow-hidden rounded-2xl">
      <button onClick={() => onOpen(p)} className="text-left" aria-label={`Open details for ${p.title}`}>
        <div className="flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-violet/30 via-night to-magenta/20">
          <FolderGit2 size={56} className="text-violet-200/70 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
        </div>
        <div className="p-6 pb-3">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => <li key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors group-hover:border-violet-400/60 group-hover:bg-violet/15 group-hover:text-violet-200">{t}</li>)}
          </ul>
        </div>
      </button>
      <div className="mt-auto flex gap-3 p-6 pt-3">
        <Btn href={p.github} icon={Github}>GitHub</Btn>
        {p.demo && <Btn href={p.demo} icon={ExternalLink}>Live Demo</Btn>}
      </div>
    </motion.article>
  )
}

function List({ title, items, ordered }) {
  return (
    <div className="mt-6"><h4 className="mb-2 font-semibold text-violet-300">{title}</h4>
      {ordered
        ? <ol className="flex flex-wrap items-center gap-2 text-sm">{items.map((s, i) => <li key={s} className="flex items-center gap-2"><span className="rounded-lg border border-violet-400/30 bg-violet/10 px-3 py-1">{s}</span>{i < items.length - 1 && <span aria-hidden="true" className="text-pink-400">→</span>}</li>)}</ol>
        : <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-300">{items.map((s) => <li key={s}>{s}</li>)}</ul>}
    </div>
  )
}

function Modal({ p, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, scale: .97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: .97 }}
        className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-night/95 p-6 sm:p-8">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 rounded-full p-2 hover:bg-white/10"><X size={18} /></button>
        <h3 className="pr-8 text-2xl font-bold">{p.title}</h3>
        <p className="mt-3 text-zinc-300">{p.overview}</p>
        <List title="Features" items={p.features} />
        <div className="mt-6"><h4 className="mb-2 font-semibold text-violet-300">Technology stack</h4>
          <ul className="flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-violet/15 px-3 py-1 font-mono text-xs text-violet-200">{t}</li>)}</ul></div>
        <List title="How it works" items={p.how} ordered />
        <div className="mt-8 flex gap-3"><Btn href={p.github} icon={Github}>GitHub</Btn>{p.demo && <Btn href={p.demo} icon={ExternalLink}>Live Demo</Btn>}</div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((p) => <ProjectCard key={p.id} p={p} onOpen={setActive} />)}</div>
      <AnimatePresence>{active && <Modal p={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
