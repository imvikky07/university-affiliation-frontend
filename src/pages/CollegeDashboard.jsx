import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const initialRows = [
  {
    id: 'APP-2025-010',
    course: 'BCA',
    intake: 120,
    status: 'Draft'
  },
  {
    id: 'APP-2025-011',
    course: 'BBA',
    intake: 60,
    status: 'Submitted'
  }
]

function CollegeDashboard() {
  const location = useLocation()
  const userEmail = location.state?.email || 'college@example.com'
  const [rows, setRows] = useState(initialRows)
  const [course, setCourse] = useState('')
  const [intake, setIntake] = useState('')
  const [error, setError] = useState('')

  function handleAdd(e) {
    e.preventDefault()
    if (!course.trim() || !intake.trim()) {
      setError('Fill course and intake')
      return
    }
    const value = parseInt(intake, 10)
    if (Number.isNaN(value) || value <= 0) {
      setError('Enter a valid intake')
      return
    }
    const nextId = `APP-2025-${String(rows.length + 12).padStart(3, '0')}`
    const next = {
      id: nextId,
      course: course.trim(),
      intake: value,
      status: 'Draft'
    }
    setRows([next, ...rows])
    setCourse('')
    setIntake('')
    setError('')
  }

  return (
    <div className="page page-dashboard">
      <div className="page-header">
        <div>
          <h1>College Dashboard</h1>
          <p className="muted">Signed in as {userEmail}</p>
        </div>
        <div className="badge badge-college">College</div>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>New Affiliation Request</h2>
          <span className="muted small">Local state only</span>
        </div>
        <form className="inline-form" onSubmit={handleAdd}>
          <div className="inline-field">
            <label className="field-label small">Course</label>
            <input
              type="text"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="B.Sc Computer Science"
            />
          </div>
          <div className="inline-field">
            <label className="field-label small">Intake</label>
            <input
              type="number"
              value={intake}
              onChange={e => setIntake(e.target.value)}
              placeholder="60"
            />
          </div>
          <button type="submit" className="btn primary">
            Add
          </button>
          {error && <span className="form-error inline">{error}</span>}
        </form>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>My Applications</h2>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Course</th>
                <th>Intake</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.course}</td>
                  <td>{row.intake}</td>
                  <td>
                    <span className={`pill pill-${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} className="muted center">
                    No applications yet
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

export default CollegeDashboard
