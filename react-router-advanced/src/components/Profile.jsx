// src/components/Profile.jsx
import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

export default function Profile() {
  return (
    <div style={{ padding: 10 }}>
      <h2>Profile Page (Protected)</h2>

      <nav style={{ marginBottom: 10 }}>
        <Link to="details">Profile Details</Link> |{' '}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* ✅ Nested Routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}
