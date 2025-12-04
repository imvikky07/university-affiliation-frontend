import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import CollegeDashboard from './pages/CollegeDashboard.jsx'
import InspectorDashboard from './pages/InspectorDashboard.jsx'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/college" element={<CollegeDashboard />} />
        <Route path="/inspector" element={<InspectorDashboard />} />
      </Routes>
    </AppLayout>
  )
}

export default App
