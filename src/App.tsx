import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Banner';
import MovieList from './Movies';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';

class Welcome extends React.Component {
  render() {
    return <h1>Welcome to the website</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <TopBanner saying="Cole's React Site - Main"></TopBanner>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
