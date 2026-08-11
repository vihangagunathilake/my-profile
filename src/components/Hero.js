import React from 'react';

function Hero() {
  return (
    <section className="hero container">
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      
      <p className="hero-subtitle">Software Engineer</p>
      <h1 className="hero-title">
        Hi, I'm <span className="gradient-text">Vihanga Gunathilake</span><br />
        Building Enterprise Systems.
      </h1>
      
      <p className="hero-desc">
        A results-driven Software Engineer with <strong>4+ years of experience</strong> in designing, 
        developing, and maintaining robust, scalable enterprise software. Specializing in high-performance 
        backend architectures, DevOps pipeline optimization, and cloud microservices.
      </p>
      
      {/* Contact & Social list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
        <div>Email: <a href="mailto:hmyvihangagunathilake@gmail.com" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>hmyvihangagunathilake@gmail.com</a></div>
        <div>Contact: <a href="https://wa.me/94770165247" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>(+94)77-0165247</a> (Available in WhatsApp)</div>
        <div>LinkedIn: <a href="https://www.linkedin.com/in/yasintha-gunathilake/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>linkedin.com/in/yasintha-gunathilake</a></div>
        <div>GitHub: <a href="https://github.com/vihanga951016" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>github.com/vihanga951016</a></div>
      </div>
      
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View Projects
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <a href="#about" className="btn btn-secondary">About & Skills</a>
      </div>
    </section>
  );
}

export default Hero;
