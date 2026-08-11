import React from 'react';

function Header({ onNavigate, currentView }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>
          vihangagunathilake<span className="gradient-text">.com</span>
        </div>
        <nav className="nav-links">
          <span 
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </span>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
