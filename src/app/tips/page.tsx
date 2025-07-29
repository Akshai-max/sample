"use client";

export default function Tips() {
  const tips = [
    "Reduce, reuse, recycle whenever possible.",
    "Conserve water and electricity.",
    "Use public transport, bike, or walk instead of driving.",
    "Choose sustainable and local products.",
    "Avoid single-use plastics.",
    "Compost food waste.",
    "Plant trees and support reforestation.",
    "Educate others about eco-friendly practices."
  ];
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Eco-Friendly Tips</h1>
      <ul>
        {tips.map((tip, idx) => (
          <li key={idx} style={{ margin: '1rem 0', fontSize: '1.2rem' }}>{tip}</li>
        ))}
      </ul>
    </div>
  );
} 