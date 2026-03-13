import React, { useState } from 'react'
import { Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, BarChart3, LogOut, ChevronLeft, Bell, Sun, Menu, X } from 'lucide-react'
import Overview from './pages/Overview'
import AllLeads from './pages/AllLeads'
import Analytics from './pages/Analytics'

const navItems = [
  { path: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
  { path: '/admin/dashboard/leads', label: 'All Leads', icon: Users },
  { path: '/admin/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
]

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isAuth = sessionStorage.getItem('sca_admin_auth')
  if (!isAuth) return <Navigate to="/admin" replace />

  const handleLogout = () => {
    sessionStorage.removeItem('sca_admin_auth')
    navigate('/admin')
  }

  const currentPage = navItems.find(n => n.path === location.pathname)?.label || 'Overview'
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className={`flex items-center gap-3 px-5 h-16 border-b border-white/5 flex-shrink-0 ${collapsed && !mobileOpen ? 'justify-center' : ''}`}>
        <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Sun className="w-5 h-5 text-white" />
        </div>
        {(!collapsed || mobileOpen) && (
          <div className="flex-1">
            <p className="text-white font-bold text-sm leading-tight">SCA Tech</p>
            <p className="text-night-500 text-[10px] font-medium tracking-wider uppercase">Dashboard</p>
          </div>
        )}
        {/* Close button on mobile */}
        {mobileOpen && (
          <button onClick={() => setMobileOpen(false)} className="md:hidden w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin/dashboard'}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-night-500 hover:text-white hover:bg-white/5'
              } ${collapsed && !mobileOpen ? 'justify-center' : ''}`
            }
          >
            <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
            {(!collapsed || mobileOpen) && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/5">
        <button
          onClick={handleLogout}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-night-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full ${collapsed && !mobileOpen ? 'justify-center' : ''}`}
        >
          <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
          {(!collapsed || mobileOpen) && <span>Logout</span>}
        </button>
      </div>
    </>
  )

  return (
    <div className="flex h-screen bg-night-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex ${collapsed ? 'w-[72px]' : 'w-[260px]'} bg-night-950 flex-col transition-all duration-300 flex-shrink-0 border-r border-white/5`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-night-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <aside className={`absolute top-0 left-0 h-full w-[280px] bg-night-950 flex flex-col transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {sidebarContent}
        </aside>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 md:h-16 bg-white border-b border-night-100 flex items-center justify-between px-4 md:px-6 flex-shrink-0">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Mobile: hamburger. Desktop: collapse toggle */}
            <button
              onClick={() => {
                if (window.innerWidth < 768) setMobileOpen(true)
                else setCollapsed(!collapsed)
              }}
              className="w-8 h-8 rounded-lg bg-night-50 hover:bg-night-100 flex items-center justify-center text-night-500 transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-night-900 font-bold text-base md:text-lg leading-tight">{currentPage}</h1>
              <p className="text-night-400 text-[10px] md:text-xs hidden sm:block">{today}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="relative w-8 h-8 md:w-9 md:h-9 rounded-xl bg-night-50 hover:bg-night-100 flex items-center justify-center text-night-500 transition-colors">
              <Bell className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-night-100">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-night-900 flex items-center justify-center text-white text-[10px] md:text-xs font-bold">A</div>
              <div className="hidden sm:block">
                <p className="text-night-900 text-sm font-semibold leading-tight">Admin</p>
                <p className="text-night-400 text-[10px]">Owner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="leads" element={<AllLeads />} />
            <Route path="analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
