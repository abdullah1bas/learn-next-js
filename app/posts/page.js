import React from "react";
import Todo from "../components/todo";
import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} key={post.id} style={{width: "70%",}}>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            marginTop: "20px",
            borderRadius: "10px",
            padding: '10px'
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Posts Page </h1>

      {/* POSTS */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>{postsJSX}</div>
      {/* === POSTS === */}

      {/* <div>
        <Todo />
      </div> */}
    </div>
  );
}
