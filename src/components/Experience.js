import React from 'react';

const experiences = [
  {
    period: 'December 2021 — Present',
    role: 'Full-Stack Software Engineer',
    company: 'T S Technologies · Full-time',
    points: [
      'Architected and developed **TS Queue**, an enterprise queue management platform using Java, Spring Boot, React, MQTT, MySQL, and modular Maven architecture.',
      'Built **People Counting & Footfall Analytics**, integrating IP cameras with real-time visitor tracking, gender/age analytics, regional dashboards, and reporting.',
      'Developed an **enterprise Customer Feedback platform** with survey workflows, CSAT/staff performance analytics, real-time MQTT dashboards, and automated alerts.',
      'Engineered complex **analytics and reporting systems** using MySQL, native SQL, recursive CTEs, JPA projections, and materialized views.',
      'Developed **React-based real-time dashboards and enterprise administration portals** across multiple business domains.',
      'Implemented **JWT/RBAC, Active Directory/LDAP authentication**, and CI/CD deployments using Bitbucket Pipelines, Docker, and Apache Tomcat.',
    ],
  },
];

function Experience() {
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
    <section className="section container" id="experience">
      <p className="section-label">Work History</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-desc">Building enterprise systems that scale.</p>

      <div className="experience-list">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-dot" />
            <div className="exp-period">{exp.period}</div>
            <div className="exp-role">{exp.role}</div>
            <div className="exp-company">{exp.company}</div>
            <div className="exp-points">
              {exp.points.map((pt, j) => (
                <p className="exp-point" key={j}>{formatText(pt)}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
