import React from 'react';

function About() {
  return (
    <section className="section container" id="about" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <p className="hero-subtitle" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Profile</p>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>Quick Stats</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><strong>Role:</strong> Software Engineer</li>
            <li><strong>Experience:</strong> 4+ Years</li>
            <li><strong>Focus:</strong> Enterprise & Microservices</li>
            <li><strong>OS:</strong> Linux Specialist (RHEL)</li>
          </ul>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          <p>
            I am a dedicated and detail-oriented Software Engineer with a solid track record of over 4 years 
            developing and scaling robust enterprise applications. My engineering philosophy revolves around 
            creating maintainable, modular backend systems and implementing automated DevOps practices.
          </p>
          <p>
            With extensive experience across the Java ecosystem (Spring Boot, Spring Cloud, JUnit, Mockito) 
            and modern deployment environments (Docker, Kubernetes, and RHEL Linux distributions), I focus on 
            bridge-building between reliable server architectures and fast, continuous delivery pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
