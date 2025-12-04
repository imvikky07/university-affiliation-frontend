import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const initialAssignments = [
  {
    id: 'APP-2025-020',
    college: 'City Engineering College',
    visitDate: '2025-12-12',
    status: 'Scheduled'
  },
  {
    id: 'APP-2025-021',
    college: 'Sunrise College of Management',
    visitDate: '2025-12-15',
    status: 'Pending Report'
  },
  {
    id: 'APP-2025-022',
    college: 'Hillside College of Science',
    visitDate: '2025-12-05',
    status: 'Completed'
  }
]

const statusOptions = ['Scheduled', 'Pending Report', 'Completed']

function InspectorDashboard() {
  const location = useLocation()
  const userEmail = location.state?.email || 'inspector@example.com'
  const [rows, setRows] = useState(initialAssignments)

  function handleStatusChange(id, nextStatus) {
    setRows(prev =>
      prev.map(row =>
        row.id === id
          ? {
              ...row,
              status: nextStatus
            }
          : row
      )
    )
  }

  return (
    <div className="page page-dashboard">
      <div className="page-header">
        <div>
          <h1>Inspector Dashboard</h1>
          <p className="muted">Signed in as {userEmail}</p>
        </div>
        <div className="badge badge-inspector">Inspector</div>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Assigned Visits</h2>
          <span className="muted small">Update status locally</span>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Application ID</th>
                <th>College</th>
                <th>Visit Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.college}</td>
                  <td>{row.visitDate}</td>
                  <td>
                    <select
                      className="select"
                      value={row.status}
                      onChange={e => handleStatusChange(row.id, e.target.value)}
                    >
                      {statusOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} className="muted center">
                    No assignments
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default InspectorDashboard
