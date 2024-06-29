"use client";
import React, { useEffect, useState } from "react";


export default function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    
    const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setTodo(result);
      };
  
      fetchData();
  }, []);
  return (
    <div>
      <h2>{todo.title || "Loading..."} </h2>
    </div>
  );
}
