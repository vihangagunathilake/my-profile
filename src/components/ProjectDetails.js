import React from 'react';

function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  const formatText = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="detail-view container">
      {/* Back Button */}
      <div className="back-btn" onClick={onBack}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Portfolio
      </div>

      {/* Title */}
      <div className="pd-header">
        <div className="pd-badge-row">
          <span className={`project-status-badge ${project.category === 'commercial' ? 'badge-commercial' : 'badge-active'}`}>
            {project.category === 'commercial' ? 'Commercial' : 'Personal'}
          </span>
          {project.status && project.status !== 'Commercial System' && (
            <span className="project-status-badge badge-active">{project.status}</span>
          )}
        </div>

        <h1 className="pd-title">{project.title}</h1>

        {project.details?.subtitle && (
          <p className="pd-subtitle">{project.details.subtitle}</p>
        )}
      </div>

      {/* Description */}
      {project.details?.description && (
        <div className="pd-section">
          {project.details.description.map((para, i) => (
            <p className="pd-desc" key={i}>{formatText(para)}</p>
          ))}
        </div>
      )}

      {/* Engineering Highlights */}
      {project.details?.highlights && (
        <div className="pd-section">
          <h2 className="pd-section-title">My Involvement</h2>
          <ul className="pd-highlights">
            {project.details.highlights.map((item, i) => (
              <li key={i} className="pd-highlight-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{formatText(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Highlights */}
      {project.details?.keyHighlights && (
        <div className="pd-section">
          <h2 className="pd-section-title">Key Highlights</h2>
          <div className="pd-key-highlights">
            {project.details.keyHighlights.map((highlight, i) => (
              <span key={i} className="pd-key-highlight">{highlight}</span>
            ))}
          </div>
        </div>
      )}

      {/* Technology */}
      {project.details?.technology && (
        <div className="pd-section">
          <h2 className="pd-section-title">Technology</h2>
          <div className="pd-tech-tags">
            {project.details.technology.map((tech, i) => (
              <span key={i} className="pd-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}

      {/* External link */}
      {project.link && project.category !== 'commercial' && (
        <div className="pd-section">
          <h2 className="pd-section-title">More Information</h2>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pd-ext-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {project.link}
          </a>

          {project.demoCredentials && (
            <div className="pd-credentials">
              <p className="pd-credentials-note">{project.demoCredentials.note}</p>
              <div className="pd-credentials-row">
                <span className="pd-credentials-label">Email</span>
                <code className="pd-credentials-value">{project.demoCredentials.email}</code>
              </div>
              <div className="pd-credentials-row">
                <span className="pd-credentials-label">Password</span>
                <code className="pd-credentials-value">{project.demoCredentials.password}</code>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Fallback: if no details shape, show tags from old data */}
      {!project.details && project.tags && (
        <div className="pd-section">
          <h2 className="pd-section-title">Technology</h2>
          <div className="pd-tech-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="pd-tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      )}

      {!project.details && project.description && (
        <div className="pd-section">
          <p className="pd-desc">{formatText(project.description)}</p>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
