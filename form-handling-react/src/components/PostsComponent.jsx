import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isFetching, refetch } = useQuery(["posts"], fetchPosts, {
    staleTime: 1000 * 60 * 2, // 2 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div style={{color:"red"}}>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch posts</button>
      {isFetching && <div>Refreshing...</div>}
      <ul>
        {data.slice(0, 10).map(post => (
          <li key={post.id}><strong>{post.title}</strong><p>{post.body}</p></li>
        ))}
      </ul>
      <div style={{fontSize:12, color:"#666"}}>Data fetched: {data.length} posts (JSONPlaceholder)</div>
    </div>
  );
}
