import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';

const PROJECTS_DATA = [
  {
    id: 'gateway-provider',
    title: 'service-gateway (provider)',
    category: 'personal',
    status: 'Active',
    thumbnail: '/service-gateway-provider.png',
    link: 'https://vihangagunathilake.com/service-gateway',
    tags: ['Spring Boot', 'React', 'MySQL', 'Kafka'],
    description: 'Book a service. Watch it run itself.',
    longDescription: ''
  },
  {
    id: 'gateway-seeker',
    title: 'service-gateway (seeker)',
    category: 'personal',
    status: 'Coming Soon',
    thumbnail: '/logo.svg',
    tags: ['Spring Boot', 'React', 'MySQL'],
    description: 'Client-side service-gateway seeker module supporting client discovery, tracing, and secure microservice integration.',
    longDescription: ''
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoadingProject, setIsLoadingProject] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const commercialProjects = PROJECTS_DATA.filter((p) => p.category === 'commercial');
  const personalProjects = PROJECTS_DATA.filter((p) => p.category === 'personal');

  const handleProjectClick = (project, isComingSoon = false) => {
    if (isComingSoon) {
      setShowToast(true);
    } else {
      setIsLoadingProject(true);
      setTimeout(() => {
        setSelectedProject(project);
        setIsLoadingProject(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 750);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="App">
      {isLoadingProject && (
        <div className="loader-overlay">
          <div className="loader-spinner"></div>
          <div className="loader-text">Configuring Gateway Environment...</div>
        </div>
      )}

      <Header
        onNavigate={(view) => {
          if (view === 'home') setSelectedProject(null);
        }}
        currentView={selectedProject ? 'project' : 'home'}
      />

      {selectedProject ? (
        <ProjectDetails

          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <Hero />

          <section className="section container" id="projects" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div className="section-header">
              <p className="hero-subtitle" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Portfolio</p>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc">Explore enterprise systems and gateways built with scalable architectures.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  Commercial Projects
                </h3>
                {commercialProjects.length > 0 ? (
                  <div className="projects-list">
                    {commercialProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={handleProjectClick}
                      />
                    ))}
                  </div>
                ) : (
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px dashed rgba(6, 182, 212, 0.2)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
                      Company and client projects are protected by Non-Disclosure Agreements (NDAs). Case studies and references can be discussed in detail upon request.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-heading)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Personal Projects
                </h3>
                {personalProjects.length > 0 ? (
                  <div className="projects-list">
                    {personalProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={handleProjectClick}
                      />
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No personal projects found.</p>
                )}
              </div>
            </div>
          </section>

          <About />

          <Skills />
        </>
      )}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: '6rem', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Vihanga Gunathilake. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/vihanga951016" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/yasintha-gunathilake/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Toast alert for Coming Soon items */}
      {showToast && (
        <div className="toast">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>This project is coming soon and cannot be viewed yet!</span>
        </div>
      )}
    </div>
  );
}

export default App;
