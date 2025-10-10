import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Decrease</button>
    </div>
  );
}

export default Counter;
