import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const sampleApplications = [
  {
    id: 'APP-2025-001',
    college: 'Skyline Institute of Technology',
    course: 'B.Tech Computer Science',
    status: 'Pending Inspector Visit',
    submittedOn: '2025-11-10'
  },
  {
    id: 'APP-2025-002',
    college: 'Greenfield College of Arts',
    course: 'B.A Economics',
    status: 'Under Review',
    submittedOn: '2025-11-14'
  },
  {
    id: 'APP-2025-003',
    college: 'Metro College of Engineering',
    course: 'M.Tech Data Science',
    status: 'Approved',
    submittedOn: '2025-11-01'
  }
]

function AdminDashboard() {
  const location = useLocation()
  const userEmail = location.state?.email || 'admin@example.com'

  const total = sampleApplications.length
  const approved = useMemo(
    () => sampleApplications.filter(a => a.status === 'Approved').length,
    []
  )
  const pending = useMemo(
    () =>
      sampleApplications.filter(
        a => a.status === 'Pending Inspector Visit' || a.status === 'Under Review'
      ).length,
    []
  )

  return (
    <div className="page page-dashboard">
      <div className="page-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p className="muted">Signed in as {userEmail}</p>
        </div>
        <div className="badge badge-admin">Admin</div>
      </div>

      <div className="grid-3">
        <div className="metric-card">
          <span className="metric-label">Total Applications</span>
          <span className="metric-value">{total}</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Pending Actions</span>
          <span className="metric-value">{pending}</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Approved</span>
          <span className="metric-value">{approved}</span>
        </div>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Recent Applications</h2>
          <span className="muted small">Static data for demo</span>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Application ID</th>
                <th>College</th>
                <th>Course</th>
                <th>Status</th>
                <th>Submitted On</th>
              </tr>
            </thead>
            <tbody>
              {sampleApplications.map(app => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.college}</td>
                  <td>{app.course}</td>
                  <td>
                    <span className={`pill pill-${app.status.split(' ')[0].toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                  <td>{app.submittedOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard
