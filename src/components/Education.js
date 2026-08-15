import React from 'react';

const degrees = [
  {
    period: '2017 — 2021',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  },
];

function Education() {
  return (
    <section className="section container" id="education">
      <p className="section-label">Academic</p>
      <h2 className="section-title">Education</h2>

      <div className="education-list">
        {degrees.map((edu, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div>
              <div className="edu-period">{edu.period}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              {edu.note && (
                <div style={{ fontSize: '0.8rem', color: 'var(--blue-light)', marginTop: '0.3rem', fontWeight: 500 }}>
                  {edu.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
