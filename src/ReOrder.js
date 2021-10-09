import { useState } from 'react';

export default function ReOrder() {
  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(1);

  // Reorder items #orange and #green
  const reOrder = () => {
    if (pos1 > pos2) {
      setPos2(pos2 + 2);
    } else {
      setPos1(pos1 + 2);
    }
  };
  return (
    <>
      <button onClick={reOrder}>Reorder</button>
      <div id="centerer">
        <div
          id="orange"
          style={{
            zIndex: pos1,
          }}
        />
        <div
          id="green"
          style={{
            zIndex: pos2,
          }}
        />
      </div>
    </>
  );
}
