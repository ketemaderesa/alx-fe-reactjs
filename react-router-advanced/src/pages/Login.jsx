// src/pages/Login.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('user', 'demoUser')
    navigate('/profile')
  }

  return (
    <div style={{ padding: 10 }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
