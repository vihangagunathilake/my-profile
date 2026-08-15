import React from 'react';

function ProjectCard({ project, onClick }) {
  const isComingSoon = project.status === 'Coming Soon';

  const handleClick = () => {
    if (onClick) onClick(project, isComingSoon);
  };

  const badgeClass = isComingSoon
    ? 'badge-upcoming'
    : project.category === 'commercial'
    ? 'badge-commercial'
    : 'badge-active';

  const badgeLabel = isComingSoon
    ? 'Coming Soon'
    : project.category === 'commercial'
    ? 'Commercial'
    : 'Personal';

  return (
    <div
      className={`project-card ${isComingSoon ? 'coming-soon' : ''}`}
      onClick={handleClick}
      role={isComingSoon ? undefined : 'button'}
      tabIndex={isComingSoon ? undefined : 0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
    >
      <div className="project-card-top">
        <h3 className="project-card-title">{project.title}</h3>
        <span className={`project-status-badge ${badgeClass}`}>{badgeLabel}</span>
      </div>

      {project.tags && project.tags.length > 0 && (
        <div className="project-tags">
          {project.tags.slice(0, 5).map((tag, i) => (
            <span className="project-tag" key={i}>{tag}</span>
          ))}
          {project.tags.length > 5 && (
            <span className="project-tag" style={{ opacity: 0.6 }}>+{project.tags.length - 5}</span>
          )}
        </div>
      )}

      <div className="project-card-footer">
        {isComingSoon ? (
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Coming soon</span>
        ) : (
          <span>View Details</span>
        )}
        {!isComingSoon && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
