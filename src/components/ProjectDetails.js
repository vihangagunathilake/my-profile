import React, { useState } from 'react';

function ProjectDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('technical');

  if (!project) return null;

  const { technical, product } = project;

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
        <h1 style={{ fontSize: '2.75rem', marginBottom: '0.5rem' }}>{project.title}</h1>
        <div className="detail-meta">
          {project.status !== 'Commercial System' && (
            <span className={`project-status-badge ${project.status === 'Coming Soon' ? 'badge-upcoming' : 'badge-active'}`} style={{ position: 'static' }}>
              {project.status}
            </span>
          )}
          <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>
            {project.subtitle || 'Enterprise Software Solution'}
          </span>
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
              Technical Specifications
            </button>
            <button
              className={`tab-btn ${activeTab === 'product' ? 'active' : ''}`}
              onClick={() => setActiveTab('product')}
            >
              Product Overview
            </button>
            {product?.myInvolvement && (
              <button
                className={`tab-btn ${activeTab === 'involvement' ? 'active' : ''}`}
                onClick={() => setActiveTab('involvement')}
              >
                My Involvement
              </button>
            )}
          </div>

          {activeTab === 'involvement' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', animation: 'fadeIn 0.4s ease-out' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
                  My Involvement
                </h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
                  {product.myInvolvement.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--text-primary)' }}>{item}</li>
                  ))}
                </ul>
              </div>

              {product?.impact && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--accent-purple)' }}>Engineering Impact & Contributions</h2>
                  <div style={{ padding: '1.5rem', background: 'rgba(168, 85, 247, 0.06)', borderLeft: '4px solid var(--accent-purple)', borderRadius: '0 12px 12px 0' }}>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.7', fontWeight: '500' }}>
                      {product.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : activeTab === 'technical' ? (
            <div className="tech-overview">
              <div style={{ padding: '1.5rem', background: 'rgba(6, 182, 212, 0.05)', borderLeft: '4px solid var(--accent-cyan)', borderRadius: '0 12px 12px 0' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.6' }}>
                  {technical?.overview || 'Service Gateway is built as a modular monolithic application that separates business domains into independent modules while maintaining a single deployable application. This architecture keeps the system maintainable today while allowing future migration to microservices if required.'}
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
                    Backend & Data Layer
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {technical?.backendItems ? (
                      technical.backendItems.map((item, idx) => (
                        <div className="tech-list-item" key={idx}>
                          <span className="tech-list-title">{item.title}</span>
                          <span className="tech-list-desc">{item.desc}</span>
                        </div>
                      ))
                    ) : (
                      <>
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
                      </>
                    )}
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
                    Frontend & UI Layer
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {technical?.frontendItems ? (
                      technical.frontendItems.map((item, idx) => (
                        <div className="tech-list-item" key={idx}>
                          <span className="tech-list-title">{item.title}</span>
                          <span className="tech-list-desc">{item.desc}</span>
                        </div>
                      ))
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Architecture</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {technical?.architecture ? (
                    technical.architecture.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <>
                      <li><strong>Modular Monolithic Architecture</strong> — Logical separation of domains.</li>
                      <li><strong>Layered Architecture</strong> — Clear separation of concerns (Controller → Service → Repository).</li>
                      <li><strong>RESTful API Design</strong> — Clean, standard resource endpoints.</li>
                      <li><strong>Domain-Driven Module Separation</strong> — Isolates domains to facilitate future microservices migration if required.</li>
                      <li><strong>Event-Driven Notifications</strong> — Managed asynchronously via Kafka.</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Infrastructure & Deployment</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {technical?.infrastructure ? (
                    technical.infrastructure.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <>
                      <li><strong>Backend Deployment</strong> — Packaged as a WAR application and deployed on Apache Tomcat.</li>
                      <li><strong>Frontend Web Server</strong> — Served through Nginx.</li>
                      <li><strong>Host OS</strong> — Hosted on Red Hat Enterprise Linux (RHEL).</li>
                      <li><strong>Reverse Proxy</strong> — Configured using Nginx as a reverse proxy.</li>
                      <li><strong>Environment-Based Configuration</strong> — Separate profiles for development and production.</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Security</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {technical?.security ? (
                    technical.security.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <>
                      <li><strong>JWT-Based Authentication</strong> — Secure stateless session management.</li>
                      <li><strong>Role-Based Access Control (RBAC)</strong> — Dynamic permissions matching roles.</li>
                      <li><strong>Protected REST APIs</strong> — Guarded endpoints using Spring Security.</li>
                      <li><strong>Secure Password Storage</strong> — BCrypt cryptographic password hashing.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Tagline */}
              <div style={{ padding: '1.5rem', background: 'rgba(6, 182, 212, 0.05)', borderLeft: '4px solid var(--accent-cyan)', borderRadius: '0 12px 12px 0', marginBottom: '0.5rem' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                  {product?.tagline || 'Book a service. Watch it run itself.'}
                </p>
              </div>

              {/* What is it */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>What is it?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {product?.whatIsIt || `Imagine a bike service center. A customer books a "Full Service." That one booking actually means three different jobs, at three different work bays, done by three different people, at three different times.`}
                </p>
              </div>

              {/* Who uses it */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Who uses it?</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product?.whoUsesIt ? (
                    product.whoUsesIt.map((user, idx) => <li key={idx}>{user}</li>)
                  ) : (
                    <>
                      <li><strong>Admins</strong> — set up the business, create services, and manage everything.</li>
                      <li><strong>Agents (employees)</strong> — log in at their work station and complete the jobs sent to them.</li>
                      <li><strong>Customers</strong> — book appointments.</li>
                    </>
                  )}
                </ul>
              </div>

              {/* What can it do / Key Features */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Key Features & Capabilities</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {product?.features ? (
                    product.features.map((feat, idx) => (
                      <div key={idx}>
                        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{feat.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{feat.desc}</p>
                      </div>
                    ))
                  ) : (
                    <>
                      <div>
                        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Set up your business, your way</h3>
                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Add locations, work stations, staff, roles, and working days. Build the business exactly how it really runs.</p>
                      </div>
                      <div>
                        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Set price and time once, done forever</h3>
                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Every service has a cost and a duration. Combine several services into a ready-made package (a "workflow"), like "Full Bike Service."</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* My Involvement */}
              {product?.myInvolvement && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--accent-cyan)' }}>My Involvement</h2>
                  <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    {product.myInvolvement.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact & Commits */}
              {product?.impact && (
                <div>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--accent-purple)' }}>Engineering Impact & Contributions</h2>
                  <div style={{ padding: '1.5rem', background: 'rgba(168, 85, 247, 0.06)', borderLeft: '4px solid var(--accent-purple)', borderRadius: '0 12px 12px 0' }}>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.7', fontWeight: '500' }}>
                      {product.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Why it's useful */}
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Why it's useful</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {product?.whyUseful || `Most booking apps stop once an appointment is confirmed. Service Gateway keeps going — it plans out exactly who does what, where, and when.`}
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="detail-sidebar-card">
            <h3>Project Specifications</h3>

            <div className="spec-list">
              <div className="spec-item">
                <span className="spec-label">Category</span>
                <span className="spec-value" style={{ textTransform: 'capitalize' }}>{project.category} Project</span>
              </div>

              {project.status !== 'Commercial System' && (
                <div className="spec-item">
                  <span className="spec-label">Status</span>
                  <span className="spec-value">{project.status}</span>
                </div>
              )}

              {project.accessInfo && (
                <div className="spec-item">
                  <span className="spec-label">Access & Confidentiality</span>
                  <span className="spec-value" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{project.accessInfo}</span>
                </div>
              )}

              {project.id === 'gateway-provider' && (
                <div className="spec-item">
                  <span className="spec-label">Access Demo</span>
                  <span className="spec-value" style={{ fontSize: '0.85rem' }}>Use username test@gmail.com and password test123 as credentials.</span>
                </div>
              )}

              {project.tags && (
                <div className="spec-item">
                  <span className="spec-label">Tech Stack</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span className="project-tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Launch Live Service
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ) : (
              <div style={{
                background: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
                color: 'var(--accent-cyan)',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                Commercial deployment protected under NDA. Case study details shown.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
