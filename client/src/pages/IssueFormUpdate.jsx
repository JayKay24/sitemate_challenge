import React from 'react';
import { useState, useEffect } from 'react';
import { baseURL } from '../App';
import { useParams, useNavigate } from "react-router-dom";

export function IssueFormUpdate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id = '' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseURL}/issues/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setDescription(data.description);
    })()
  }, [])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDelete = async () => {
    await fetch(`${baseURL}/issues/${id}`, {
      method: 'DELETE'
    });
    
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== '' && description !== '') {
      const res = await fetch(`${baseURL}/issues/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
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
        <button type="submit">Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </form>
  );
}