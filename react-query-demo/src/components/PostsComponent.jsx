import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery("posts", () =>
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => res.data)
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
