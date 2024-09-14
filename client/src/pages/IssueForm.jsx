import React from 'react';
import { useState } from 'react';
import { baseURL } from '../App';
import { useNavigate } from "react-router-dom";

export function IssueForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== '' && description !== '') {
      const res = await fetch(`${baseURL}/issues`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });
  
      setTitle('');
      setDescription('');

      navigate('/');
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <textarea
          placeholder="Description" 
          value={description} 
          rows={5} 
          onChange={handleDescChange}
        >
        </textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}