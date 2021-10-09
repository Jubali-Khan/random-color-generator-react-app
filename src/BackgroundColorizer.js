import { useState } from 'react';
import ReOrder from './ReOrder';

const toHex = require('colornames');

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function BackgroundColorizer() {
  const [hex, setHex] = useState(toHex('indianred'));
  const basicHues = ['green', 'blue', 'cyan', 'grey', 'orchid'];

  // Create random  Hex
  const randomHex = () => {
    const randomHue = basicHues[between(0, 5)];
    setHex(toHex(randomHue));
  };
  return (
    <section
      style={{
        backgroundColor: hex,
      }}
    >
      <h1>Welcome</h1>
      <h2>{hex}</h2>
      <button onClick={randomHex}>Random Color</button>
      <ReOrder />
    </section>
  );
}
