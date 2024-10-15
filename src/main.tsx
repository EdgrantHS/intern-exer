import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<p className='text-3xl'>Hello World</p>} />
          <Route path='*' element={<p className='text-3xl'>Error </p>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
