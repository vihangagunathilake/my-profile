import React from 'react';

function ProjectCard({ project, onClick }) {
  const isComingSoon = project.status === 'Coming Soon';

  return (
    <div 
      className={`project-card ${isComingSoon ? 'coming-soon' : 'clickable'}`}
      onClick={() => {
        if (!isComingSoon) {
          onClick(project);
        } else {
          onClick(null, true); // Trigger coming soon action
        }
      }}
      style={{ padding: '2rem' }}
    >
      <div className="project-info" style={{ padding: 0 }}>
        <div className="project-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ margin: 0 }}>{project.title}</h3>
            <span className={`project-status-badge ${isComingSoon ? 'badge-upcoming' : 'badge-active'}`} style={{ position: 'static', padding: '0.25rem 0.75rem' }}>
              {project.status}
            </span>
          </div>
          {!isComingSoon && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="project-footer-link">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </div>
        <p className="project-desc" style={{ marginBottom: '1rem' }}>{project.description}</p>
        
        <div className="project-tags" style={{ marginBottom: '1rem' }}>
          {project.tags.map((tag, idx) => (
            <span className="project-tag" key={idx}>{tag}</span>
          ))}
        </div>
        
        {!isComingSoon ? (
          <span className="project-footer-link">
            Explore Project Details
          </span>
        ) : (
          <span className="project-footer-link" style={{ color: 'var(--text-muted)' }}>
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
