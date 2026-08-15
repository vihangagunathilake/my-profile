import React, { useState, useEffect } from 'react';

function Header({ onNavigate, currentView, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" style={{ boxShadow: scrolled ? 'var(--shadow-sm)' : 'none' }}>
      <div className="container header-container">
        {/* Logo */}
        <div
          className="logo"
          onClick={() => {
            onNavigate('home');
            setIsMenuOpen(false);
          }}
          role="button"
          tabIndex={0}
        >
          vihanga<span>gunathilake</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-only">
          {currentView === 'home' &&
            navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}

          {currentView === 'project' && (
            <span className="nav-link" onClick={() => onNavigate('home')}>
              ← Back
            </span>
          )}

          <a
            href="/Vihanga_Gunathilake_CV.pdf"
            download="Vihanga_Gunathilake_CV.pdf"
            className="nav-link resume-link"
          >
            CV (PDF) ⬇
          </a>
          <a
            href="/Vihanga_Gunathilake_CV.docx"
            download="Vihanga_Gunathilake_CV.docx"
            className="nav-link resume-link"
            style={{ marginLeft: '0.25rem' }}
          >
            CV (Word) ⬇
          </a>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button
            className="theme-toggle mobile-theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <button
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {currentView === 'home' &&
            navItems.map((item) => (
              <a key={item.label} href={item.href} className="mobile-nav-link" onClick={handleLinkClick}>
                {item.label}
              </a>
            ))}

          {currentView === 'project' && (
            <span className="mobile-nav-link" onClick={() => { onNavigate('home'); handleLinkClick(); }}>
              ← Back to Portfolio
            </span>
          )}

          <div className="mobile-drawer-divider" />

          <a
            href="/Vihanga_Gunathilake_CV.pdf"
            download="Vihanga_Gunathilake_CV.pdf"
            className="mobile-nav-link mobile-resume-link"
            onClick={handleLinkClick}
          >
            Download CV (PDF) ⬇
          </a>
          <a
            href="/Vihanga_Gunathilake_CV.docx"
            download="Vihanga_Gunathilake_CV.docx"
            className="mobile-nav-link mobile-resume-link"
            onClick={handleLinkClick}
          >
            Download CV (Word) ⬇
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
