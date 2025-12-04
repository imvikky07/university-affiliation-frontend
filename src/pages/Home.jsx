import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="hero-text">
          <h1>Manage University Affiliation Requests</h1>
          <p>
            Simple frontend prototype for Admins, Colleges and Inspectors to
            view and track affiliation applications.
          </p>
          <div className="hero-actions">
            <Link to="/login/admin" className="btn primary">
              Admin Login
            </Link>
            <Link to="/login/college" className="btn">
              College Login
            </Link>
            <Link to="/login/inspector" className="btn ghost">
              Inspector Login
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="stat-card">
            <span className="stat-label">Active Applications</span>
            <span className="stat-value">24</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Pending Inspections</span>
            <span className="stat-value">7</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Approved Colleges</span>
            <span className="stat-value">58</span>
          </div>
        </div>
      </section>
      <section className="role-grid">
        <div className="role-card">
          <h2>Admin</h2>
          <p>Review college applications, assign inspectors and update status.</p>
          <Link to="/login/admin" className="link-inline">
            Go to Admin portal
          </Link>
        </div>
        <div className="role-card">
          <h2>College</h2>
          <p>Submit affiliation requests and track approval progress in one place.</p>
          <Link to="/login/college" className="link-inline">
            Go to College portal
          </Link>
        </div>
        <div className="role-card">
          <h2>Inspector</h2>
          <p>View assigned colleges, record visit notes and update inspection status.</p>
          <Link to="/login/inspector" className="link-inline">
            Go to Inspector portal
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
