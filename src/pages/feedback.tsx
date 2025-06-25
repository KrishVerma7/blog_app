'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ← use this for App Router

export default function Feedback() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ← this is crucial

    console.log('Feedback submitted:', { title, description });

    setTitle('');
    setDescription('');

    alert('Feedback submitted!');
    router.push('/'); 
  };

  return (
    <div className="container">
      <h2 className="form-title">📝 Feedback Form</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <div className="">
          <label className="form-label">Will you give Full Time Offer to Krish?</label>
          <input
            type="text"
            className="form-input"
            value={title}
            placeholder='Please dedo sir🫡'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="create-button">Submit</button>
      </form>
    </div>
  );
}
