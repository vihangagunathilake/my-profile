import React from 'react';

function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  const { product, techStackTables, involvementSection } = project;

  return (
    <section className="detail-view container">
      {/* Back Button */}
      <div className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Portfolio
      </div>

      {/* Header Banner */}
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <h1 className="gradient-text" style={{ fontSize: '3rem', margin: 0, fontWeight: 800, letterSpacing: '-1px' }}>
            {project.title}
          </h1>
        </div>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 0 1.5rem 0', lineHeight: 1.6 }}>
          {project.subtitle || 'Enterprise Multi-Branch Experience & Queue Management System'}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {project.tags && project.tags.map((tag, idx) => (
            <span className="project-tag" key={idx} style={{ padding: '0.35rem 0.85rem', fontSize: '0.85rem', borderRadius: '50px' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Impact Callout Banner */}
        {product?.impact && (
          <div style={{
            padding: '1.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            borderRadius: '16px',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#fff'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.25rem' }}>
                Impact & Ownership Summary
              </div>
              <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>
                {product.impact}
              </div>
            </div>
          </div>
        )}

        {/* Legend / Section Quick Guide */}
        <div style={{
          padding: '1.25rem 1.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          fontSize: '0.95rem'
        }}>
          <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            Legend
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
            <a href="#technologies-used" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--accent-cyan)' }}>1.</span> Technologies Used
            </a>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <a href="#my-involvement" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--accent-purple)' }}>2.</span> {involvementSection?.title || 'My Involvement'}
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="detail-grid" style={{ marginTop: '3rem' }}>
        <div className="detail-main" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* SECTION 1: TECHNOLOGIES USED */}
          <div id="technologies-used" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h2 style={{ fontSize: '2.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>1.</span> Technologies Used
              </h2>
            </div>

            {/* Backend Table */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--accent-cyan)' }}>
                    {techStackTables?.backendTitle || 'Backend'}
                  </h3>
                  {techStackTables?.backendSubtitle && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                      {techStackTables.backendSubtitle}
                    </p>
                  )}
                </div>
              </div>

              {techStackTables?.backend ? (
                <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '14px', background: 'var(--bg-card)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                    <thead>
                      <tr style={{ background: 'rgba(6, 182, 212, 0.08)', borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ padding: '1rem 1.5rem', width: '35%', color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>Area</th>
                        <th style={{ padding: '1rem 1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Technology Stack</th>
                      </tr>
                    </thead>
                    <tbody>
                      {techStackTables.backend.map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: idx !== techStackTables.backend.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                          <td style={{ padding: '0.9rem 1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{row.area}</td>
                          <td style={{ padding: '0.9rem 1.5rem', color: 'var(--text-secondary)' }}>
                            <span style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem 0.75rem', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)', fontWeight: 500 }}>
                              {row.technology}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>

            {/* Frontend Table */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-purple)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="9" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="15" x2="21" y2="15"></line>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--accent-purple)' }}>
                    {techStackTables?.frontendTitle || 'Frontend'}
                  </h3>
                  {techStackTables?.frontendSubtitle && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                      {techStackTables.frontendSubtitle}
                    </p>
                  )}
                </div>
              </div>

              {techStackTables?.frontend ? (
                <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '14px', background: 'var(--bg-card)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                    <thead>
                      <tr style={{ background: 'rgba(168, 85, 247, 0.08)', borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ padding: '1rem 1.5rem', width: '35%', color: 'var(--accent-purple)', fontFamily: 'var(--font-heading)' }}>Area</th>
                        <th style={{ padding: '1rem 1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Technology Stack</th>
                      </tr>
                    </thead>
                    <tbody>
                      {techStackTables.frontend.map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: idx !== techStackTables.frontend.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                          <td style={{ padding: '0.9rem 1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{row.area}</td>
                          <td style={{ padding: '0.9rem 1.5rem', color: 'var(--text-secondary)' }}>
                            <span style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem 0.75rem', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)', fontWeight: 500 }}>
                              {row.technology}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          </div>

          {/* SECTION 2: MY INVOLVEMENT */}
          <div id="my-involvement" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <h2 style={{ fontSize: '2.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-purple)' }}>2.</span> {involvementSection?.title || 'My Involvement'}
              </h2>
            </div>

            {/* Backend Involvement */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                Backend
              </h3>

              {involvementSection?.backend ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {involvementSection.backend.map((item, idx) => (
                    <div key={idx} style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderLeft: '4px solid var(--accent-cyan)',
                      borderRadius: '0 14px 14px 0',
                      padding: '1.5rem',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                        {item.topic}
                      </h4>
                      <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            {pt.split(/(@NamedQuery|@NamedNativeQuery|JpaRepository|api\/impl|SP_TRANSFER_USER|rp_agent_wise_table|rp_agent_attendance_table|FootfallDevice|DailyPersonAttribute|DetectedPerson|MatchedDetectedPerson|CubeQueryRequest|V9\/PCS\/CubeQuery|FeedbackController|FeedbackService|TicketServiceImpl|KioskBean|evt_report_insert|f_mv_feedback_summary_report|f_mv_feedback_detail_report|f_mv_feedback_sms_report|GROUP BY|@Query|Lombok|JwtAuthenticationFilter|@EnableMethodSecurity|CustomAccessDeniedHandler|JobAtPoint|ServicePoint|getCompressedJobsByPoint|getAvailableServicesIds|ServiceTimeProjection|JobTimelineProjection|PrepareJobSubMethods|CustomerArrivedTrigger|TimeoutJobListener|SimpMessagingTemplate|\/topic\/notifications\/\{userId\}|JobTimeoutScheduler|DeleteExpiredJobsScheduler|ConcurrentMapCacheManager|Java 21|Spring Boot 3\.5)/g).map((chunk, cIdx) => (
                              ['@NamedQuery', '@NamedNativeQuery', 'JpaRepository', 'api/impl', 'SP_TRANSFER_USER', 'rp_agent_wise_table', 'rp_agent_attendance_table', 'FootfallDevice', 'DailyPersonAttribute', 'DetectedPerson', 'MatchedDetectedPerson', 'CubeQueryRequest', 'V9/PCS/CubeQuery', 'FeedbackController', 'FeedbackService', 'TicketServiceImpl', 'KioskBean', 'evt_report_insert', 'f_mv_feedback_summary_report', 'f_mv_feedback_detail_report', 'f_mv_feedback_sms_report', 'GROUP BY', '@Query', 'Lombok', 'JwtAuthenticationFilter', '@EnableMethodSecurity', 'CustomAccessDeniedHandler', 'JobAtPoint', 'ServicePoint', 'getCompressedJobsByPoint', 'getAvailableServicesIds', 'ServiceTimeProjection', 'JobTimelineProjection', 'PrepareJobSubMethods', 'CustomerArrivedTrigger', 'TimeoutJobListener', 'SimpMessagingTemplate', '/topic/notifications/{userId}', 'JobTimeoutScheduler', 'DeleteExpiredJobsScheduler', 'ConcurrentMapCacheManager', 'Java 21', 'Spring Boot 3.5'].includes(chunk) ? (
                                <code key={cIdx} style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                                  {chunk}
                                </code>
                              ) : chunk
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Frontend Involvement */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                  <line x1="9" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="15" x2="21" y2="15"></line>
                </svg>
                Frontend
              </h3>

              {involvementSection?.frontend ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {involvementSection.frontend.map((item, idx) => (
                    <div key={idx} style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderLeft: '4px solid var(--accent-purple)',
                      borderRadius: '0 14px 14px 0',
                      padding: '1.5rem',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-purple)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                        {item.topic}
                      </h4>
                      <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            {pt.split(/(Redux Thunk|paho-mqtt|MUI Datatables|React-Konva|React Router DOM v6|Firebase Hosting|PrimeReact|ApexCharts|Chart\.js|FeedbackDashboard\.js|FeedbackPerformanceDashboard\.js|TokenFeedbacks\.js|AllFeedbacks\.js|mqttService\.js|DesignKiosksTemplate\.js|AddBranchModal\.js|AddKioskModal\.js|givenDate DESC|connectMQTT|subscribeTopic|unsubscribeTopic|disconnectMQTT|Moment\.js|FeedbackReports\.js|FeedbackSmsReports\.js|FeedbackSmsReport\.js|SmsGroup\.js|mqtt\.js|Redux \+ Thunk|MQTT \(mqtt\.js\)|Bitbucket Pipelines|React 19|React Router v7|ProtectedRoute|\/my-jobs|\/dashboard|ThemeContext|CurrencyContext|STOMP\.js|SockJS|Service Worker)/g).map((chunk, cIdx) => (
                              ['Redux Thunk', 'paho-mqtt', 'MUI Datatables', 'React-Konva', 'React Router DOM v6', 'Firebase Hosting', 'PrimeReact', 'ApexCharts', 'Chart.js', 'FeedbackDashboard.js', 'FeedbackPerformanceDashboard.js', 'TokenFeedbacks.js', 'AllFeedbacks.js', 'mqttService.js', 'DesignKiosksTemplate.js', 'AddBranchModal.js', 'AddKioskModal.js', 'givenDate DESC', 'connectMQTT', 'subscribeTopic', 'unsubscribeTopic', 'disconnectMQTT', 'Moment.js', 'FeedbackReports.js', 'FeedbackSmsReports.js', 'FeedbackSmsReport.js', 'SmsGroup.js', 'mqtt.js', 'Redux + Thunk', 'MQTT (mqtt.js)', 'Bitbucket Pipelines', 'React 19', 'React Router v7', 'ProtectedRoute', '/my-jobs', '/dashboard', 'ThemeContext', 'CurrencyContext', 'STOMP.js', 'SockJS', 'Service Worker'].includes(chunk) ? (
                                <code key={cIdx} style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--accent-purple)', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                                  {chunk}
                                </code>
                              ) : chunk
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

        </div>

        {/* Sidebar Card */}
        <div>
          <div className="detail-sidebar-card">
            <h3>Project Specifications</h3>

            <div className="spec-list">
              <div className="spec-item">
                <span className="spec-label">Category</span>
                <span className="spec-value" style={{ textTransform: 'capitalize' }}>{project.category} System</span>
              </div>

              {project.accessInfo && (
                <div className="spec-item">
                  <span className="spec-label">Confidentiality</span>
                  <span className="spec-value" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {project.accessInfo}
                  </span>
                </div>
              )}

              {project.tags && (
                <div className="spec-item">
                  <span className="spec-label">Primary Stack</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span className="project-tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
              Commercial platform deployed across enterprise banking & government branches.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
