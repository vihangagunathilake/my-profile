import React from 'react';

const stats = [
  {
    number: '5+',
    label: 'Years Experience',
    sub: 'Enterprise Software',
  },
  {
    number: 'Backend',
    label: 'Primary Focus',
    sub: 'Java · Spring Boot',
  },
  {
    number: 'Frontend',
    label: 'Full-Stack Capable',
    sub: 'React · Redux',
  },
  {
    number: 'DevOps',
    label: 'CI/CD & Infra',
    sub: 'Docker · Linux · Pipelines',
  },
];

function EngineeringSummary() {
  return (
    <section className="summary-section" id="about">
      <div className="container">
        <div className="summary-grid">
          {stats.map((item, i) => (
            <div className="summary-item" key={i}>
              <div className="summary-number">{item.number}</div>
              <div className="summary-label">{item.label}</div>
              <div className="summary-sublabel">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringSummary;
