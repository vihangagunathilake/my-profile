import React from 'react';

const expertise = [
  {
    title: 'Backend',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'RESTful APIs', 'Modular Monolith', 'Microservices', 'JWT', 'LDAP / AD'],
  },
  {
    title: 'Frontend',
    tags: ['React', 'Redux', 'React Router', 'SASS', 'Material UI', 'Ant Design', 'ApexCharts', 'Konva', 'PWA'],
  },
  {
    title: 'Database',
    tags: ['MySQL', 'Spring Data JPA', 'Hibernate', 'SQL Views', 'MySQL Events', 'Stored Procedures', 'Query Optimization'],
  },
  {
    title: 'DevOps',
    tags: ['Bitbucket Pipelines', 'CI/CD', 'Apache Tomcat', 'Firebase Hosting', 'Maven', 'Linux (RHEL)', 'Docker'],
  },
  {
    title: 'Architecture',
    tags: ['Modular Monolith', 'Domain-Driven Design', 'RBAC', 'Greedy Scheduling', 'Caching', 'JobRunr', 'Caffeine Cache'],
  },
  {
    title: 'Messaging',
    tags: ['MQTT', 'ActiveMQ', 'Apache Kafka', 'WebSocket', 'STOMP', 'pub/sub patterns'],
  },
  {
    title: 'Cloud & Tools',
    tags: ['Firebase', 'Nginx', 'Thymeleaf', 'Apache POI', 'JasperReports', 'Liquibase', 'Lombok', 'Bitbucket', 'GitHub'],
  },
];

function Skills() {
  return (
    <section className="section container" id="skills">
      <p className="section-label">Capabilities</p>
      <h2 className="section-title">Technical Expertise</h2>
      <p className="section-desc">Technologies and tools I use to build enterprise-grade software.</p>

      <div className="expertise-grid">
        {expertise.map((cat, i) => (
          <div className="expertise-card" key={i}>
            <div className="expertise-card-title">{cat.title}</div>
            <div className="expertise-tags">
              {cat.tags.map((tag, j) => (
                <span className="expertise-tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
