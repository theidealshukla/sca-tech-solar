import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Cpu, Star } from 'lucide-react'

const categories = ['All', 'Panels', 'Inverters', 'Batteries', 'Kits']

const products = [
  {
    category: 'Panels',
    name: 'LongSun HiMO 7',
    brand: 'LONGi Solar',
    power: '545 Wp',
    eff: '22.3%',
    warranty: '25 Yr',
    price: '₹21,500',
    badge: 'Best Seller',
    badgeColor: 'bg-solar-500',
    img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500&q=80&auto=format',
  },
  {
    category: 'Panels',
    name: 'Tiger Neo N-Type',
    brand: 'Jinko Solar',
    power: '580 Wp',
    eff: '23.1%',
    warranty: '30 Yr',
    price: '₹24,800',
    badge: 'Premium',
    badgeColor: 'bg-sky-500',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80&auto=format',
  },
  {
    category: 'Panels',
    name: 'Waaree Navitas',
    brand: 'Waaree',
    power: '530 Wp',
    eff: '21.5%',
    warranty: '25 Yr',
    price: '₹18,900',
    badge: 'Made in India',
    badgeColor: 'bg-green-600',
    img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&q=80&auto=format',
  },
  {
    category: 'Inverters',
    name: 'Solis S6 Pro',
    brand: 'Solis',
    power: '5 kW',
    eff: '98.4%',
    warranty: '10 Yr',
    price: '₹32,000',
    badge: 'Top Rated',
    badgeColor: 'bg-purple-500',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format',
  },
  {
    category: 'Inverters',
    name: 'Havells Solero',
    brand: 'Havells',
    power: '10 kW',
    eff: '97.9%',
    warranty: '5 Yr',
    price: '₹58,000',
    badge: 'Indian Brand',
    badgeColor: 'bg-orange-500',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80&auto=format',
  },
  {
    category: 'Kits',
    name: 'Home Starter Kit',
    brand: 'SuryaTech',
    power: '3 kWp',
    eff: 'On-grid',
    warranty: '25 Yr',
    price: '₹1,35,000',
    badge: 'Complete Kit',
    badgeColor: 'bg-solar-600',
    img: 'https://images.unsplash.com/photo-1615400610825-7f1b9d573c09?w=500&q=80&auto=format',
  },
]

export default function ProductsShowcase() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="py-24 md:py-32 bg-night-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
          <div className="flex-1">
            <p className="section-tag">Our Range</p>
            <h2 className="font-black text-night-900 leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', letterSpacing: '-0.03em' }}>
              We give you a comprehensive view of top solar products.
            </h2>
          </div>
          <Link to="/products" className="btn-outline self-start md:self-auto whitespace-nowrap">
            All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-night-900 text-white shadow-lg'
                  : 'bg-white border border-night-200 text-night-600 hover:border-night-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-night-100 card-hover group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-night-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold ${p.badgeColor}`}>
                  {p.badge}
                </span>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-solar-500 fill-solar-500" />
                  <span className="text-xs font-bold text-night-700">4.9</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-bold text-night-400 tracking-wider uppercase mb-1">{p.brand}</p>
                <h3 className="font-black text-night-900 text-lg mb-3">{p.name}</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: Zap, label: 'Power', value: p.power },
                    { icon: Cpu, label: 'Efficiency', value: p.eff },
                    { icon: Shield, label: 'Warranty', value: p.warranty },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-night-50 rounded-xl p-2.5 text-center">
                      <Icon className="w-3.5 h-3.5 text-solar-500 mx-auto mb-1" />
                      <p className="text-xs font-black text-night-900">{value}</p>
                      <p className="text-[10px] text-night-400">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black text-night-900">{p.price}</p>
                    <p className="text-xs text-night-400">Installed price per unit</p>
                  </div>
                  <Link to="/contact" className="btn-primary text-xs py-2.5 px-4">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
