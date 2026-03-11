import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, IndianRupee, Sun, Leaf, ArrowRight, Info } from 'lucide-react'

export default function SolarCalculator() {
  const [bill, setBill] = useState(3000)
  const [type, setType] = useState('residential')

  const tariff = type === 'residential' ? 7.5 : 9.0
  const units = Math.round(bill / tariff)
  const systemSize = (units / 130).toFixed(1)
  const systemCost = Math.round(systemSize * 65000)
  const subsidy = type === 'residential' && systemSize <= 10 ? (systemSize <= 2 ? 30000 : systemSize <= 3 ? 78000 : 78000) : 0
  const netCost = systemCost - subsidy
  const annualSavings = bill * 12 * 0.85
  const payback = (netCost / annualSavings).toFixed(1)
  const co2 = (units * 12 * 0.82 / 1000).toFixed(1)

  return (
    <section className="py-24 md:py-32 bg-night-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
            <span className="block w-6 h-px bg-white/30" />
            Savings Calculator
            <span className="block w-6 h-px bg-white/30" />
          </p>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
            See how much you could save <span className="font-light text-white/40">every year.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Panel */}
          <div className="bg-night-900 rounded-3xl p-8 border border-white/5">
            {/* Type selector */}
            <div className="flex gap-3 mb-8">
              {['residential', 'commercial'].map(t => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`flex-1 py-3 rounded-2xl text-sm font-bold capitalize transition-all duration-300 ${
                    type === t
                      ? 'bg-white text-night-900 shadow-lg'
                      : 'bg-white/5 text-night-400 hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Bill slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white font-semibold text-sm">Monthly Electricity Bill</label>
                <span className="text-white font-black text-2xl font-display">₹{bill.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={bill}
                onChange={e => setBill(Number(e.target.value))}
                className="w-full h-2 bg-night-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between mt-2">
                <span className="text-night-600 text-xs">₹500</span>
                <span className="text-night-600 text-xs">₹50,000</span>
              </div>
            </div>

            {/* Derived info */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Monthly Units Used', value: `~${units} kWh`, icon: Zap },
                { label: 'Recommended System Size', value: `${systemSize} kWp`, icon: Sun },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-white/5 rounded-2xl p-4">
                  <Icon className="w-4 h-4 text-white/40 mb-2" />
                  <p className="text-white font-black text-lg">{value}</p>
                  <p className="text-night-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Info className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
              <p className="text-white/40 text-xs leading-relaxed">
                Estimates based on Indore MPEZ tariff rates and avg. 5.5 peak sun hours/day. Actual savings may vary.
              </p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="flex flex-col gap-4">
            {/* Big result */}
            <div className="bg-white rounded-3xl p-8">
              <p className="text-night-400 text-sm font-semibold mb-2">You could save every year</p>
              <p className="text-night-900 font-black font-display leading-none mb-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
                ₹{Math.round(annualSavings).toLocaleString()}
              </p>
              <p className="text-night-400 text-sm">That's ₹{Math.round(annualSavings / 12).toLocaleString()} every month back in your pocket</p>
            </div>

            {/* Cost + Subsidy */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-night-900 border border-white/5 rounded-2xl p-5">
                <IndianRupee className="w-4 h-4 text-night-500 mb-2" />
                <p className="text-white font-black text-2xl font-display">₹{(systemCost / 100000).toFixed(2)}L</p>
                <p className="text-night-500 text-xs mt-1">Estimated system cost</p>
              </div>
              {subsidy > 0 && (
                <div className="bg-night-900 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-white/50 text-xs font-bold uppercase tracking-wider">Subsidy</span>
                  </div>
                  <p className="text-white font-black text-2xl font-display">-₹{(subsidy / 1000).toFixed(0)}K</p>
                  <p className="text-night-500 text-xs mt-1">PM Surya Ghar benefit</p>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-night-900 border border-white/5 rounded-2xl p-4 text-center">
                <p className="text-white font-black text-xl font-display">{payback}</p>
                <p className="text-night-500 text-xs mt-1">Yr Payback</p>
              </div>
              <div className="bg-night-900 border border-white/5 rounded-2xl p-4 text-center">
                <p className="text-white font-black text-xl font-display">25+</p>
                <p className="text-night-500 text-xs mt-1">Yr System Life</p>
              </div>
              <div className="bg-night-900 border border-white/5 rounded-2xl p-4 text-center">
                <Leaf className="w-4 h-4 text-white/40 mx-auto mb-1" />
                <p className="text-white font-black text-xl font-display">{co2}T</p>
                <p className="text-night-500 text-xs">CO₂ Saved/Yr</p>
              </div>
            </div>

            <Link to="/contact" className="btn-primary justify-center text-center">
              Get Exact Quote — Free Site Survey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
