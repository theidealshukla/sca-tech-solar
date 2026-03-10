import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function AboutVision() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top row — like reference editorial style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <p className="section-tag">2024 · About SuryaTech</p>
            <h2 className="font-black text-night-900 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              From rooftop dreams{' '}
              <span className="font-display italic text-solar-500">to clean energy</span>{' '}
              for all of Central India.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-night-500 text-base md:text-lg leading-relaxed">
              SuryaTech Solar was founded in Indore with a single mission: to make premium solar energy accessible to every home and business in Madhya Pradesh. We combine German-engineered panels with local expertise and after-sales service you can rely on.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-night-900 group">
              More about us
              <span className="w-8 h-8 rounded-full bg-night-100 flex items-center justify-center group-hover:bg-solar-500 group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Big scrolling text — like reference */}
        <div className="overflow-hidden mb-16 -mx-5 md:-mx-8">
          <p className="whitespace-nowrap font-black text-night-100 leading-none select-none" style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', letterSpacing: '-0.04em' }}>
            Clean Energy · Solar Power · Indore · MP ·&nbsp;
          </p>
        </div>

        {/* Cards row — like reference's data cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              pill: '+ RESIDENTIAL',
              title: 'Home Solar',
              value: '3 kW – 10 kW',
              desc: 'Cut your electricity bill by up to 90%. On-grid and hybrid systems with net metering for Indore MPEB.',
              color: 'bg-solar-50 border-solar-100',
              accent: 'text-solar-600',
              img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80&auto=format',
            },
            {
              pill: '+ COMMERCIAL',
              title: 'Business Solar',
              value: '10 kW – 500 kW',
              desc: 'Reduce operating costs, earn REC credits and meet your corporate green targets.',
              color: 'bg-sky-50 border-sky-100',
              accent: 'text-sky-600',
              img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80&auto=format',
            },
            {
              pill: '+ INDUSTRIAL',
              title: 'Industrial Solar',
              value: '500 kW – 5 MW',
              desc: 'Ground-mount and carport solutions for factories, warehouses and industrial parks across MP.',
              color: 'bg-night-950 border-night-900',
              accent: 'text-solar-400',
              img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80&auto=format',
            },
          ].map((card, i) => (
            <div key={i} className={`rounded-2xl border overflow-hidden group card-hover ${card.color}`}>
              <div className="h-44 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className={`text-xs font-bold tracking-widest uppercase ${card.accent}`}>{card.pill}</span>
                <h3 className={`text-xl font-black mt-2 mb-1 ${i === 2 ? 'text-white' : 'text-night-900'}`}>{card.title}</h3>
                <p className={`text-3xl font-black mb-3 ${card.accent}`}>{card.value}</p>
                <p className={`text-sm leading-relaxed ${i === 2 ? 'text-night-400' : 'text-night-500'}`}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision statement */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="section-tag">Our Vision · 2030</p>
            <p className="text-night-900 font-black leading-tight" style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              <span className="text-night-400 font-medium">SuryaTech aims to power</span> 10,000 homes across Madhya Pradesh with clean, affordable solar by 2030.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { year: '2012', text: 'Founded in Indore with 5-person team' },
              { year: '2018', text: 'Crossed 500 installations milestone' },
              { year: '2022', text: 'Expanded to Bhopal, Ujjain & Dewas' },
              { year: '2025 →', text: 'Target: 2,000 installs per year' },
            ].map(item => (
              <div key={item.year} className="flex items-start gap-4">
                <span className="text-xs font-bold text-solar-500 w-14 flex-shrink-0 mt-0.5">{item.year}</span>
                <p className="text-sm text-night-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
