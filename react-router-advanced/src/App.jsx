// src/App.jsx
import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import ProfileSettings from './pages/ProfileSettings'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
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

        {/* Protected + Nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route for blog posts */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
