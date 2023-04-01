import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark ">
          {/* <!-- Navbar for all pages --> */}
          <div className="navbar navbar-expand" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://baconsale.com/"
                >
                  Podcast
                </a>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link text-white">
                  Show Movies
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
