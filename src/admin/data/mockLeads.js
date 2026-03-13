// Mock leads data for the admin dashboard
// In production, replace with Google Sheets API or a real backend

const STORAGE_KEY = 'sca_tech_leads'

const initialLeads = [
  { id: 1, name: 'Rajesh Sharma', phone: '+91 98765 43210', email: 'rajesh@email.com', city: 'Indore', type: 'Residential', message: 'Monthly bill around ₹3,000. Flat roof, 2-storey house.', status: 'New', date: '2026-03-13T09:15:00' },
  { id: 2, name: 'Priya Patel', phone: '+91 97531 24680', email: 'priya.p@gmail.com', city: 'Bhopal', type: 'Commercial', message: 'Looking for rooftop solar for our 5000 sq ft office.', status: 'Called', date: '2026-03-13T11:30:00' },
  { id: 3, name: 'Amit Verma', phone: '+91 88776 55443', email: '', city: 'Ujjain', type: 'Residential', message: 'Want 5kW system with battery backup.', status: 'Converted', date: '2026-03-12T14:20:00' },
  { id: 4, name: 'Sunita Joshi', phone: '+91 99887 66554', email: 'sunita@business.co.in', city: 'Indore', type: 'Industrial', message: 'Factory rooftop, 10,000 sq ft. Need 100kW system.', status: 'New', date: '2026-03-12T08:45:00' },
  { id: 5, name: 'Vikram Singh', phone: '+91 77665 44332', email: 'vikram.singh@corp.com', city: 'Dewas', type: 'Commercial', message: 'Warehouse solar project. Monthly bill ₹50,000+.', status: 'Called', date: '2026-03-11T16:10:00' },
  { id: 6, name: 'Neha Gupta', phone: '+91 66554 33221', email: 'neha.gupta@yahoo.com', city: 'Indore', type: 'Residential', message: '3kW system for my apartment.', status: 'Converted', date: '2026-03-11T10:00:00' },
  { id: 7, name: 'Rahul Dubey', phone: '+91 55443 22110', email: '', city: 'Ratlam', type: 'Not Sure', message: 'Want to understand if solar is viable for my old house.', status: 'Not Interested', date: '2026-03-10T13:25:00' },
  { id: 8, name: 'Kavita Yadav', phone: '+91 44332 11009', email: 'kavita@example.com', city: 'Indore', type: 'Residential', message: 'Interested in PM Surya Ghar subsidy. 4kW system.', status: 'New', date: '2026-03-10T09:50:00' },
  { id: 9, name: 'Deepak Malhotra', phone: '+91 33221 99887', email: 'deepak.m@outlook.com', city: 'Bhopal', type: 'Commercial', message: 'Shopping mall rooftop installation.', status: 'Called', date: '2026-03-09T15:30:00' },
  { id: 10, name: 'Ananya Tiwari', phone: '+91 22110 88776', email: '', city: 'Ujjain', type: 'Residential', message: 'Monthly bill ₹5,000. Want to go completely off-grid.', status: 'New', date: '2026-03-09T11:15:00' },
  { id: 11, name: 'Manoj Kumar', phone: '+91 11009 77665', email: 'manoj.k@gmail.com', city: 'Dhar', type: 'Industrial', message: 'Need ground-mount solar for our plant.', status: 'Converted', date: '2026-03-08T12:40:00' },
  { id: 12, name: 'Poonam Agarwal', phone: '+91 99001 55443', email: 'poonam@biz.in', city: 'Indore', type: 'Residential', message: '7kW hybrid system with battery.', status: 'Called', date: '2026-03-08T08:10:00' },
  { id: 13, name: 'Sanjay Mishra', phone: '+91 88990 44332', email: '', city: 'Pithampur', type: 'Industrial', message: 'Carport solar for our factory parking lot.', status: 'New', date: '2026-03-07T14:55:00' },
  { id: 14, name: 'Ritu Chauhan', phone: '+91 77889 33221', email: 'ritu.c@hotmail.com', city: 'Indore', type: 'Residential', message: '3kW system. Bill is ₹2,500/month.', status: 'Converted', date: '2026-03-07T10:20:00' },
  { id: 15, name: 'Arun Saxena', phone: '+91 66778 22110', email: 'arun.s@corp.in', city: 'Mhow', type: 'Commercial', message: 'Restaurant chain — 3 locations need solar.', status: 'Called', date: '2026-03-06T16:45:00' },
]

export function getLeads() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch (e) { /* ignore */ }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialLeads))
  return initialLeads
}

export function saveLeads(leads) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
}

export function updateLeadStatus(id, newStatus) {
  const leads = getLeads()
  const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l)
  saveLeads(updated)
  return updated
}

// ---------- Stats helpers ----------

export function getStatsForDashboard(leads) {
  const now = new Date()
  const todayStr = now.toISOString().split('T')[0]
  const weekAgo = new Date(now)
  weekAgo.setDate(weekAgo.getDate() - 7)

  const todayLeads = leads.filter(l => l.date.startsWith(todayStr))
  const weekLeads = leads.filter(l => new Date(l.date) >= weekAgo)
  const converted = leads.filter(l => l.status === 'Converted').length
  const conversionRate = leads.length > 0 ? Math.round((converted / leads.length) * 100) : 0

  return {
    total: leads.length,
    today: todayLeads.length,
    thisWeek: weekLeads.length,
    conversionRate,
  }
}

export function getLeadsByDay(leads, days = 7) {
  const result = []
  const now = new Date()
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    const dayLabel = d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' })
    const count = leads.filter(l => l.date.startsWith(dateStr)).length
    result.push({ date: dateStr, label: dayLabel, count })
  }
  return result
}

export function getLeadsByType(leads) {
  const types = ['Residential', 'Commercial', 'Industrial', 'Not Sure']
  return types.map(t => ({
    type: t,
    count: leads.filter(l => l.type === t).length,
  }))
}

export function getLeadsByCity(leads) {
  const cityMap = {}
  leads.forEach(l => {
    if (!cityMap[l.city]) cityMap[l.city] = { total: 0, converted: 0 }
    cityMap[l.city].total++
    if (l.status === 'Converted') cityMap[l.city].converted++
  })
  return Object.entries(cityMap)
    .map(([city, data]) => ({
      city,
      total: data.total,
      converted: data.converted,
      rate: data.total > 0 ? Math.round((data.converted / data.total) * 100) : 0,
    }))
    .sort((a, b) => b.total - a.total)
}

export function getStatusBreakdown(leads) {
  const statuses = ['New', 'Called', 'Converted', 'Not Interested']
  return statuses.map(s => ({
    status: s,
    count: leads.filter(l => l.status === s).length,
    percentage: leads.length > 0 ? Math.round((leads.filter(l => l.status === s).length / leads.length) * 100) : 0,
  }))
}

// ---------- CSV Export ----------

export function exportToCSV(leads, filename = 'sca-tech-leads.csv') {
  const headers = ['Name', 'Phone', 'Email', 'City', 'System Type', 'Message', 'Status', 'Date & Time']
  const rows = leads.map(l => [
    l.name,
    l.phone,
    l.email || '-',
    l.city,
    l.type,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    l.status,
    new Date(l.date).toLocaleString('en-IN'),
  ])

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
  URL.revokeObjectURL(link.href)
}
