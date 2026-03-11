import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Shield, Cpu, Star, ArrowRight, Filter } from 'lucide-react'

const allProducts = [
  { cat: 'Panels', brand: 'LONGi Solar', name: 'Hi-MO 7 HPBC', power: '545 Wp', eff: '22.3%', warranty: '25 Yr', price: '₹21,500', badge: 'Best Seller', badgeColor: 'bg-night-900', rating: 4.9, img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500&q=80&auto=format' },
  { cat: 'Panels', brand: 'Jinko Solar', name: 'Tiger Neo N-Type', power: '580 Wp', eff: '23.1%', warranty: '30 Yr', price: '₹24,800', badge: 'Premium', badgeColor: 'bg-night-700', rating: 4.9, img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80&auto=format' },
  { cat: 'Panels', brand: 'Waaree', name: 'Navitas 530', power: '530 Wp', eff: '21.5%', warranty: '25 Yr', price: '₹18,900', badge: 'Made in India', badgeColor: 'bg-night-600', rating: 4.8, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format' },
  { cat: 'Panels', brand: 'Canadian Solar', name: 'HiKu7 Mono', power: '590 Wp', eff: '22.8%', warranty: '25 Yr', price: '₹26,500', badge: 'High Efficiency', badgeColor: 'bg-night-700', rating: 4.8, img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&q=80&auto=format' },
  { cat: 'Inverters', brand: 'Solis', name: 'S6-GR1P3K', power: '3 kW', eff: '97.7%', warranty: '10 Yr', price: '₹18,000', badge: 'Best Value', badgeColor: 'bg-night-900', rating: 4.7, img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80&auto=format' },
  { cat: 'Inverters', brand: 'Solis', name: 'S6 Pro 5kW', power: '5 kW', eff: '98.4%', warranty: '10 Yr', price: '₹32,000', badge: 'Top Rated', badgeColor: 'bg-night-700', rating: 4.9, img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80&auto=format' },
  { cat: 'Inverters', brand: 'Havells', name: 'Solero 10K', power: '10 kW', eff: '97.9%', warranty: '5 Yr', price: '₹58,000', badge: 'Indian Brand', badgeColor: 'bg-night-600', rating: 4.6, img: 'https://images.unsplash.com/photo-1615400610825-7f1b9d573c09?w=500&q=80&auto=format' },
  { cat: 'Inverters', brand: 'GoodWe', name: 'ET Plus H 5kW', power: '5 kW Hybrid', eff: '98.2%', warranty: '10 Yr', price: '₹65,000', badge: 'Hybrid', badgeColor: 'bg-night-700', rating: 4.8, img: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=500&q=80&auto=format' },
  { cat: 'Batteries', brand: 'Livguard', name: 'Li-On 5.12 kWh', power: '5.12 kWh', eff: '95%', warranty: '10 Yr', price: '₹1,40,000', badge: 'Indian Brand', badgeColor: 'bg-night-600', rating: 4.7, img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&q=80&auto=format' },
  { cat: 'Batteries', brand: 'Luminous', name: 'NXT+ LiFePO4', power: '3.5 kWh', eff: '96%', warranty: '7 Yr', price: '₹95,000', badge: 'Popular', badgeColor: 'bg-night-800', rating: 4.6, img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=500&q=80&auto=format' },
  { cat: 'Kits', brand: 'SuryaTech', name: '3 kWp Home Kit', power: '3 kWp', eff: 'On-grid', warranty: '25 Yr', price: '₹1,35,000', badge: 'Complete', badgeColor: 'bg-night-800', rating: 5.0, img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80&auto=format' },
  { cat: 'Kits', brand: 'SuryaTech', name: '5 kWp Home Kit', power: '5 kWp', eff: 'On-grid', warranty: '25 Yr', price: '₹2,10,000', badge: 'Most Popular', badgeColor: 'bg-night-900', rating: 5.0, img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&q=80&auto=format' },
]

const cats = ['All', 'Panels', 'Inverters', 'Batteries', 'Kits']

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? allProducts : allProducts.filter(p => p.cat === active)

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="py-20 md:py-28 bg-night-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="section-tag">Product Range</p>
          <h1 className="font-black text-night-900 leading-tight mt-2 mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em' }}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-night-100 card-hover group">
              <div className="relative h-48 overflow-hidden bg-night-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold ${p.badgeColor}`}>{p.badge}</span>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-night-900 fill-night-900" />
                  <span className="text-xs font-bold text-night-700">{p.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-night-400 tracking-wider uppercase mb-1">{p.brand}</p>
                <h3 className="font-black text-night-900 mb-3">{p.name}</h3>
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  {[
                    { icon: Zap, v: p.power },
                    { icon: Cpu, v: p.eff },
                    { icon: Shield, v: p.warranty },
                  ].map(({ icon: Icon, v }, j) => (
                    <div key={j} className="bg-night-50 rounded-lg p-2 text-center">
                      <Icon className="w-3 h-3 text-night-500 mx-auto mb-0.5" />
                      <p className="text-xs font-black text-night-900">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-black text-night-900">{p.price}</p>
                  <Link to="/contact" className="btn-primary text-xs py-2 px-3">Quote</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-night-950 rounded-3xl p-10 text-center">
          <p className="text-white font-black text-3xl md:text-4xl mb-3">Can't find what you need?</p>
          <p className="text-night-400 mb-6">We source custom specifications for large commercial and industrial projects.</p>
          <Link to="/contact" className="btn-primary">
            Talk to Our Engineer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
