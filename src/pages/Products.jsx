import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Filter } from 'lucide-react'

const allProducts = [
  // ─── Solar Panels ─────────────────────────────────
  { cat: 'Solar Panels', brand: 'LONGi Solar', name: 'Hi-MO 7 HPBC 545W', desc: 'Bifacial half-cell technology for maximum energy yield and long-term reliability.', badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Solar Panels', brand: 'Jinko Solar', name: 'Tiger Neo N-Type 580W', desc: 'Premium N-Type cells with industry-leading efficiency for commercial rooftops.', badge: 'Premium', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Solar Panels', brand: 'Waaree', name: 'Navitas 530W', desc: 'Made-in-India monocrystalline panels built for extreme Indian weather.', badge: 'Made in India', img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Solar Panels', brand: 'Canadian Solar', name: 'HiKu7 Mono 590W', desc: 'High-efficiency mono PERC module with excellent low-light performance.', badge: 'High Efficiency', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80&auto=format&fit=crop' },
  // ─── Inverters ────────────────────────────────────
  { cat: 'Inverters', brand: 'Solis', name: 'S6-GR1P 3kW', desc: 'Compact, reliable on-grid string inverter with Wi-Fi monitoring.', badge: 'Best Value', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Inverters', brand: 'Solis', name: 'S6 Pro 5kW', desc: 'Intelligent dual MPPT inverter designed for maximum self-consumption.', badge: 'Top Rated', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Inverters', brand: 'Havells', name: 'Solero 10kW', desc: 'Three-phase heavy-duty inverter built for large residential and commercial setups.', badge: 'Indian Brand', img: 'https://images.unsplash.com/photo-1615400610825-7f1b9d573c09?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Inverters', brand: 'GoodWe', name: 'ET Plus Hybrid 5kW', desc: 'Hybrid inverter supporting solar, battery, and grid simultaneously.', badge: 'Hybrid', img: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=600&q=80&auto=format&fit=crop' },
  // ─── Batteries ────────────────────────────────────
  { cat: 'Batteries', brand: 'Livguard', name: 'LiFePO4 5.12 kWh', desc: '6000+ cycle lithium iron phosphate battery with BMS and mobile monitoring.', badge: 'Indian Brand', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Batteries', brand: 'Luminous', name: 'NXT+ LiFePO4 3.5 kWh', desc: 'Smart, wall-mounted storage with modular expansion for any home.', badge: 'Popular', img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&q=80&auto=format&fit=crop' },
  // ─── Water Heaters ────────────────────────────────
  { cat: 'Water Heaters', brand: 'AquaSun', name: 'ETC 200 LPD', desc: 'Evacuated Tube Collector providing 24×7 hot water for households of 4–6 people.', badge: 'Popular', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Water Heaters', brand: 'ThermoMax', name: 'FPC 300 LPD', desc: 'Flat Plate Collector technology ideal for large families and commercial buildings.', badge: 'Commercial', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80&auto=format&fit=crop' },
  // ─── Complete Kits ────────────────────────────────
  { cat: 'Kits', brand: 'SCA Tech', name: '3 kWp Home Kit', desc: 'Complete on-grid solar system for 2–3 BHK homes. Includes panels, inverter, and mounting.', badge: 'Complete', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80&auto=format&fit=crop' },
  { cat: 'Kits', brand: 'SCA Tech', name: '5 kWp Home Kit', desc: 'Full 5kW on-grid solar system for 3–4 BHK homes. Zero electricity bills guaranteed.', badge: 'Most Popular', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80&auto=format&fit=crop' },
]

const cats = ['All', 'Solar Panels', 'Inverters', 'Batteries', 'Water Heaters', 'Kits']

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? allProducts : allProducts.filter(p => p.cat === active)

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="py-20 md:py-28 bg-night-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="section-tag">Product Range</p>
          <h1 className="font-black text-night-900 leading-tight mt-2 mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
            Only Tier 1.<br /><span className="font-light text-night-400">Only the best.</span>
          </h1>
          <p className="text-night-500 max-w-xl text-lg leading-relaxed">
            We install only internationally certified Tier 1 solar products. Every brand in our range is selected for quality, reliability and long-term performance.
          </p>
        </div>
      </div>

      {/* Filter + grid */}
      <div className="py-16 max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <Filter className="w-4 h-4 text-night-400" />
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat ? 'bg-night-900 text-white' : 'bg-white border border-night-200 text-night-600 hover:border-night-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <Link to="/contact" key={i} className="bg-white rounded-2xl overflow-hidden border border-night-100 card-hover group block">
              <div className="relative h-48 overflow-hidden bg-night-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-night-900 text-white text-xs font-bold">{p.badge}</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-night-400 tracking-wider uppercase mb-1">{p.brand}</p>
                <h3 className="font-bold text-night-900 text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-night-500 leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-night-950 rounded-3xl p-10 text-center">
          <p className="text-white font-black text-3xl md:text-4xl mb-3">Can&apos;t find what you need?</p>
          <p className="text-night-400 mb-6">We source custom specifications for large commercial and industrial projects.</p>
          <Link to="/contact" className="btn-primary">
            Talk to Our Engineer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
