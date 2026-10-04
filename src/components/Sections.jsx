import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Award, Briefcase, FileText, Download, BookOpen } from 'lucide-react'
import { profile, skills, coursework, certifications } from '../data/portfolioData'

export const Section = ({ id, title, children, narrow }) => (
  <motion.section id={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }}
    className={`mx-auto px-5 py-24 ${narrow ? 'max-w-3xl' : 'max-w-6xl'}`}>
    <h2 className="mb-12 text-3xl font-bold sm:text-4xl">{title}</h2>{children}
  </motion.section>
)

export function About() {
  const info = [[MapPin, 'Location', profile.location], [GraduationCap, 'Education', profile.degree], [Award, 'CGPA', profile.cgpa], [Briefcase, 'Role', 'Full Stack Developer']]
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="glass mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-gradient-to-br from-violet/20 to-magenta/10 shadow-[0_0_60px_-15px_rgba(139,92,246,.6)]" role="img" aria-label="Monogram avatar for Varadaraj">
          <span className="grad-text text-8xl font-bold">V</span>
        </div>
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-violet-300">Who I Am</h3>
          <div className="space-y-4 leading-relaxed text-zinc-400">
            <p>I am a Computer Science Engineering student from Mangalore, Karnataka, with a strong interest in full-stack development, backend engineering, and machine learning.</p>
            <p>I enjoy turning ideas into working applications and continuously improving my programming and problem-solving skills.</p>
            <p>I have worked with Java, Spring Boot, Python, Flask, SQL, JavaScript, and modern development tools.</p>
            <p>My current goal is to grow as a Full Stack Developer and contribute to real-world software projects.</p>
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {info.map(([Icon, k, v]) => (
              <div key={k} className="glass glow-hover flex gap-3 rounded-xl p-4"><Icon className="mt-1 shrink-0 text-violet-300" size={18} />
                <div><dt className="text-xs text-zinc-500">{k}</dt><dd className="text-sm font-medium">{v}</dd></div></div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="glass rounded-2xl p-6">
            <h3 className="mb-4 font-semibold text-violet-300">{cat}</h3>
            <ul className="flex flex-wrap gap-2">
              {list.map((s) => <li key={s} className="rounded-lg border border-white/10 bg-white/[.03] px-3 py-1.5 text-sm transition-all hover:border-violet-400/70 hover:shadow-[0_0_16px_-2px_rgba(139,92,246,.6)]">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education" narrow>
      <div className="relative border-l border-violet-400/30 pl-8">
        <span className="absolute top-1 -left-[7px] h-3.5 w-3.5 rounded-full bg-gradient-to-br from-violet to-magenta shadow-[0_0_14px_rgba(192,38,211,.8)]" />
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">B.E. Computer Science and Engineering</h3>
          <p className="mt-1 text-zinc-300">{profile.college}</p>
          <p className="text-sm text-zinc-500">VTU Affiliated · CGPA: {profile.cgpa}</p>
          <h4 className="mt-6 mb-3 text-sm font-semibold text-violet-300">Relevant coursework</h4>
          <ul className="flex flex-wrap gap-2">{coursework.map((c) => <li key={c} className="rounded-full bg-violet/10 px-3 py-1 text-sm text-violet-100">{c}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Learning">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map(({ issuer, items }) => (
          <div key={issuer} className="glass glow-hover rounded-2xl p-6">
            <BookOpen className="mb-4 text-violet-300" />
            <h3 className="font-semibold">{issuer}</h3>
            <p className="mt-2 text-sm text-zinc-500">{items.length ? items.map((i) => i.title).join(', ') : 'Certificate details coming soon.'}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Resume() {
  const has = !!profile.resumeUrl
  return (
    <Section id="resume" title="My Resume" narrow>
      <div className="glass rounded-3xl p-8 text-center shadow-[0_0_60px_-20px_rgba(139,92,246,.6)]">
        <FileText className="mx-auto mb-4 text-violet-300" size={40} />
        <p className="text-lg text-zinc-300">Interested in my background and experience?</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {has ? (<>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-6 py-3 font-medium">View Resume</a>
            <a href={profile.resumeUrl} download className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3"><Download size={16} />Download CV</a>
          </>) : <p className="text-sm text-zinc-500">Resume PDF not added yet. Place it at <code className="font-mono text-violet-300">public/resume.pdf</code> and set <code className="font-mono text-violet-300">resumeUrl</code> in portfolioData.js.</p>}
        </div>
      </div>
    </Section>
  )
}
