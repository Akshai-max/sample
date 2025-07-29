"use client";
import { useState } from "react";

export default function Pledge() {
  const [pledge, setPledge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Take the Eco-Friendly Pledge</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
          <label>
            What eco-friendly action will you take?
            <input
              type="text"
              value={pledge}
              onChange={e => setPledge(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              placeholder="E.g., I will use a reusable water bottle."
            />
          </label>
          <button type="submit" style={{ background: '#217a4b', color: 'white', padding: '0.75rem', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Pledge
          </button>
        </form>
      ) : (
        <div style={{ fontSize: '1.2rem', color: '#217a4b', marginTop: '2rem' }}>
          Thank you for making a difference! 🌍
        </div>
      )}
    </div>
  );
} 