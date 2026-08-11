import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';

const PROJECTS_DATA = [
  {
    id: 'queue-management-system',
    title: 'TS Queue (Queue Management System)',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'Enterprise Multi-Branch Queue Management & Branch Experience Platform',
    tags: ['Java', 'Spring Boot', 'React', 'MQTT', 'MySQL', 'Redux', 'JobRunr', 'ApexCharts', 'Caffeine'],
    description: 'Enterprise-grade, multi-branch Queue Management and Branch Experience Platform used by banks, service centers, and government organizations. Owned & built the real-time Branch Dashboard end-to-end over ~4 years.',
    accessInfo: 'Commercial platform deployment protected by NDA. Technical overview & personal involvement detailed below.',
    technical: {
      overview: 'TS Queue is an enterprise-grade, multi-branch Queue Management and Branch Experience Platform used by banks, service centers, and government organizations to manage the complete customer journey — from ticket issuance and appointments to counter operations, kiosks, digital displays, notifications, feedback, CRM, and analytics. Built with Java, Spring Boot, Spring Data JPA/Hibernate, Spring Security, JWT, LDAP/Active Directory, MySQL, MQTT, JobRunr, Caffeine, Apache POI, and PDF reporting, the backend follows a modular monolith architecture with domain-focused modules for ticket operations, branch management, users, kiosks, bookings, CRM, alerts, reports, and digital displays. The React-based TS Queue Portal provides real-time branch dashboards and administration using React, Redux, MQTT, Axios, ApexCharts, Chart.js, and Konva, with live ticket and counter updates delivered through MQTT instead of polling.',
      backendItems: [
        { title: 'Java & Spring Boot Modular Monolith', desc: 'Domain-focused modules for ticket operations, branch management, users, kiosks, bookings, CRM, alerts, reports, and digital displays.' },
        { title: 'MQTT Event Streaming Engine', desc: 'Real-time ticket calls, counter states, and display updates delivered instantly over MQTT instead of polling.' },
        { title: 'Spring Security, JWT & LDAP / AD', desc: 'Enterprise authentication with Active Directory / LDAP single sign-on integration and role-based access control.' },
        { title: 'JobRunr & Caffeine Caching', desc: 'Asynchronous background job execution, automated recurring tasks, and high-performance in-memory caching.' },
        { title: 'Apache POI & PDF Reporting Engine', desc: 'Custom reporting engines for automated Excel and PDF analytics export.' }
      ],
      frontendItems: [
        { title: 'React & Redux TS Queue Portal', desc: 'Real-time administration, branch performance monitoring, and counter operations interface.' },
        { title: 'MQTT Web Client & Axios', desc: 'Event-driven live state synchronization for instantaneous ticket call and counter status updates.' },
        { title: 'ApexCharts, Chart.js & Konva', desc: 'Interactive real-time branch analytics, service-level metric charts, and floorplan layout canvas rendering.' }
      ],
      architecture: [
        'Modular Monolith Architecture — Domain-focused modules isolating tickets, branches, users, kiosks, CRM, alerts, and reports.',
        'Event-Driven MQTT Telemetry — Real-time push updates for ticket dispatching and counter monitoring without HTTP polling.',
        'Role-Based & LDAP/AD Security — Enterprise SSO with granular skill-based permissions and user controls.',
        'High-Throughput Analytics & Background Processing — Caffeine caching and JobRunr async workers.'
      ],
      infrastructure: [
        'Deployed across multi-branch enterprise environments for banks, telecom service centers, and government institutions.',
        'Nginx reverse proxy for static asset delivery and WebSockets / MQTT transport proxying.',
        'MySQL relational database with Liquibase schema management and query optimization.'
      ],
      security: [
        'Enterprise LDAP / Active Directory Integration for corporate Single Sign-On (SSO).',
        'JWT Stateless Authentication with granular role-based and skill-based authorization rules.'
      ]
    },
    product: {
      tagline: 'Enterprise-grade multi-branch Queue Management and Branch Experience Platform for Banks, Service Centers & Government.',
      whatIsIt: 'TS Queue is an enterprise-grade, multi-branch Queue Management and Branch Experience Platform used by banks, service centers, and government organizations to manage the complete customer journey — from ticket issuance and appointments to counter operations, kiosks, digital displays, notifications, feedback, CRM, and analytics. Built with Java, Spring Boot, Spring Data JPA/Hibernate, Spring Security, JWT, LDAP/Active Directory, MySQL, MQTT, JobRunr, Caffeine, Apache POI, and PDF reporting, the backend follows a modular monolith architecture with domain-focused modules for ticket operations, branch management, users, kiosks, bookings, CRM, alerts, reports, and digital displays. The React-based TS Queue Portal provides real-time branch dashboards and administration using React, Redux, MQTT, Axios, ApexCharts, Chart.js, and Konva, with live ticket and counter updates delivered through MQTT instead of polling.',
      myInvolvement: [
        'Owned and built the Branch Dashboard end-to-end, providing real-time ticket, counter, operator, service-level, and branch performance monitoring.',
        'Implemented AUX status tracking, FIFO/no-skill ticket handling, counter-category pinning, and operator service/idle-time monitoring.',
        'Designed and implemented branch cloning for categories, kiosks, counters, and SMS templates to simplify branch onboarding.',
        'Built agent attendance, performance, token-wise, customer, and queue reporting, including Excel/PDF exports.',
        'Developed user and skill management, including skill groups, user-skill controls, and skill prioritization for ticket routing.',
        'Delivered kiosk and main-display management, including ticket design validation and cloned kiosk configuration.',
        'Led the Branch Dashboard rework, integrating real-time service-level metrics, staff occupancy, average waiting/service times, and improved counter monitoring.',
        'Contributed extensively across backend and frontend modules including users, ticketing, branch operations, kiosks, reports, and real-time MQTT communication.'
      ],
      impact: 'Primary owner of the platform\'s real-time branch operations and dashboard experience, with 790 backend commits across the platform and 189 frontend commits, including 87 backend commits on the core real-time dashboard services and 69 frontend commits on the main Branch Dashboard over ~4 years.',
      whoUsesIt: [
        'Banks & Financial Institutions — manage high-volume customer branch traffic, teller counters, and service SLAs.',
        'Government Organizations — streamline citizen appointment scheduling and walk-in ticket operations.',
        'Service Centers & Telecom Stores — balance staff counter loads, track AUX idle time, and measure service performance.'
      ],
      features: [
        { title: 'Real-Time Branch Dashboard', desc: 'End-to-end live monitoring for tickets, counters, operators, service-level metrics, and staff occupancy.' },
        { title: 'Advanced Queue & Skill Routing', desc: 'AUX status tracking, FIFO/no-skill ticket handling, counter-category pinning, and skill-prioritized ticket routing.' },
        { title: 'Automated Branch Cloning & Onboarding', desc: 'One-click branch cloning for categories, kiosks, counters, and SMS templates to streamline multi-branch rollout.' },
        { title: 'Comprehensive Analytics & Excel/PDF Reporting', desc: 'Agent attendance, performance, token-wise, customer, and queue analytics with iText PDF & Apache POI Excel export.' },
        { title: 'Kiosk & Main Display Management', desc: 'Ticket design validation, cloned kiosk configuration, and MQTT-driven digital signage displays.' }
      ],
      whyUseful: 'Reduces waiting times, eliminates counter bottlenecks, automates multi-branch deployment, and empowers management with real-time operational visibility and SLA analytics.'
    }
  },
  {
    id: 'feedback-application',
    title: 'Feedback Application',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'Customer Experience & Quality Assurance Platform',
    tags: ['React', 'Spring Boot', 'Kafka', 'MySQL', 'Chart.js', 'Alert Engine'],
    description: 'Omnichannel customer sentiment & survey platform supporting kiosk rating screens, QR code surveys, Net Promoter Score (NPS) calculation, and instant manager alerts.',
    accessInfo: 'Commercial deployment protected by NDA. Detailed functional breakdown available below.',
    technical: {
      overview: 'High-concurrency feedback processing pipeline engineered to aggregate thousands of survey responses across physical kiosks and mobile endpoints in real time with threshold-driven escalation.',
      backendItems: [
        { title: 'Spring Boot & Java 17', desc: 'RESTful API engine handling high-throughput survey submissions and scoring calculations.' },
        { title: 'Apache Kafka Event Stream', desc: 'Decoupled event pipeline streaming low-rating events to real-time notification listeners.' },
        { title: 'Spring Data JPA & MySQL', desc: 'Optimized schema for multi-branch survey templates, question logic, and response logs.' },
        { title: 'Rule-Based Alert Engine', desc: 'Triggers instant email & SMS notifications to branch managers when negative feedback occurs.' }
      ],
      frontendItems: [
        { title: 'React & Touch Kiosk Mode', desc: 'Ultra-responsive 4-button smiley rating interface optimized for high-traffic physical kiosks.' },
        { title: 'Dynamic Form Builder', desc: 'Drag-and-drop survey wizard supporting CSAT, NPS, CES, and custom open-ended questions.' },
        { title: 'Analytics & Sentiment Dashboard', desc: 'Real-time charts, branch comparison matrix, and automated sentiment word clouds.' }
      ],
      architecture: [
        'Microservice ingestion architecture designed for zero-latency response recording.',
        'Kafka topic architecture isolating feedback ingest, aggregation, and notification streams.',
        'Asynchronous alert pipeline delivering multi-channel manager alerts within 3 seconds of negative feedback.'
      ],
      infrastructure: [
        'Deployed on Red Hat Enterprise Linux (RHEL) with Tomcat application server.',
        'Nginx load balancer distributing kiosk API traffic.',
        'Automated nightly analytical aggregation jobs computing daily CSAT and NPS metrics per location.'
      ],
      security: [
        'Kiosk lock-down mode preventing unauthorized browser access.',
        'Rate-limiting & IP throttling to prevent spam submissions on public QR surveys.',
        'Encrypted data transmission over TLS 1.3 with full GDPR-compliant data anonymization.'
      ]
    },
    product: {
      tagline: 'Capture customer feedback at the point of experience and turn insights into instant action.',
      whatIsIt: 'An enterprise customer feedback application that collects real-time ratings via physical touch kiosks, QR codes, and web links. It converts raw responses into actionable Net Promoter Scores (NPS), Customer Satisfaction (CSAT) scores, and instant manager alerts.',
      whoUsesIt: [
        'Quality Managers & CX Officers — design surveys, set feedback targets, and analyze trends.',
        'Branch / Store Managers — receive instant notifications of unsatisfied customers to resolve issues immediately.',
        'Customers — quickly express their satisfaction in seconds via intuitive smiley faces or mobile forms.'
      ],
      features: [
        { title: 'Instant Kiosk Smiley & Star Ratings', desc: 'Simplified 5-second survey interfaces ensuring maximum customer response completion rates.' },
        { title: 'Dynamic QR Code Surveys', desc: 'Generate unique QR codes for receipts, tables, or invoices for instant mobile feedback.' },
        { title: 'Real-time Incident Alerting', desc: 'Instantly escalates poor scores to area managers via SMS or email for immediate recovery.' },
        { title: 'Branch Comparison & Benchmarking', desc: 'Compare CSAT and NPS scores across multiple store locations or service departments.' },
        { title: 'AI-assisted Sentiment Categorization', desc: 'Groups open-ended text feedback into key themes like Cleanliness, Staff Courtesy, or Speed.' }
      ],
      whyUseful: 'Enables management to catch negative customer experiences before they hit social media and provides quantifiable metrics to continuously improve service quality.'
    }
  },
  {
    id: 'appointment-booking',
    title: 'Appointment Booking Platform',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'Enterprise Service & Healthcare Booking Solution',
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Stripe API', 'iCal'],
    description: 'Multi-branch appointment scheduling platform featuring intelligent slot availability logic, staff roster integration, automated deposit payments, and calendar syncing.',
    accessInfo: 'Commercial deployment protected by NDA. Technical overview detailed below.',
    technical: {
      overview: 'High-reliability appointment platform built with strict concurrency controls to eliminate double bookings across complex multi-staff and multi-resource schedules.',
      backendItems: [
        { title: 'Spring Boot REST Framework', desc: 'Core service engine managing complex resource constraints, buffer times, and recurring slots.' },
        { title: 'Redis Distributed Locking', desc: 'Concurrency-safe slot reservation lock preventing concurrent bookings during payment checkouts.' },
        { title: 'Spring Data JPA & PostgreSQL', desc: 'Spatial and temporal index optimization for fast schedule availability queries.' },
        { title: 'Stripe & Payment Gateway SDKs', desc: 'Integrated payment processing supporting full pre-payment, deposits, and automated refunds.' }
      ],
      frontendItems: [
        { title: 'React & FullCalendar Integration', desc: 'Interactive drag-and-drop calendar view for staff and intuitive slot picker for clients.' },
        { title: 'Responsive Booking Widget', desc: 'Embeddable white-label booking widget customizable for external client websites.' },
        { title: 'Customer Self-Service Portal', desc: 'Allows clients to view, reschedule, or cancel bookings within business policy constraints.' }
      ],
      architecture: [
        'Slot calculation engine dynamically evaluating staff shift, room availability, and equipment lockouts.',
        'Transactional lock strategy guaranteeing atomic slot reservations during checkout window.',
        'Webhooks integration for real-time Stripe payment status updates and instant calendar sync.'
      ],
      infrastructure: [
        'Dockerized container deployment managed via Kubernetes cluster.',
        'PostgreSQL database with read-replicas for fast slot lookup queries.',
        'Prometheus alerts for payment gateway latency and slot lock timeouts.'
      ],
      security: [
        'OAuth2 & JWT authentication for customer and admin access.',
        'PCI-DSS compliant payment processing via direct tokenization.',
        'AES-256 encrypted customer PII and appointment medical/service notes storage.'
      ]
    },
    product: {
      tagline: 'Seamless 24/7 online booking with automated payments, roster syncing, and zero double-bookings.',
      whatIsIt: 'An enterprise scheduling solution built for multi-location service businesses, medical clinics, and wellness centers. It automates client scheduling, staff assignments, deposit collection, and appointment reminders.',
      whoUsesIt: [
        'Business Owners & Receptionists — manage master schedules, assign staff rosters, and track revenues.',
        'Staff / Service Providers — view personal daily calendars and set custom availability.',
        'Clients — book appointments anytime from mobile or desktop with instant confirmation.'
      ],
      features: [
        { title: 'Smart Time-Slot Availability Engine', desc: 'Calculates open slots in real time based on staff working hours, breaks, and equipment constraints.' },
        { title: 'Automated Deposits & Payment Hold', desc: 'Requires upfront payment or deposit to lock in appointments, drastically reducing no-shows.' },
        { title: 'Automated SMS & Email Reminders', desc: 'Sends timed reminders 24h/2h prior to appointments with 1-click confirmation links.' },
        { title: 'Multi-Branch & Staff Roster Management', desc: 'Handles multi-location operations with distinct pricing, staff permissions, and timezones.' },
        { title: 'Two-Way Google & Outlook Calendar Sync', desc: 'Syncs booked appointments directly to personal or company calendars in real time.' }
      ],
      whyUseful: 'Eliminates phone-based booking friction, operates 24/7, reduces no-shows by up to 60% through pre-payments, and keeps daily operations organized.'
    }
  },
  {
    id: 'people-counting-solution',
    title: 'People Counting Solution',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'Smart Facility & Commercial Retail Analytics Platform',
    tags: ['Python', 'OpenCV', 'YOLO', 'MQTT', 'Spring Boot', 'React', 'TimescaleDB'],
    description: 'Computer-vision & IoT powered occupancy monitoring solution providing real-time footfall counting, directional traffic analysis, capacity alerts, and retail heatmaps.',
    accessInfo: 'Commercial deployment protected by NDA. Technical overview detailed below.',
    technical: {
      overview: 'Edge-to-cloud IoT computer vision architecture processing high-speed camera streams at the edge, transmitting structured count events over MQTT to a centralized analytics dashboard.',
      backendItems: [
        { title: 'Python & YOLO / OpenCV Edge AI', desc: 'Lightweight deep learning object detection & deepSORT tracking models running on edge gateways.' },
        { title: 'MQTT Broker (Mosquitto / EMQX)', desc: 'Lightweight pub/sub messaging transport for sub-second IoT count telemetry.' },
        { title: 'Spring Boot Telemetry Server', desc: 'Event consumer processing stream data, aggregate footfall counts, and threshold rules.' },
        { title: 'TimescaleDB / PostgreSQL', desc: 'Time-series database optimized for high-volume ingress of sensor count data and fast range queries.' }
      ],
      frontendItems: [
        { title: 'React & Canvas Heatmap Rendering', desc: 'Real-time floorplan visualization with traffic density heatmaps and direction arrows.' },
        { title: 'Live Occupancy Gauge & Screen Display', desc: 'High-visibility digital entrance screens displaying live "Enter / Wait" status.' },
        { title: 'Analytics & Trends Dashboard', desc: 'Historical comparisons of hourly footfall, conversion rates, and peak building load times.' }
      ],
      architecture: [
        'Edge AI computer vision execution minimizing network bandwidth consumption.',
        'Decoupled IoT telemetry bus ensuring system resiliency during intermittent cloud connectivity.',
        'Real-time rule engine evaluating maximum capacity thresholds and pushing instantly to entrance displays.'
      ],
      infrastructure: [
        'Edge hardware gateway nodes (NVIDIA Jetson / Industrial IPCs) paired with RTSP IP Cameras.',
        'Central Cloud/On-Prem backend deployed with Docker Compose & Kubernetes.',
        'InfluxDB / TimescaleDB for long-term time-series analytics storage.'
      ],
      security: [
        '100% Privacy Compliant (No PII / No Face Recording) — only vector bounding boxes & numerical counts stored.',
        'Encrypted MQTTS (TLS) transport between edge sensors and central server.',
        'Role-based access control protecting facility metrics and store traffic reports.'
      ]
    },
    product: {
      tagline: 'Real-time physical space intelligence. Track occupancy, optimize space, and enforce capacity limits.',
      whatIsIt: 'An AI-driven computer vision people counting and facility occupancy system. Using overhead optical sensors or IP cameras, it accurately measures footfall in/out counts, dwell times, and room density without compromising individual privacy.',
      whoUsesIt: [
        'Facility Managers — monitor live building occupancy, ensure compliance with safety limits, and manage HVAC load.',
        'Retail Store Operations — track footfall traffic against sales data to calculate store conversion rates.',
        'Security Officers — receive real-time alerts when maximum capacity thresholds are exceeded.'
      ],
      features: [
        { title: 'Directional In/Out Footfall Counting', desc: 'High-accuracy (>98%) overhead tracking counting bidirectional movement across virtual doorways.' },
        { title: 'Live Entrance Digital Display', desc: 'Automated digital signage for store entrances indicating current occupancy and entrance status.' },
        { title: 'Floorplan Density Heatmaps', desc: 'Visualizes high-traffic zones and popular store aisles to optimize layout and product placement.' },
        { title: 'Automated Over-Capacity Alerts', desc: 'Triggers visual & audible alarms when building or room capacity exceeds set thresholds.' },
        { title: 'Peak Hours & Traffic Analytics', desc: 'Detailed hourly, daily, and seasonal traffic reports to optimize staff scheduling.' }
      ],
      whyUseful: 'Provides precise physical intelligence for retail and venue operators, automates capacity compliance, and improves energy and staffing efficiency.'
    }
  },
  {
    id: 'gateway-provider',
    title: 'service-gateway (provider)',
    category: 'personal',
    status: 'Active',
    thumbnail: '/service-gateway-provider.png',
    link: 'https://vihangagunathilake.com/service-gateway',
    tags: ['Spring Boot', 'React', 'MySQL', 'Kafka'],
    description: 'Book a service. Watch it run itself.',
    longDescription: ''
  },
  {
    id: 'gateway-seeker',
    title: 'service-gateway (seeker)',
    category: 'personal',
    status: 'Coming Soon',
    thumbnail: '/logo.svg',
    tags: ['Spring Boot', 'React', 'MySQL'],
    description: 'Client-side service-gateway seeker module supporting client discovery, tracing, and secure microservice integration.',
    longDescription: ''
  }
];

const getProjectIdFromUrl = () => {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname;
  const pathMatch = path.match(/^\/(?:projects|project)\/([^\/]+)/i);
  if (pathMatch && pathMatch[1]) {
    return pathMatch[1];
  }
  const hash = window.location.hash;
  const hashMatch = hash.match(/^#\/?(?:projects|project)\/([^\/]+)/i);
  if (hashMatch && hashMatch[1]) {
    return hashMatch[1];
  }
  return null;
};

function App() {
  const [selectedProject, setSelectedProject] = useState(() => {
    const initialId = getProjectIdFromUrl();
    if (initialId) {
      return PROJECTS_DATA.find((p) => p.id === initialId) || null;
    }
    return null;
  });
  const [isLoadingProject, setIsLoadingProject] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const commercialProjects = PROJECTS_DATA.filter((p) => p.category === 'commercial');
  const personalProjects = PROJECTS_DATA.filter((p) => p.category === 'personal');

  const handleProjectClick = (project, isComingSoon = false) => {
    if (isComingSoon) {
      setShowToast(true);
    } else {
      setIsLoadingProject(true);
      setTimeout(() => {
        setSelectedProject(project);
        setIsLoadingProject(false);
        if (project && project.id) {
          window.history.pushState({ projectId: project.id }, '', `/projects/${project.id}`);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const currentId = getProjectIdFromUrl();
      if (currentId) {
        const found = PROJECTS_DATA.find((p) => p.id === currentId);
        setSelectedProject(found || null);
      } else {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="App">
      {isLoadingProject && (
        <div className="loader-overlay">
          <div className="loader-spinner"></div>
          <div className="loader-text">Configuring Gateway Environment...</div>
        </div>
      )}

      <Header
        onNavigate={(view) => {
          if (view === 'home') handleBackToHome();
        }}
        currentView={selectedProject ? 'project' : 'home'}
      />

      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={handleBackToHome}
        />
      ) : (
        <>
          <Hero />

          <section className="section container" id="projects" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div className="section-header">
              <p className="hero-subtitle" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Portfolio</p>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc">Explore enterprise systems and gateways built with scalable architectures.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  Commercial Projects
                </h3>
                {commercialProjects.length > 0 ? (
                  <div className="projects-list">
                    {commercialProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={handleProjectClick}
                      />
                    ))}
                  </div>
                ) : (
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px dashed rgba(6, 182, 212, 0.2)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
                      Company and client projects are protected by Non-Disclosure Agreements (NDAs). Case studies and references can be discussed in detail upon request.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-heading)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Personal Projects
                </h3>
                {personalProjects.length > 0 ? (
                  <div className="projects-list">
                    {personalProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={handleProjectClick}
                      />
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No personal projects found.</p>
                )}
              </div>
            </div>
          </section>

          <About />

          <Skills />
        </>
      )}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: '6rem', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Vihanga Gunathilake. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/vihanga951016" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/yasintha-gunathilake/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Toast alert for Coming Soon items */}
      {showToast && (
        <div className="toast">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>This project is coming soon and cannot be viewed yet!</span>
        </div>
      )}
    </div>
  );
}

export default App;
