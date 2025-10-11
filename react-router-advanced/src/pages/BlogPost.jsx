// src/pages/BlogPost.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { id } = useParams()

  return (
    <div style={{ padding: 10 }}>
      <h2>Blog Post #{id}</h2>
      <p>This is the content for blog post with ID: {id}</p>
    </div>
  )
}
