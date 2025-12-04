import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function AppLayout({ children }) {
  const location = useLocation()

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="brand">
          <span className="brand-logo">UA</span>
          <div className="brand-text">
            <span className="brand-title">University Affiliation System</span>
            <span className="brand-subtitle">Admin • College • Inspector</span>
          </div>
        </div>
        <nav className="app-nav">
          <Link
            to="/"
            className={
              location.pathname === '/' ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Home
          </Link>
          <Link
            to="/login/admin"
            className={
              location.pathname.startsWith('/login/admin') ||
              location.pathname === '/admin'
                ? 'nav-link nav-link-active'
                : 'nav-link'
            }
          >
            Admin
          </Link>
          <Link
            to="/login/college"
            className={
              location.pathname.startsWith('/login/college') ||
              location.pathname === '/college'
                ? 'nav-link nav-link-active'
                : 'nav-link'
            }
          >
            College
          </Link>
          <Link
            to="/login/inspector"
            className={
              location.pathname.startsWith('/login/inspector') ||
              location.pathname === '/inspector'
                ? 'nav-link nav-link-active'
                : 'nav-link'
            }
          >
            Inspector
          </Link>
        </nav>
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <span>University Affiliation Management • Stage 1 • Frontend</span>
      </footer>
    </div>
  )
}

export default AppLayout
