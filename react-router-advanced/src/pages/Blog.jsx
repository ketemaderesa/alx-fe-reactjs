import { Link } from 'react-router-dom'

const dummyPosts = [
  { id: 1, title: 'Understanding React Router' },
  { id: 2, title: 'Nested Routes Explained' },
  { id: 3, title: 'Dynamic Routing in Depth' },
]

export default function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {dummyPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
