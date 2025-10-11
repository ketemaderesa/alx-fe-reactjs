import { Navigate } from 'react-router-dom'

// Simple authentication simulation
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true'
}

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    alert('You must be logged in to access this page!')
    return <Navigate to="/login" />
  }
  return children
}
