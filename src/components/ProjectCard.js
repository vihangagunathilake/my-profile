import React from 'react';

function ProjectCard({ project, onClick }) {
  const isComingSoon = project.status === 'Coming Soon';
  const isCommercialSystem = project.status === 'Commercial System';

  return (
    <div 
      className={`project-card ${isComingSoon ? 'coming-soon' : 'clickable'}`}
      onClick={() => {
        if (!isComingSoon) {
          onClick(project);
        } else {
          onClick(null, true);
        }
      }}
    >
      <div className="project-info">
        <div className="project-title-row">
          <h3 className="project-card-title">{project.title}</h3>
          {!isCommercialSystem && (
            <span className={`project-status-badge ${isComingSoon ? 'badge-upcoming' : 'badge-active'}`}>
              {project.status}
            </span>
          )}
        </div>

        <p className="project-desc">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span className="project-tag" key={idx}>{tag}</span>
          ))}
        </div>
        
        <div className="project-card-footer">
          {!isComingSoon ? (
            <span className="project-footer-link">
              Explore Details
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          ) : (
            <span className="project-footer-link" style={{ color: 'var(--text-muted)' }}>
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
