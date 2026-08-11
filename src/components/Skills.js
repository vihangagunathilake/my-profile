import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Backend & Systems Architecture",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      skills: ["Java", "Spring Boot", "Microservices", "Spring Cloud", "Spring Actuator", "System Design"]
    },
    {
      title: "DevOps & Monitoring",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12A10 10 0 0 1 12 22a10 10 0 0 1-10-10A10 10 0 0 1 12 2" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Splunk", "Zipkin", "Micrometer"]
    },
    {
      title: "OS & Databases",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      ),
      skills: ["Linux (RHEL Variants)", "RedHat Enterprise Linux", "MySQL", "Database Optimization"]
    },
    {
      title: "Frontend, Design & Quality",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2"/>
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" strokeWidth="2"/>
        </svg>
      ),
      skills: ["React JS", "Figma", "Canva", "JUnit", "Mockito", "Unit Testing"]
    }
  ];

  return (
    <section className="section container" id="skills">
      <div className="section-header">
        <p className="hero-subtitle" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Capabilities</p>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-desc">A deep dive into tools and technologies I use to build enterprise-grade software.</p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-card-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, sIdx) => (
                <span className="skill-tag" key={sIdx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
