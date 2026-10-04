import { useEffect, useRef } from 'react'
export default function Background() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, raf, stars = []
    const init = () => {
      w = c.width = innerWidth; h = c.height = innerHeight
      const n = Math.min(110, Math.floor((w * h) / 14000))
      stars = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.3 + .3, v: Math.random() * .12 + .03, a: Math.random() * .6 + .2 }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        ctx.fillStyle = `rgba(221,214,254,${s.a})`
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill()
        if (!still) { s.y -= s.v; if (s.y < 0) { s.y = h; s.x = Math.random() * w } }
      }
      if (!still) raf = requestAnimationFrame(draw)
    }
    init(); draw(); addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', init) }
  }, [])
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 bg-ink">
      <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-[140px]" />
      <div className="absolute bottom-0 -right-32 h-[30rem] w-[30rem] rounded-full bg-magenta/10 blur-[140px]" />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  )
}
