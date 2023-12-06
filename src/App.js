import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Welcome from './Welcome';



function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Вы кликнули {count} раз(а)</h2>
      <button onClick={() => setCount(count + 1)}>Клик</button>
      <Welcome name="Мария" />
      <Welcome name="Алексей" />
      <Welcome name="Екатерина" />
    </div>
    
  );
}

export default App;
