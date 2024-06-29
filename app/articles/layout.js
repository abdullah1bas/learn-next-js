
export const metadata = {
  title: 'articles Page'
}

export default function ({ children }) {
    console.log(children);
  return (
    <div>
      <h1>Articles</h1>
      <div
        style={{
          marginTop: "50px",
          background: "blue",
          padding: "20px",
          borderRadius: "10px",
          color: 'white',
        }}
      >
        {children}
      </div>
    </div>
  );
}
