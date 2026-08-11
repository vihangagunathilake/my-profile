import React, { useState } from 'react';

function ProjectDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('technical');

  if (!project) return null;

  return (
    <section className="detail-view container">
      <div className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Portfolio
      </div>

      <div className="detail-header">
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{project.title}</h1>
        <div className="detail-meta">
          <span className="project-status-badge badge-active">{project.status}</span>
          <span style={{ color: 'var(--text-secondary)' }}>Enterprise Service Operations Platform</span>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          {/* Tabs Navigation */}
          <div className="tabs-container">
            <button
              className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button
              className={`tab-btn ${activeTab === 'product' ? 'active' : ''}`}
              onClick={() => setActiveTab('product')}
            >
              Product
            </button>
          </div>

          {activeTab === 'technical' ? (
            <div className="tech-overview">
              <div style={{ padding: '1.5rem', background: 'rgba(6, 182, 212, 0.05)', borderLeft: '4px solid var(--accent-cyan)', borderRadius: '0 12px 12px 0' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.6' }}>
                  Service Gateway is built as a modular monolithic application that separates business domains into independent modules while maintaining a single deployable application. This architecture keeps the system maintainable today while allowing future migration to microservices if required.
                </p>
              </div>

              <div className="tech-grid-2">
                <div className="tech-card">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                    Backend
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Java & Spring Boot</span>
                      <span className="tech-list-desc">Core framework and language for robust enterprise development.</span>
                    </div>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Spring Security</span>
                      <span className="tech-list-desc">JWT Authentication & Role-Based Authorization.</span>
                    </div>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Spring Data JPA</span>
                      <span className="tech-list-desc">Hibernate ORM with MySQL database.</span>
                    </div>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Apache Kafka</span>
                      <span className="tech-list-desc">Event-driven notification processing.</span>
                    </div>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Spring Boot Actuator</span>
                      <span className="tech-list-desc">Application health and metrics.</span>
                    </div>
                  </div>
                </div>

                <div className="tech-card">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                      <line x1="9" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="15" x2="21" y2="15"></line>
                    </svg>
                    Frontend
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="tech-list-item">
                      <span className="tech-list-title">React</span>
                      <span className="tech-list-desc">Modern single page application development.</span>
                    </div>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Context API</span>
                      <span className="tech-list-desc">Global state management.</span>
                    </div>
                    <div className="tech-list-item">
                      <span className="tech-list-title">Responsive UI</span>
                      <span className="tech-list-desc">Tailored interfaces for Admins, Employees, and Customers.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Architecture</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Modular Monolithic Architecture</strong> — Logical separation of domains.</li>
                  <li><strong>Layered Architecture</strong> — Clear separation of concerns (Controller → Service → Repository).</li>
                  <li><strong>RESTful API Design</strong> — Clean, standard resource endpoints.</li>
                  <li><strong>Domain-Driven Module Separation</strong> — Isolates domains to facilitate future microservices migration if required.</li>
                  <li><strong>Event-Driven Notifications</strong> — Managed asynchronously via Kafka.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Infrastructure & Deployment</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Backend Deployment</strong> — Packaged as a WAR application and deployed on Apache Tomcat.</li>
                  <li><strong>Frontend Web Server</strong> — Served through Nginx.</li>
                  <li><strong>Host OS</strong> — Hosted on Red Hat Enterprise Linux (RHEL).</li>
                  <li><strong>Reverse Proxy</strong> — Configured using Nginx as a reverse proxy.</li>
                  <li><strong>Environment-Based Configuration</strong> — Separate profiles for development and production.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Security</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>JWT-Based Authentication</strong> — Secure stateless session management.</li>
                  <li><strong>Role-Based Access Control (RBAC)</strong> — Dynamic permissions matching roles.</li>
                  <li><strong>Protected REST APIs</strong> — Guarded endpoints using Spring Security.</li>
                  <li><strong>Secure Password Storage</strong> — BCrypt cryptographic password hashing.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Monitoring & DevOps Roadmap</h2>
                <div className="tech-grid-2">
                  <div className="tech-card">
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Monitoring & Observability</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                      Spring Boot Actuator endpoints provide real-time application health and metrics. Planned integration with Micrometer, Prometheus, and Grafana for centralized observability.
                    </p>
                  </div>
                  <div className="tech-card">
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>DevOps Roadmap</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                      Future-proofing deployment practices with Docker containerization, Kubernetes orchestration, GitHub Actions CI/CD pipelines, automated deployments, and alerting.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Why this architecture?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>
                  Instead of building a traditional appointment management system, Service Gateway was designed around business workflows. The modular architecture isolates scheduling, booking, user management, payments, notifications, and analytics into separate modules, making the application easier to maintain, extend, and scale while avoiding the operational complexity of microservices during the current stage of development.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Tagline */}
              <div style={{ padding: '1.5rem', background: 'rgba(6, 182, 212, 0.05)', borderLeft: '4px solid var(--accent-cyan)', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                  Book a service. Watch it run itself.
                </p>
              </div>

              {/* What is it */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>What is it?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Imagine a bike service center. A customer books a "Full Service." That one booking actually means three different jobs, at three different work bays, done by three different people, at three different times.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Normally, someone has to figure all that out by hand. Multiply that by dozens of bookings a day, across several locations, and it gets messy fast.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Service Gateway solves this. It's a smart booking and operations app for service businesses — centers, spas, clinics, repair shops, anything with appointments and specialized work areas. It automatically turns one booking into the right jobs, sent to the right place, at the right time.
                </p>
              </div>

              {/* Who uses it */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Who uses it?</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Admins</strong> — set up the business, create services, and manage everything.</li>
                  <li><strong>Agents (employees)</strong> — log in at their work station and complete the jobs sent to them.</li>
                  <li><strong>Customers</strong> — book appointments.</li>
                </ul>
              </div>

              {/* What can it do */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>What can it do?</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Set up your business, your way</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Add locations, work stations, staff, roles, and working days. Build the business exactly how it really runs.</p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Set price and time once, done forever</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Every service has a cost and a duration. Combine several services into a ready-made package (a "workflow"), like "Full Bike Service." The total price and time are calculated automatically — no manual math.</p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>One booking, split into the right jobs, automatically</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>This is the magic part. Each work station only does certain services. So when someone books a package, Service Gateway automatically breaks it into smaller jobs and sends each one to the correct station — with its own start and end time.</p>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '8px', fontSize: '0.95rem' }}>
                      <em>Example: A "Full Service" covers 7 services. Station 1 handles service A. Stations 2–5 share the rest. Book the package once, and the system instantly creates all the right jobs at the right stations — no one has to plan it manually.</em>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>No payment, no booking</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>An appointment isn't confirmed just by booking it. The customer has to pay — either the full amount or a downpayment — through a secure payment gateway. Once that payment goes through, the job is verified and locked in. This keeps things fair and cuts down on no-shows.</p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>See your day, your way</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>View all bookings as a simple list, or as a calendar-style schedule. Whatever's easier in the moment.</p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Know what's happening, right now</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>A live dashboard shows what's going on: which jobs are active, which employees are performing well, where you're short-staffed, how much you're earning, and how often each service is used. <span style={{ color: 'var(--text-muted)' }}>(A deeper analytics section is coming soon.)</span></p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>One person, one station — always</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Employees log in at the station they're working. Simple rule, strictly enforced: nobody can be logged into two stations at once, and no station can be used by two people at the same time. No mix-ups, no double-booked staff.</p>
                  </div>
                </div>
              </div>

              {/* Why it's useful */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Why it's useful</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Most booking apps stop once an appointment is confirmed. Service Gateway keeps going — it plans out exactly who does what, where, and when, keeps everyone accountable, and gives business owners a live, honest picture of how their business is really running.
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="detail-sidebar-card">
            <h3>About Service</h3>

            <div className="spec-list">
              {/* <div className="spec-item">
                <span className="spec-label">Platform Link</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spec-value"
                  style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
                >
                  Visit Live Service
                </a>
              </div> */}

              <div className="spec-item">
                <span className="spec-label">Access</span>
                <span className="spec-value">Use username test@gmail.com and password test123 as credentials for this system.</span>
              </div>

              {/* <div className="spec-item">
                <span className="spec-label">Tech Stack</span>
                <span className="spec-value">Java, Spring Boot, Spring Actuator</span>
              </div>

              <div className="spec-item">
                <span className="spec-label">Observability</span>
                <span className="spec-value">Prometheus, Grafana, Micrometer, Zipkin</span>
              </div>

              <div className="spec-item">
                <span className="spec-label">Infrastructure</span>
                <span className="spec-value">Docker, Kubernetes (EKS/RHEL)</span>
              </div> */}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Launch Service
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
