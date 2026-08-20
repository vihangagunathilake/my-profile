import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EngineeringSummary from './components/EngineeringSummary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';

const PROJECTS_DATA = [
  {
    id: 'queue-management-system',
    title: 'Enterprise Queue Management Platform',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    link: 'https://tstpl.com/queue-management-solution/',
    subtitle: 'Full-Stack Software Engineer / Backend Architect',
    tags: [
      'Modular Architecture',
      'Real-Time MQTT',
      'Queue Routing Engine',
      'Async Processing',
      'Enterprise Security',
      'Analytics & Reporting',
      'React Dashboard',
      'CI/CD'
    ],
    details: {
      subtitle: 'Full-Stack Software Engineer / Backend Architect',
      description: [
        'TS Queue is a multi-branch enterprise queue management platform that manages ticketing, queue routing, agent/service-point operations, notifications, feedback, analytics, and reporting.'
      ],
      keyHighlights: [
        'Modular Architecture',
        'Real-Time MQTT',
        'Queue Routing Engine',
        'Async Processing',
        'Enterprise Security',
        'Analytics & Reporting',
        'React Dashboard',
        'CI/CD'
      ],
      highlights: [
        'Designed and developed the **modular Spring Boot backend** with domain-focused Maven modules.',
        'Built the **core queue routing engine** supporting FIFO, agent-based, and skill-based assignment.',
        'Designed the **real-time MQTT communication layer** for operators, kiosks, displays, and dashboards.',
        'Implemented **asynchronous background processing** using JobRunr for queue operations and messaging.',
        'Developed **JWT authentication, role/permission authorization, and Active Directory/LDAP integration**.',
        'Built **AOP-based audit logging** for enterprise operation tracking.',
        'Developed **SMS and in-app notification systems** with event-driven workflows.',
        'Implemented **reporting and analytics**, including complex SQL views, materialized views, and Excel/PDF exports.',
        'Contributed to the **React management portal**, including real-time dashboards, analytics, reporting, and administration modules.',
        'Implemented **CI/CD deployment automation** using Bitbucket Pipelines and Apache Tomcat.'
      ],
      technology: [
        'Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Spring AOP', 'JWT', 'LDAP/Active Directory',
        'React 18', 'Redux', 'Axios', 'Material UI', 'ApexCharts', 'Konva',
        'MySQL', 'SQL Views', 'MQTT', 'Eclipse Paho', 'JobRunr',
        'Maven', 'Docker', 'Apache Tomcat', 'Bitbucket Pipelines'
      ]
    },
    description: 'TS Queue is a multi-branch enterprise queue management platform that manages ticketing, queue routing, agent/service-point operations, notifications, feedback, analytics, and reporting.',
    accessInfo: 'Commercial platform deployment protected by NDA. Complete technical stack & personal involvement detailed below.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java' },
        { area: 'Framework', technology: 'Spring Boot (Modular Maven project), Spring AOP' },
        { area: 'ORM / Persistence', technology: 'JPA / Hibernate, MySQL, SQL Views' },
        { area: 'Security', technology: 'Spring Security, JWT, LDAP / Active Directory' },
        { area: 'Real-time Messaging', technology: 'MQTT (Eclipse Paho)' },
        { area: 'Background Jobs', technology: 'JobRunr' },
        { area: 'Build and Deploy', technology: 'Maven, Docker, Apache Tomcat, Bitbucket Pipelines' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React 18' },
        { area: 'State Management', technology: 'Redux' },
        { area: 'UI Library', technology: 'Material UI' },
        { area: 'Charts', technology: 'ApexCharts' },
        { area: 'Real-time', technology: 'MQTT (Eclipse Paho)' },
        { area: 'Canvas / Design', technology: 'Konva' },
        { area: 'HTTP Client', technology: 'Axios' }
      ]
    },
    involvementSection: {
      backend: [
        {
          topic: 'Spring Boot — Modular Monolith',
          points: [
            'Built and maintained services across domain-focused Maven modules.',
            'Applied modular monolith architecture to isolate business logic.'
          ]
        },
        {
          topic: 'Queue Routing Engine',
          points: [
            'Designed and built the core assignment engine supporting FIFO, agent-based, and skill-based assignment.'
          ]
        },
        {
          topic: 'MQTT Event Streaming',
          points: [
            'Built the real-time MQTT communication layer for operators, kiosks, displays, and dashboards.'
          ]
        },
        {
          topic: 'Enterprise Security',
          points: [
            'Integrated Active Directory/LDAP single sign-on with Spring Security and JWT token authorization.'
          ]
        }
      ],
      frontend: [
        {
          topic: 'React Dashboard & Management Portal',
          points: [
            'Contributed to real-time dashboards, analytical reporting, and admin modules using React 18, Redux, and Axios.'
          ]
        }
      ]
    },
    technical: {
      overview: 'TS Queue is a multi-branch enterprise queue management platform that manages ticketing, queue routing, agent/service-point operations, notifications, feedback, analytics, and reporting.',
      backendItems: [
        { title: 'Spring Boot Modular Monolith', desc: 'Domain-focused Maven modules isolating business domains.' },
        { title: 'Queue Routing Engine', desc: 'Core routing algorithm for FIFO and skill-prioritized assignments.' },
        { title: 'Real-Time MQTT Streaming', desc: 'Instantaneous telemetry and token call updates.' }
      ],
      frontendItems: [
        { title: 'React 18 Portal', desc: 'Real-time operator dashboards and admin screens.' }
      ]
    },
    product: {
      tagline: 'Enterprise-grade multi-branch Queue Management and Branch Experience Platform.',
      whatIsIt: 'TS Queue is a multi-branch enterprise queue management platform that manages ticketing, queue routing, agent/service-point operations, notifications, feedback, analytics, and reporting.'
    }
  },
  {
    id: 'feedback-application',
    title: 'Feedback Solution — Customer Feedback & Analytics Platform',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'Full-Stack Software Engineer',
    tags: [
      'Customer Feedback',
      'Satisfaction Analytics',
      'Staff Performance Scoring',
      'Real-Time Dashboards',
      'MQTT Messaging',
      'Automated Alerting',
      'Reporting & Excel Export'
    ],
    details: {
      subtitle: 'Full-Stack Software Engineer',
      description: [
        'A customer feedback and satisfaction analytics platform integrated with service operations to collect post-service feedback through kiosk touchpoints. The platform transforms customer responses into **service-quality insights, staff performance metrics, real-time dashboards, and automated alerts**.'
      ],
      keyHighlights: [
        'Customer Feedback',
        'Satisfaction Analytics',
        'Staff Performance Scoring',
        'Real-Time Dashboards',
        'MQTT Messaging',
        'Automated Alerting',
        'Reporting & Excel Export'
      ],
      highlights: [
        'Developed the **feedback survey engine** for managing feedback sessions, emoji ratings, questions, and nested survey flows.',
        'Implemented **feedback-to-service correlation**, linking customer responses with tickets, service sessions, branches, and serving agents.',
        'Built the **staff performance analytics engine**, combining customer satisfaction, response rates, and operational metrics.',
        'Developed **real-time React dashboards** with MQTT for live feedback events, KPIs, and supervisor alerts.',
        'Created **feedback analytics and visualizations** for satisfaction trends and sentiment distribution using ApexCharts.',
        'Implemented **reporting and Excel exports** with server-side pagination and multi-parameter filtering.',
        'Integrated **automated SMS and email alerts** for critical or negative customer feedback.',
        'Developed **branch and kiosk configuration interfaces** for managing feedback surveys across physical touchpoints.'
      ],
      technology: [
        'Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Spring Data JPA',
        'React', 'Redux', 'Axios', 'Material UI', 'ApexCharts',
        'MySQL', 'JPQL', 'Native SQL', 'Apache POI',
        'MQTT', 'ActiveMQ', 'SMS Gateway', 'JavaMail'
      ]
    },
    description: 'A customer feedback and satisfaction analytics platform integrated with service operations to collect post-service feedback through kiosk touchpoints. The platform transforms customer responses into service-quality insights, staff performance metrics, real-time dashboards, and automated alerts.',
    accessInfo: 'Commercial platform deployment protected by NDA. Complete technical stack & personal involvement detailed below.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java' },
        { area: 'Framework', technology: 'Spring Boot, Spring Security' },
        { area: 'ORM / Persistence', technology: 'Hibernate, Spring Data JPA, MySQL, JPQL, Native SQL' },
        { area: 'Reporting', technology: 'Apache POI' },
        { area: 'Integration', technology: 'MQTT (ActiveMQ), SMS Gateway, JavaMail' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React' },
        { area: 'State Management', technology: 'Redux' },
        { area: 'UI Library', technology: 'Material UI' },
        { area: 'Charts', technology: 'ApexCharts' },
        { area: 'HTTP Client', technology: 'Axios' }
      ]
    },
    involvementSection: {
      backend: [
        {
          topic: 'Feedback Survey Engine',
          points: [
            'Developed backend survey logic for sessions, emoji ratings, question definitions, and nested flows.',
            'Linked feedback directly to queue ticket sessions to associate responses with branches and serving agents.'
          ]
        },
        {
          topic: 'Alerts & Reporting Pipelines',
          points: [
            'Integrated SMS and email alerting gateways triggered immediately on negative customer ratings.',
            'Built custom report generation APIs with Excel downloads using Apache POI.'
          ]
        }
      ],
      frontend: [
        {
          topic: 'Operator Dashboards & Analytics',
          points: [
            'Built the satisfaction analytics dashboards featuring ApexCharts trend plots and MQTT live updates.',
            'Implemented server-side paginated tables with advanced multi-parameter report filters.'
          ]
        }
      ]
    },
    technical: {
      overview: 'Customer feedback and satisfaction analytics platform integrated with counter operations.',
      backendItems: [
        { title: 'Feedback Survey Engine', desc: 'Custom survey flows, emoji rating configurations, and nested questions.' },
        { title: 'Integration Pipelines', desc: 'Real-time MQTT events, SMS Alerting gateways, and Apache POI reporting.' }
      ],
      frontendItems: [
        { title: 'Feedback Management Portal', desc: 'Real-time satisfaction level monitoring and physical touchpoint kiosk configuration.' }
      ]
    },
    product: {
      tagline: 'Transform customer feedback into real-time operational alerts and service-quality insights.',
      whatIsIt: 'A customer feedback and satisfaction analytics platform integrated with service operations to collect post-service feedback through kiosk touchpoints.'
    }
  },
  {
    id: 'people-counting-solution',
    title: 'People Counting Solution — Footfall Analytics Platform',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    link: 'https://tstpl.com/people-counting-system/',
    subtitle: 'Full-Stack Software Engineer',
    tags: [
      'Real-Time People Counting',
      'Footfall Analytics',
      'Gender & Age Analytics',
      'Camera Integration',
      'Multi-Level Regional Analytics',
      'Real-Time Dashboards',
      'SQL Time-Series Analytics',
      'Automated Data Archival',
      'Reporting & Excel Export'
    ],
    details: {
      subtitle: 'Full-Stack Software Engineer',
      description: [
        'A real-time people counting and footfall analytics platform for multi-branch retail and enterprise environments. The system collects visitor data from IP cameras and provides branch, zone, and regional insights across **footfall, gender, age demographics, visitor flow, and dwell time**.'
      ],
      keyHighlights: [
        'Real-Time People Counting',
        'Footfall Analytics',
        'Gender & Age Analytics',
        'Camera Integration',
        'Multi-Level Regional Analytics',
        'Real-Time Dashboards',
        'SQL Time-Series Analytics',
        'Automated Data Archival',
        'Reporting & Excel Export'
      ],
      highlights: [
        'Designed the **IP camera data ingestion pipeline** for real-time entry/exit and demographic events, including visitor deduplication and employee exclusion using facial-embedding similarity.',
        'Developed **branch, zone, and region-level analytics APIs** for visitor counts, gender/age demographics, dwell time, peak hours, and visitor trends.',
        'Built the **analytics engine** with date/month comparisons, hourly visitor flow, demographic analysis, and multi-branch filtering.',
        'Implemented complex **MySQL analytics queries and recursive CTEs** for half-hourly visitor, gender, and age-group time-series data.',
        'Developed a **scheduled data archival pipeline** to move live footfall data into historical analytics tables while maintaining dashboard performance.',
        'Built **footfall reporting APIs** with branch, device, zone, age/gender, and sales-correlated reports with Excel export.',
        'Developed **real-time React dashboards and analytics visualizations** using ApexCharts and MQTT-driven updates.',
        'Implemented multi-level **regional dashboards and filtering** across country, province, district, branch, and zone hierarchies.'
      ],
      technology: [
        'Java 11', 'Spring Boot', 'Spring Data JPA', 'JobRunr',
        'React', 'Axios', 'ApexCharts', 'Paho MQTT',
        'MySQL', 'Native SQL', 'Recursive CTEs', 'JPA Projections', 'Materialized Views',
        'IP Cameras', 'HTTP Event Ingestion', 'Facial Embedding Matching', 'MQTT'
      ]
    },
    description: 'A real-time people counting and footfall analytics platform for multi-branch retail and enterprise environments. The system collects visitor data from IP cameras and provides branch, zone, and regional insights across footfall, gender, age demographics, visitor flow, and dwell time.',
    accessInfo: 'Commercial platform deployment protected by NDA. Complete technical stack & personal involvement detailed below.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java 11' },
        { area: 'Framework', technology: 'Spring Boot' },
        { area: 'ORM / Persistence', technology: 'Spring Data JPA, MySQL, Native SQL, Recursive CTEs, Materialized Views' },
        { area: 'Background Jobs', technology: 'JobRunr' },
        { area: 'Integration', technology: 'IP Cameras, HTTP Event Ingestion, Facial Embedding Matching, MQTT' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React' },
        { area: 'HTTP Client', technology: 'Axios' },
        { area: 'Charts', technology: 'ApexCharts' },
        { area: 'Real-time', technology: 'Paho MQTT' }
      ]
    },
    involvementSection: {
      backend: [
        {
          topic: 'IP Camera Integration & Ingestion Ingestion Pipeline',
          points: [
            'Designed the IP camera data ingestion pipeline for real-time entry/exit and demographic events.',
            'Implemented visitor deduplication and employee exclusion using facial-embedding similarity.'
          ]
        },
        {
          topic: 'Database Analytics & Query Optimization',
          points: [
            'Implemented complex MySQL analytics queries and recursive CTEs for half-hourly visitor, gender, and age-group time-series data.',
            'Developed a scheduled data archival pipeline to move live footfall data into historical analytics tables.'
          ]
        }
      ],
      frontend: [
        {
          topic: 'Real-time React Dashboards',
          points: [
            'Developed real-time dashboards and analytics visualizations using React, ApexCharts, and MQTT-driven updates.',
            'Implemented multi-level regional dashboards and filtering across country, province, district, branch, and zone hierarchies.'
          ]
        }
      ]
    },
    technical: {
      overview: 'A real-time people counting and footfall analytics platform for multi-branch retail and enterprise environments.',
      backendItems: [
        { title: 'Data Ingestion Pipeline', desc: 'Real-time entry/exit and demographic event stream ingestion from IP cameras.' },
        { title: 'Time-Series SQL Analytics', desc: 'Complex MySQL analytics queries, recursive CTEs, and automated data archival.' }
      ],
      frontendItems: [
        { title: 'React Footfall Portal', desc: 'Real-time regional dashboards and time-series footfall trends visualization.' }
      ]
    },
    product: {
      tagline: 'Real-time people counting and footfall analytics platform for retail and enterprise environments.',
      whatIsIt: 'A real-time people counting and footfall analytics platform for multi-branch retail and enterprise environments.'
    }
  },
  {
    id: 'gateway-provider',
    title: 'Service Gateway — Service Booking & Scheduling Platform',
    category: 'personal',
    status: 'Active',
    thumbnail: '/service-gateway-provider.png',
    link: 'https://vihangagunathilake.com/service-gateway',
    demoCredentials: {
      note: 'Use the following credentials to explore the platform:',
      email: 'testadminservicegateway@gmail.com',
      password: 'admin',
    },
    subtitle: 'Designer & Developer',
    tags: [
      'Custom Scheduling Algorithm',
      'Java / Spring Boot',
      'React',
      'STOMP / WebSocket',
      'Two-Phase Reservations',
      'PWA'
    ],
    details: {
      subtitle: 'Designer & Developer',
      description: [
        'Service Gateway is a multi-tenant appointment platform for service businesses with multiple locations, service points, and staff. It enables customers to book single or bundled services while automatically allocating available service points and time slots without double-booking or wasting capacity.'
      ],
      keyHighlights: [
        'Custom Scheduling Algorithm',
        'Service-Point Allocation',
        'Multi-Service Booking',
        'Two-Phase Reservations',
        'Real-Time Communication',
        'Role-Based Security',
        'React Booking Platform'
      ],
      highlightsTitle: 'What I Built',
      highlights: [
        'Designed a custom **greedy scheduling algorithm** that allocates multi-service bookings across available service points while minimizing conflicts and preserving capacity for remaining services.',
        'Built a **two-phase booking workflow** using provisional reservations and final confirmation, with automated expiration of abandoned and no-show bookings.',
        'Implemented **multi-service and bundled bookings**, prioritizing a single service point where possible and intelligently splitting services across multiple points when required.',
        'Developed the **booking-to-job workflow**, including check-in, job status management, rescheduling, transfers, completion, cancellation, and job-level audit tracking.',
        'Built **real-time communication** using Spring Events and STOMP/WebSocket for live job, check-in, and staffing updates.',
        'Implemented **JWT authentication** and permission-based authorization across a modular Spring Boot backend.',
        'Developed optimized **native SQL and JPQL queries** for service availability, booking conflicts, service-point allocation, and scheduled reservation cleanup.',
        'Developed the **React booking and management platform**, including schedule visualization, live dashboards, service-point management, and PWA support.'
      ],
      technology: [
        'Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate/JPA',
        'React', 'MUI', 'Ant Design', 'Axios',
        'MySQL', 'Native SQL', 'JPQL', 'STOMP/WebSocket', 'SockJS',
        'PWA', 'Service Worker'
      ],
      architectureImage: '/images/sg_archi.png',
      architectureImage2: '/images/sg_archi2.png'
    },
    description: 'Service Gateway is a multi-tenant appointment platform for service businesses with multiple locations, service points, and staff. It enables customers to book single or bundled services while automatically allocating available service points and time slots without double-booking or wasting capacity.',
    accessInfo: 'Full-stack service platform featuring a custom greedy scheduling algorithm and real-time STOMP/WebSocket updates.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java' },
        { area: 'Framework', technology: 'Spring Boot' },
        { area: 'Security', technology: 'Spring Security, JWT' },
        { area: 'ORM / Persistence', technology: 'Hibernate/JPA, MySQL, Native SQL, JPQL' },
        { area: 'Real-time Messaging', technology: 'STOMP/WebSocket, Spring Events' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React' },
        { area: 'UI Libraries', technology: 'MUI, Ant Design' },
        { area: 'HTTP Client', technology: 'Axios' },
        { area: 'Real-time Client', technology: 'STOMP/WebSocket, SockJS' },
        { area: 'Mobile Support', technology: 'PWA, Service Worker' }
      ]
    },
    involvementSection: {
      title: 'Implementation & Contributions',
      backend: [
        {
          topic: 'Custom Greedy Scheduling Algorithm',
          points: [
            'Designed an optimization algorithm that allocates multi-service bookings across available service points while minimizing conflicts and preserving capacity.'
          ]
        },
        {
          topic: 'Two-Phase Reservations & Job Workflow',
          points: [
            'Built a two-phase booking workflow with provisional reservations, final confirmations, and automated cleanup.',
            'Developed check-in, status management, transfers, rescheduling, and job-level audit tracking.'
          ]
        },
        {
          topic: 'Real-Time Communication & Security',
          points: [
            'Built WebSocket push telemetry using Spring Events and STOMP for live updates.',
            'Implemented JWT-based authentication and permission-based authorization across domain modules.'
          ]
        }
      ],
      frontend: [
        {
          topic: 'React Booking & Management Platform',
          points: [
            'Built UI for schedule visualization, live dashboards, service-point management, and PWA offline support.'
          ]
        }
      ]
    },
    technical: {
      overview: 'Service Booking & Scheduling Platform for multi-tenant appointment operations.',
      backendItems: [
        { title: 'Custom Greedy Scheduler', desc: 'Allocates multi-service bookings while avoiding overlaps.' },
        { title: 'Two-Phase Booking', desc: 'Handles provisional holds and automated expiration of no-shows.' },
        { title: 'STOMP/WebSocket Push', desc: 'Real-time state and dashboard updates powered by Spring Events.' }
      ],
      frontendItems: [
        { title: 'React Management App', desc: 'Visual schedule boards, operator dashboards, and PWA installation.' }
      ]
    },
    product: {
      tagline: 'Service Booking & Scheduling Platform',
      impact: 'Sole Designer & Developer — Custom scheduling algorithm, two-phase reservation system, and real-time dashboard.'
    }
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
  const pathMatch = path.match(/^\/(?:projects|project)\/([^/]+)/i);
  if (pathMatch && pathMatch[1]) {
    return pathMatch[1];
  }
  const hash = window.location.hash;
  const hashMatch = hash.match(/^#\/?(?:projects|project)\/([^/]+)/i);
  if (hashMatch && hashMatch[1]) {
    return hashMatch[1];
  }
  return null;
};

function App() {
  // Theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // Project routing
  const [selectedProject, setSelectedProject] = useState(() => {
    const initialId = getProjectIdFromUrl();
    if (initialId) {
      return PROJECTS_DATA.find((p) => p.id === initialId) || null;
    }
    return null;
  });
  const [isLoadingProject, setIsLoadingProject] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const featuredProjects = PROJECTS_DATA.filter(
    (p) => ['queue-management-system', 'people-counting-solution', 'gateway-provider'].includes(p.id)
  );
  const allProjects = PROJECTS_DATA;

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
      }, 400);
    }
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
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
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="App">
      {isLoadingProject && (
        <div className="loader-overlay">
          <div className="loader-spinner" />
          <div className="loader-text">Loading project...</div>
        </div>
      )}

      <Header
        onNavigate={(view) => { if (view === 'home') handleBackToHome(); }}
        currentView={selectedProject ? 'project' : 'home'}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {selectedProject ? (
        <ProjectDetails project={selectedProject} onBack={handleBackToHome} />
      ) : (
        <>
          {/* 1. HERO */}
          <Hero />

          {/* 2. ENGINEERING SUMMARY */}
          <EngineeringSummary />

          {/* 3. FEATURED PROJECTS */}
          <section className="projects-section container" id="projects">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">Enterprise systems and platforms built with scalable architectures.</p>

            {/* All projects — single unified grid */}
            <div className="projects-3col">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
              ))}
            </div>
          </section>

          {/* 4. EXPERIENCE */}
          <Experience />

          {/* 5. TECHNICAL EXPERTISE */}
          <Skills />

          {/* 6. ENGINEERING JOURNEY */}
          <Timeline />

          {/* 8. EDUCATION */}
          <Education />

          {/* 9. CONTACT */}
          <Contact />
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-copy">© {new Date().getFullYear()} Vihanga Gunathilake. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/vihanga951016" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/vihanga-gunathilake/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="mailto:hmyvihangagunathilake@gmail.com" className="footer-link">Email</a>
          </div>
        </div>
      </footer>

      {/* Toast */}
      {showToast && (
        <div className="toast">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-light)" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>This project is coming soon!</span>
        </div>
      )}
    </div>
  );
}

export default App;
