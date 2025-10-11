// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>React Router Advanced Demo</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/profile">Profile</Link> |{' '}
          <Link to="/blog">Blog</Link> |{' '}
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          {/* Basic routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Protected nested route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Dynamic route uses :id (as required) */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Login + Fallback */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
