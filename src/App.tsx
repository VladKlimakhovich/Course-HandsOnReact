import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';

function App() {
  return (
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </Router>
      );
}

export default App;
