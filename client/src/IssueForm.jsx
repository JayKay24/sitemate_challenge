import React from 'react';
import { useState } from 'react';

export function IssueForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
      mode: 'no-cors',
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} />
      
      <textarea placeholder="Description" value={description} />
      <button type="submit">Submit</button>
    </form>
  );
}