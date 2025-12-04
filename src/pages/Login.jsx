import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const roleTitles = {
  admin: 'Admin Login',
  college: 'College Login',
  inspector: 'Inspector Login'
}

const roleRedirects = {
  admin: '/admin',
  college: '/college',
  inspector: '/inspector'
}

function Login() {
  const { role } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const title = roleTitles[role] || 'Login'

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Enter email and password')
      return
    }
    if (!email.includes('@')) {
      setError('Enter a valid email')
      return
    }
    setError('')
    const redirect = roleRedirects[role] || '/'
    navigate(redirect, { replace: true, state: { role, email } })
  }

  return (
    <div className="page page-login">
      <div className="card login-card">
        <h1>{title}</h1>
        <p className="muted">
          This is a frontend-only mock. Use any demo credentials to continue.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            <span className="field-label">Email</span>
            <input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className="field">
            <span className="field-label">Password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn primary full">
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
