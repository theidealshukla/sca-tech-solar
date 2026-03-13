import React, { useState, useEffect } from 'react'
import { Users, UserPlus, TrendingUp, Target, ArrowUpRight } from 'lucide-react'
import { getLeads, getStatsForDashboard, getLeadsByDay, getLeadsByType, getLeadsByCity } from '../data/mockLeads'

// Simple inline mini-chart components (no external chart library needed)

function AreaChart({ data }) {
  const max = Math.max(...data.map(d => d.count), 1)
  const w = 100
  const h = 40
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * w,
    y: h - (d.count / max) * (h - 8),
  }))
  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  const area = `${line} L${w},${h} L0,${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h + 4}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171717" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#171717" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaGrad)" />
      <path d={line} fill="none" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2" fill="white" stroke="#171717" strokeWidth="1" />
      ))}
    </svg>
  )
}

function DonutChart({ data }) {
  const total = data.reduce((s, d) => s + d.count, 0) || 1
  const colors = ['#171717', '#404040', '#737373', '#a3a3a3']
  let cumulative = 0

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
        {data.map((d, i) => {
          const pct = (d.count / total) * 100
          const offset = cumulative
          cumulative += pct
          return (
            <circle
              key={i}
              cx="18" cy="18" r="14"
              fill="none"
              stroke={colors[i]}
              strokeWidth="4"
              strokeDasharray={`${pct} ${100 - pct}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-2xl font-black text-night-900">{total}</p>
        <p className="text-[10px] text-night-400 font-medium">Total</p>
      </div>
    </div>
  )
}

function HorizontalBarChart({ data }) {
  const max = Math.max(...data.map(d => d.total), 1)
  return (
    <div className="space-y-3">
      {data.slice(0, 6).map(d => (
        <div key={d.city}>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-night-700">{d.city}</span>
            <span className="text-night-400">{d.total} leads · {d.converted} converted</span>
          </div>
          <div className="h-2 bg-night-100 rounded-full overflow-hidden flex">
            <div className="h-full bg-night-900 rounded-full transition-all duration-700" style={{ width: `${(d.total / max) * 100}%` }} />
            <div className="h-full bg-night-400 rounded-full -ml-px transition-all duration-700" style={{ width: `${(d.converted / max) * 100}%`, marginLeft: `-${(d.converted / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

const statusColors = {
  'New': 'bg-blue-100 text-blue-700',
  'Called': 'bg-amber-100 text-amber-700',
  'Converted': 'bg-green-100 text-green-700',
  'Not Interested': 'bg-night-100 text-night-500',
}

export default function Overview() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLeads(getLeads())
      setLoading(false)
    }, 400)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-8 h-8 border-3 border-night-200 border-t-night-900 rounded-full animate-spin" />
      </div>
    )
  }

  const stats = getStatsForDashboard(leads)
  const dailyData = getLeadsByDay(leads)
  const typeData = getLeadsByType(leads)
  const cityData = getLeadsByCity(leads)
  const recentLeads = [...leads].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)

  const statCards = [
    { label: 'Total Leads', value: stats.total, icon: Users, sub: 'All time', color: 'bg-night-900 text-white' },
    { label: "Today's Leads", value: stats.today, icon: UserPlus, sub: 'Since midnight', color: 'bg-white text-night-900' },
    { label: 'This Week', value: stats.thisWeek, icon: TrendingUp, sub: 'Last 7 days', color: 'bg-white text-night-900' },
    { label: 'Conversion Rate', value: `${stats.conversionRate}%`, icon: Target, sub: 'Overall', color: 'bg-white text-night-900' },
  ]

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <div
            key={card.label}
            className={`${card.color} rounded-2xl p-5 border border-night-100 opacity-0`}
            style={{ animation: `fadeUp 0.5s ${0.1 + i * 0.08}s ease-out forwards` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'bg-night-50'}`}>
                <card.icon className={`w-5 h-5 ${i === 0 ? 'text-white' : 'text-night-500'}`} />
              </div>
              <ArrowUpRight className={`w-4 h-4 ${i === 0 ? 'text-white/30' : 'text-night-300'}`} />
            </div>
            <p className="text-3xl font-black leading-none font-display">{card.value}</p>
            <p className={`text-xs mt-1.5 font-medium ${i === 0 ? 'text-white/50' : 'text-night-400'}`}>{card.label}</p>
            <p className={`text-[10px] mt-0.5 ${i === 0 ? 'text-white/30' : 'text-night-300'}`}>{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Area Chart — Leads per day */}
        <div className="bg-white rounded-2xl p-5 border border-night-100 col-span-1 opacity-0" style={{ animation: 'fadeUp 0.5s 0.45s ease-out forwards' }}>
          <p className="text-xs font-bold text-night-400 uppercase tracking-wider mb-1">Daily Leads</p>
          <p className="text-night-900 font-black text-lg mb-4">Last 7 Days</p>
          <div className="h-32">
            <AreaChart data={dailyData} />
          </div>
          <div className="flex justify-between mt-3">
            {dailyData.map(d => (
              <span key={d.date} className="text-[9px] text-night-300 font-medium">{d.label}</span>
            ))}
          </div>
        </div>

        {/* Donut — Type breakdown */}
        <div className="bg-white rounded-2xl p-5 border border-night-100 col-span-1 opacity-0" style={{ animation: 'fadeUp 0.5s 0.55s ease-out forwards' }}>
          <p className="text-xs font-bold text-night-400 uppercase tracking-wider mb-1">System Type</p>
          <p className="text-night-900 font-black text-lg mb-4">Distribution</p>
          <DonutChart data={typeData} />
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {typeData.map((d, i) => (
              <div key={d.type} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: ['#171717', '#404040', '#737373', '#a3a3a3'][i] }} />
                <span className="text-[10px] text-night-500 font-medium">{d.type} ({d.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal bar — City Breakdown */}
        <div className="bg-white rounded-2xl p-5 border border-night-100 col-span-1 opacity-0" style={{ animation: 'fadeUp 0.5s 0.65s ease-out forwards' }}>
          <p className="text-xs font-bold text-night-400 uppercase tracking-wider mb-1">City Performance</p>
          <p className="text-night-900 font-black text-lg mb-4">Leads vs Conversions</p>
          <HorizontalBarChart data={cityData} />
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-2xl border border-night-100 opacity-0" style={{ animation: 'fadeUp 0.5s 0.75s ease-out forwards' }}>
        <div className="px-5 py-4 border-b border-night-100 flex items-center justify-between">
          <div>
            <p className="text-night-900 font-bold text-sm">Recent Leads</p>
            <p className="text-night-400 text-xs">Latest 5 submissions</p>
          </div>
        </div>
        <div className="divide-y divide-night-50">
          {recentLeads.map(lead => (
            <div key={lead.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-night-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-night-100 flex items-center justify-center text-night-500 text-xs font-bold flex-shrink-0">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-night-900 text-sm font-semibold">{lead.name}</p>
                  <p className="text-night-400 text-xs">{lead.city} · {lead.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${statusColors[lead.status]}`}>
                  {lead.status}
                </span>
                <span className="text-night-300 text-xs">
                  {new Date(lead.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
