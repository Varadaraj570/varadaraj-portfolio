import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { Section } from './Sections'
import { Socials } from './Hero'

const field =
  'w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm placeholder:text-zinc-600 focus:border-violet-400 focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()

    const d = Object.fromEntries(new FormData(e.currentTarget))

    console.log('Form data:', d)

    setStatus(
      'Thanks for reaching out! Your message has been received.'
    )
  }

  const rows = [
    [
      Mail,
      'Email',
      'poojaryd570@gmail.com',
      'mailto:poojaryd570@gmail.com',
    ],
    [
      Linkedin,
      'LinkedIn',
      'linkedin.com/in/varadarajpoojary',
      'https://linkedin.com/in/varadarajpoojary',
    ],
    [
      Github,
      'GitHub',
      'github.com/Varadaraj570',
      'https://github.com/Varadaraj570',
    ],
  ]

  return (
    <Section id="contact" title="Let's Connect">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="max-w-md leading-relaxed text-zinc-400">
            I'm always open to discussing software development, projects,
            internships, and new opportunities.
          </p>

          <ul className="mt-8 space-y-4">
            {rows.map(([Icon, k, v, href]) => (
              <li
                key={k}
                className="flex items-center gap-3"
              >
                <Icon size={18} className="text-violet-300" />

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-300 transition-colors"
                >
                  {v}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={submit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          <label className="block text-sm">
            Name
            <input
              name="name"
              required
              className={`${field} mt-1`}
              placeholder="Your name"
            />
          </label>

          <label className="block text-sm">
            Email
            <input
              name="email"
              type="email"
              required
              className={`${field} mt-1`}
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className={`${field} mt-1`}
              placeholder="How can I help?"
            />
          </label>

          <button
            type="submit"
            className="btn-primary w-full rounded-full px-6 py-3 font-medium"
          >
            Send Message
          </button>

          {status && (
            <p
              role="status"
              className="text-sm text-pink-300"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-violet/15 px-5 py-10 text-center text-sm text-zinc-500">
      <Socials className="mb-6 justify-center" />

      <p>© 2026 Varadaraj. All rights reserved.</p>

      <p className="mt-1">
        Designed & Developed by Varadaraj
      </p>
    </footer>
  )
}