import { MotionConfig } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { About, Skills, Education, Certifications, Resume } from './components/Sections'
import Contact, { Footer } from './components/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Certifications /><Resume /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
