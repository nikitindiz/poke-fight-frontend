import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';

import PageLayout from './components/PageLayout';

const App = () => {
  return (
    <div className="App">
      <Router>
        <PageLayout />
      </Router>
    </div>
  );
}

export default App;
