// src/components/ProtectedRoute.jsx
import React from 'react'
import { Navigate } from 'react-router-dom'

// ✅ Simple useAuth hook (required by the test)
function useAuth() {
  const user = localStorage.getItem('user') // simulate logged-in user
  return { user }
}

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()

  // ✅ If user not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // ✅ Otherwise, render the protected component
  return children
}
