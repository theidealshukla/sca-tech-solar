import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Building2, Factory, Wrench, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    label: '01',
    title: 'Residential Solar',
    desc: 'Complete rooftop solar for homes. Net metering, subsidy processing, MPEB approvals—all handled by us.',
    tags: ['On-grid', 'Hybrid', 'Off-grid'],
  },
  {
    icon: Building2,
    label: '02',
    title: 'Commercial Solar',
    desc: 'Turn your commercial rooftop into a power plant. Reduce peak demand charges and earn RECS.',
    tags: ['Retail', 'Hospitals', 'Schools'],
  },
  {
    icon: Factory,
    label: '03',
    title: 'Industrial Solar',
    desc: 'Large-scale ground-mount and carport solutions for industries, SEZs and warehouses.',
    tags: ['Ground-mount', 'Carport', 'EPC'],
  },
  {
    icon: Wrench,
    label: '04',
    title: 'O&M Services',
    desc: 'Annual maintenance contracts with performance guarantees. Remote monitoring included.',
    tags: ['AMC', 'Cleaning', 'Monitoring'],
  },
  {
    icon: ShieldCheck,
    label: '05',
    title: 'Subsidy Processing',
    desc: 'End-to-end PM Surya Ghar subsidy filing. ₹78,000+ subsidy for eligible households.',
    tags: ['PM Surya Ghar', 'DISCOM', 'Paperwork'],
  },
  {
    icon: Zap,
    label: '06',
    title: 'Battery Storage',
    desc: 'Grid-tied battery backup and hybrid inverter solutions for uninterrupted power.',
    tags: ['Lithium', 'Hybrid', '24×7 Power'],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-night-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16 items-end">
          <div className="lg:col-span-2">
            <p className="section-tag">What We Do</p>
            <h2 className="font-black text-night-900 leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', letterSpacing: '-0.03em' }}>
              Discover our offerings, expertise and solutions.
            </h2>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-end gap-4">
            <p className="text-night-500 leading-relaxed">
              From site survey to commissioning and beyond — SuryaTech handles every step of your solar journey, backed by 12+ years of Madhya Pradesh experience.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-sm text-night-900 group w-fit">
              All services
              <span className="w-8 h-8 rounded-full bg-night-200 flex items-center justify-center group-hover:bg-solar-500 group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Service list — like reference's Infrastructure/Sustainability/Investors list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-night-200 rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="bg-white p-7 group hover:bg-night-950 transition-all duration-500 cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-night-300 group-hover:text-night-600 transition-colors">{service.label}</span>
                    <div className="w-10 h-10 rounded-xl bg-solar-50 group-hover:bg-solar-500 flex items-center justify-center transition-all duration-500">
                      <Icon className="w-5 h-5 text-solar-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-night-200 group-hover:border-solar-500 group-hover:bg-solar-500 flex items-center justify-center transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-night-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-lg font-black text-night-900 group-hover:text-white transition-colors duration-500 mb-2">{service.title}</h3>
                <p className="text-sm text-night-500 group-hover:text-night-300 transition-colors duration-500 leading-relaxed mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-night-100 group-hover:bg-white/10 text-night-600 group-hover:text-white/70 text-xs font-semibold transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
