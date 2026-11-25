import { useState } from 'react';
import LikeButton from './components/Like';

function Toggle() { 
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>สลับ</button>
      {show && <p>สวัสดี</p>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1) }>
        เพิ่ม
      </button>
      <Toggle />
      <LikeButton />
    </div>
  );
}

export default App;