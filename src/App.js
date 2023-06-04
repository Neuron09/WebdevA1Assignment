import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Summary1 from './components/Summary1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/summary1" element={<Summary1 />} />
        // If you want to add a route for Login, do so here
      </Routes>
    </Router>
  );
}

export default App;
