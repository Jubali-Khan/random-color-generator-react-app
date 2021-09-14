import './App.css';
import { useState } from 'react';

const toHex = require('colornames');

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function App() {
  const [hex, setHex] = useState(toHex('indianred'));
  const basicHues = ['green', 'blue', 'cyan', 'grey', 'orchid'];

  // Create random  Hex
  const randomHex = () => {
    const randomHue = basicHues[between(0, 5)];
    setHex(toHex(randomHue));
  };

  let [pos1, setPos1] = useState(0);
  let [pos2, setPos2] = useState(1);

  const reOrder = () => {
    if (pos1 > pos2) {
      setPos1(pos1 - 1);
    } else {
      setPos1(pos1 + 2);
    }
  };
  return (
    <div className="App">
      <section
        style={{
          backgroundColor: hex,
        }}
      >
        <h1>Welcome</h1>
        <h2>{hex}</h2>
        <button onClick={randomHex}>Random Color</button>
        <button onClick={reOrder}>Reorder</button>

        <div
          id="orange"
          style={{
            zIndex: pos1,
          }}
        ></div>
        <div
          id="green"
          style={{
            zIndex: pos2,
          }}
        ></div>
      </section>
    </div>
  );
}

export default App;
