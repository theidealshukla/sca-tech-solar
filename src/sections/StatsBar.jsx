import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1200, suffix: '+', label: 'Installations', sub: 'Across MP & CG' },
  { value: 18, suffix: ' MW', label: 'Total Capacity', sub: 'Installed so far' },
  { value: 300, suffix: '+', label: 'Sunny Days/Yr', sub: 'In Indore region' },
  { value: 12, suffix: '+', label: 'Years Experience', sub: 'Since 2012' },
  { value: 98, suffix: '%', label: 'Happy Clients', sub: 'Satisfaction rate' },
]

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section id="stats" className="bg-night-950 py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Marquee strip above stats */}
        <div className="overflow-hidden mb-10 opacity-20">
          <div className="marquee-inner whitespace-nowrap">
            {[...Array(2)].map((_, idx) => (
              <span key={idx} className="inline-flex items-center gap-6 text-white text-xs font-bold tracking-[0.2em] uppercase">
                {['MNRE Certified', '·', 'ISO 9001:2015', '·', 'DISCOM Empanelled', '·', '25 Year Warranty', '·', 'Government Subsidy Support', '·', 'Zero Interest EMI', '·', 'Indore · Bhopal · Ujjain · Dewas', '·'].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="bg-night-950 px-6 py-8 flex flex-col items-start gap-1 group hover:bg-night-900 transition-colors duration-300">
              <p className="text-3xl md:text-4xl font-black text-white leading-none font-display">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm font-semibold text-white/50 mt-1">{s.label}</p>
              <p className="text-xs text-night-600">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
