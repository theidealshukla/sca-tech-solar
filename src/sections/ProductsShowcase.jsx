import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Solar Panels', 'Batteries', 'Water Heaters', 'Inverters']

const products = [
  {
    category: 'Solar Panels',
    name: 'LongSun Hi-MO Series 545W',
    desc: 'Bifacial half-cell technology for maximum energy yield and long-term reliability.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Solar Panels',
    name: 'Tiger Neo N-Type 580W',
    desc: 'Premium N-Type technology perfect for both residential and commercial rooftops.',
    img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Solar Panels',
    name: 'Waaree Navitas 530W',
    desc: 'High-efficiency Made In India panels ideal for extreme weather conditions.',
    img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Batteries',
    name: 'PowerWall Pro 10kWh',
    desc: 'Seamless backup power with smart app integration and an ultra-long cycle life.',
    img: 'https://images.unsplash.com/photo-1620241608701-94ef138fc417?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Batteries',
    name: 'EcoStore Lithium 5kWh',
    desc: 'Compact, scalable storage solution designed for essential home backup.',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Water Heaters',
    name: 'AquaSun ETC 200 LPD',
    desc: 'Evacuated Tube Collector system providing 24x7 hot water cost-effectively.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Water Heaters',
    name: 'ThermoMax FPC 300 LPD',
    desc: 'Flat Plate Collector technology built for large families and commercial use.',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Inverters',
    name: 'Solis S6 Pro 5kW',
    desc: 'Intelligent hybrid inverter designed for optimal self-consumption.',
    img: 'https://images.unsplash.com/photo-1518104593124-ac2e82abcb4b?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'Inverters',
    name: 'Havells Solero 10kW',
    desc: 'Heavy-duty three-phase inverter tailored for large residential setups.',
    img: 'https://images.unsplash.com/photo-1621616233486-538ca2713e7b?w=600&q=80&auto=format&fit=crop',
  },
]

export default function ProductsShowcase() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-night-400 mb-4">
              <div className="w-6 h-px bg-night-400" />
              <span>Our Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-night-900 leading-tight tracking-tight">
              Premium solar equipment for every need.
            </h2>
          </div>
          <Link to="/products" className="btn-outline self-start md:self-auto whitespace-nowrap hidden md:inline-flex">
            All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-night-900 text-white shadow-lg'
                  : 'bg-night-50 border border-night-100 text-night-600 hover:border-night-300 hover:bg-night-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid - minimalist card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filtered.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container with clean gray background */}
              <div className="bg-night-50 rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative">
                {/* 
                  Using mix-blend-multiply if we wanted isolated images, 
                  but since we have standard Unsplash landscape photos, object-cover works best 
                */}
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 hover:shadow-xl" 
                />
                
                {/* Subtle category tag on hover */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase text-night-900 opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {p.category}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-night-900 mb-2 group-hover:text-night-600 transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-night-500 text-sm md:text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile-only view all button */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link to="/products" className="btn-outline w-full justify-center">
            All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
