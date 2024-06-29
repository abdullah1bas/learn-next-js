import Link from "next/link";
import React from "react";

export default function Articles() {
  return (
    <div>
      <h1>Articles Page</h1>
      <Link href='/articles/featuredArticles'>
        <button> Take me to the featured Articles Page</button>
      </Link>
    </div>
  );
}
