// src/components/PostsComponent.jsx
import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default function PostsComponent() {
  const queryClient = useQueryClient()

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching, // true when background refetching is happening
    refetch,    // function to manually refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // per-query options (overrides defaults if you want)
    staleTime: 1000 * 60 * 5,   // 5 min fresh window (no network requests while fresh)
    cacheTime: 1000 * 60 * 30,  // 30 min cached if unused
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div>Loading posts…</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>Posts</h2>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => refetch()}>Refetch now</button>{' '}
        <button onClick={() => queryClient.invalidateQueries(['posts'])}>
          Invalidate cache (forces refetch on next mount)
        </button>{' '}
        <button onClick={() => queryClient.prefetchQuery(['posts'], fetchPosts)}>
          Prefetch posts
        </button>{' '}
        <span style={{ marginLeft: 8 }}>{isFetching ? 'Updating…' : ''}</span>
      </div>

      <ul>
        {posts.map(p => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>{p.title}</strong>
            <div style={{ fontSize: 13 }}>{p.body}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
