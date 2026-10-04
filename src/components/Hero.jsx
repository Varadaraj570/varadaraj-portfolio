import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'

export function Socials({ className = '' }) {
  const items = [[Github, 'GitHub', profile.github], [Linkedin, 'LinkedIn', profile.linkedin], [Mail, 'Email', profile.email && `mailto:${profile.email}`]]
  return (
    <div className={`flex gap-3 ${className}`}>
      {items.map(([Icon, label, href]) => href
        ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="glass glow-hover rounded-full p-3"><Icon size={18} /></a>
        : <span key={label} aria-label={`${label} (link not added yet)`} title="Add this link in portfolioData.js" className="glass rounded-full p-3 opacity-40"><Icon size={18} /></span>)}
    </div>
  )
}

const code = [
  ['@RestController', 'text-pink-400'], ['class StudentController {', 'text-violet-300'],
  ['  @GetMapping("/students")', 'text-pink-400'], ['  List<Student> all() {', 'text-violet-300'],
  ['    return service.findAll();', 'text-zinc-300'], ['  }', 'text-violet-300'], ['}', 'text-violet-300'],
]

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pt-28 pb-16 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p className="mb-4 text-lg text-violet-300">Hi, I'm Varadaraj <span aria-hidden="true">👋</span></p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Computer Science Student & <span className="grad-text">Full Stack Developer</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">I build modern web applications, backend systems, and practical software solutions.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary rounded-full px-6 py-3 font-medium">View My Projects</a>
          <a href={profile.resumeUrl || '#resume'} {...(profile.resumeUrl ? { download: true } : {})} className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"><Download size={16} />Download Resume</a>
        </div>
        <Socials className="mt-8" />
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-md">
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="glass rounded-2xl p-5 shadow-[0_0_60px_-10px_rgba(139,92,246,.5)]" role="img" aria-label="Illustration of a code editor showing a Spring Boot controller">
            <div className="mb-4 flex gap-2"><i className="h-3 w-3 rounded-full bg-pink-500/80" /><i className="h-3 w-3 rounded-full bg-violet-400/80" /><i className="h-3 w-3 rounded-full bg-zinc-500/80" /></div>
            <pre className="overflow-x-auto font-mono text-xs leading-6 sm:text-sm">
              {code.map(([t, c], i) => <div key={i} className={c}>{t}</div>)}
            </pre>
          </div>
          <div className="glass absolute -right-2 -bottom-6 rounded-xl px-4 py-3 font-mono text-xs text-violet-200 sm:-right-6">Python · Flask · SQL</div>
          <div className="glass absolute -top-5 -left-2 rounded-xl px-4 py-3 font-mono text-xs text-pink-200 sm:-left-6">200 OK ✓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
