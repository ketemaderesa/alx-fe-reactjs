import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
      <h2>Profile Page (Protected)</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{' '}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      {/* Nested routes render below */}
      <Outlet />
    </div>
  )
}
