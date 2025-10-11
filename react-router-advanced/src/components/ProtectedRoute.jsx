import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuthenticated = () => localStorage.getItem('isLoggedIn') === 'true'

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    alert('Please login first!')
    return <Navigate to="/login" />
  }
  return children
}
