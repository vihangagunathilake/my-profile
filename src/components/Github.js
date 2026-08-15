import React from 'react';

const repos = [
  {
    name: 'service-gateway',
    desc: 'Full-stack service management platform with Java 21, Spring Boot 3.5, React 19, Kafka, WebSocket, and a custom greedy scheduling algorithm.',
    lang: 'Java',
    stars: null,
  },
  {
    name: 'my-profile',
    desc: 'Personal portfolio website built with React — the site you are currently viewing.',
    lang: 'JavaScript',
    stars: null,
  },
];

function Github() {
  return (
    <section className="section container" id="github">
      <p className="section-label">Open Source</p>
      <h2 className="section-title">GitHub</h2>
      <p className="section-desc">Most professional work is under NDA — below are personal projects and contributions.</p>

      {/* Profile card */}
      <a
        href="https://github.com/vihanga951016"
        target="_blank"
        rel="noopener noreferrer"
        className="github-card"
        style={{ marginBottom: '1.5rem' }}
      >
        <div className="github-card-left">
          <div className="github-avatar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--blue-light)' }}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </div>
          <div className="github-info">
            <h3>vihanga951016</h3>
            <p>github.com/vihanga951016 · View full profile ↗</p>
          </div>
        </div>

        <div className="github-stats">
          <div className="github-stat">
            <span className="github-stat-num">5+</span>
            <span className="github-stat-label">Repos</span>
          </div>
          <div className="github-stat">
            <span className="github-stat-num">4+</span>
            <span className="github-stat-label">Years Active</span>
          </div>
          <div className="github-stat">
            <span className="github-stat-num">Java</span>
            <span className="github-stat-label">Primary Lang</span>
          </div>
        </div>
      </a>

      {/* Repo cards */}
      <div className="github-repos">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={`https://github.com/vihanga951016/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repo-card"
            style={{ textDecoration: 'none' }}
          >
            <div className="github-repo-name">{repo.name}</div>
            <div className="github-repo-desc">{repo.desc}</div>
            <div className="github-repo-footer">
              <span className="github-repo-lang">
                <span className="lang-dot" />
                {repo.lang}
              </span>
            </div>
          </a>
        ))}

        {/* NDA Note */}
        <div
          className="github-repo-card"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}
        >
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
            Commercial work at Techsphere is under NDA<br />
            and stored in private Bitbucket repositories.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Github;
