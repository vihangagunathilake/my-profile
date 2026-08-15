import React from 'react';

const milestones = [
  {
    year: '2021',
    title: 'Started Software Engineering Career',
    tags: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    year: '2022',
    title: 'Enterprise Application Development',
    tags: ['REST APIs', 'JPA / Hibernate', 'React', 'Authentication & Authorization'],
  },
  {
    year: '2023',
    title: 'Full-Stack & Enterprise Systems',
    tags: ['Complex business workflows', 'Database design', 'Production applications'],
  },
  {
    year: '2024',
    title: 'Distributed & Real-Time Systems',
    tags: ['Kafka', 'MQTT', 'WebSocket', 'Event-driven architecture'],
  },
  {
    year: '2025',
    title: 'Analytics & Platform Engineering',
    tags: ['Footfall analytics', 'Reporting systems', 'Data processing', 'Performance optimization'],
  },
  {
    year: '2026',
    title: 'Growing Toward Senior Engineering',
    tags: ['System architecture', 'DevOps & infrastructure', 'Production troubleshooting', 'Distributed systems', 'Technical ownership'],
  },
];

function Timeline() {
  return (
    <section className="section container" id="journey">
      <p className="section-label">Career</p>
      <h2 className="section-title">Engineering Journey</h2>
      <p className="section-desc">Key milestones and growth areas year by year.</p>

      <div className="timeline-list">
        {milestones.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-tags">
              {item.tags.map((tag, j) => (
                <span className="timeline-tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
