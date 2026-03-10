import React from 'react'
import { Award, Clock, MapPin, HeadphonesIcon, Cpu, IndianRupee } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'MNRE & DISCOM Certified',
    stat: '100%',
    desc: 'Every installation meets MNRE guidelines and MPEZ DISCOM standards for net metering eligibility.',
  },
  {
    icon: Clock,
    title: '7-Day Installation',
    stat: '7 Days',
    desc: 'From site survey to commissioning — our streamlined process gets your system live fast.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    stat: 'MP Native',
    desc: 'Indore-headquartered with deep knowledge of local utility rules, subsidies and grid conditions.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    stat: '365 Days',
    desc: 'Round-the-clock remote monitoring and responsive on-site service across all our installations.',
  },
  {
    icon: Cpu,
    title: 'Premium Hardware',
    stat: 'Tier 1 Only',
    desc: 'We install only Tier 1 rated panels — Jinko, LONGi, Waaree — with 25-year performance warranties.',
  },
  {
    icon: IndianRupee,
    title: 'Subsidy & EMI Support',
    stat: '₹78,000+',
    desc: 'We handle PM Surya Ghar subsidy paperwork end-to-end. No-cost EMIs available through our bank partners.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="section-tag">Why SuryaTech</p>
            <h2 className="font-black text-night-900 leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', letterSpacing: '-0.03em' }}>
              The most trusted solar installer in{' '}
              <span className="font-display italic text-solar-500">Central India.</span>
            </h2>
          </div>

          {/* Big number callout */}
          <div className="bg-night-950 rounded-3xl p-8 md:p-10 solar-glow">
            <p className="text-night-400 text-sm font-semibold tracking-widest uppercase mb-3">Our track record</p>
            <p className="font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.04em' }}>
              33.0<span className="text-solar-400 text-3xl font-bold align-middle ml-1">%</span>
            </p>
            <p className="text-night-300 text-sm mb-6">Average bill reduction for our residential clients in Indore</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg. Payback Period', value: '4.2 Years' },
                { label: 'Avg. System Size', value: '5.5 kWp' },
                { label: 'CO₂ Offset / Year', value: '4.8 Tonnes' },
                { label: 'Units Generated / Year', value: '8,500+' },
              ].map(item => (
                <div key={item.label} className="bg-white/5 rounded-xl p-3">
                  <p className="text-solar-400 font-black text-lg">{item.value}</p>
                  <p className="text-night-400 text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="group p-6 rounded-2xl border border-night-100 hover:border-solar-200 hover:bg-solar-50 transition-all duration-300 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-solar-100 rounded-xl flex items-center justify-center group-hover:bg-solar-500 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-solar-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-black text-solar-500 bg-solar-100 px-2.5 py-1 rounded-full">{r.stat}</span>
                </div>
                <h3 className="font-bold text-night-900 mb-2 text-base">{r.title}</h3>
                <p className="text-night-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Full width image CTA */}
        <div className="mt-16 relative rounded-3xl overflow-hidden h-72 md:h-96">
          <img
            src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=1600&q=85&auto=format"
            alt="Solar installation team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950/80 to-night-950/30 flex items-center">
            <div className="px-10 md:px-14">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-solar-300 mb-3">Our Promise</p>
              <p className="text-white font-black leading-tight max-w-lg" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
                To transition to a more stable, reliable and sustainable energy supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
