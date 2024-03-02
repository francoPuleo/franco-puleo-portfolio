// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PruebaComponent from './pages/PruebaComponent';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;