export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "white",
        color: "black",
        marginTop: "20px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h4>id: {post.id}</h4>
      <hr />
      <h1>title: {post.title}</h1>
      <hr />
      <p>description: {post.body}</p>
    </div>
  );
}
