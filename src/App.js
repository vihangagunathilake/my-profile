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
    title: 'Service Gateway',
    category: 'personal',
    status: 'Active',
    thumbnail: '/service-gateway-provider.png',
    link: 'https://vihangagunathilake.com/service-gateway',
    demoCredentials: {
      note: 'Use the following credentials to explore the platform:',
      email: 'testadminservicegateway@gmail.com',
      password: 'admin',
    },
    subtitle: 'Full-Stack Service Management & Intelligent Job Scheduling Platform',
    tags: ['Java 21', 'Spring Boot 3.5', 'React 19', 'Kafka', 'WebSocket', 'STOMP', 'PWA', 'MySQL'],
    details: {
      subtitle: 'Workflow & Service Management Platform',
      description: [
        'A full-stack service management platform that enables organizations to define services, workflows, service points, pricing, operating hours, and customer jobs.',
        'The platform automatically manages customer job requests and determines suitable service slots based on configured business rules and service availability.',
      ],
      highlights: [
        'Dynamic service configuration',
        'Workflow management',
        'Service-point allocation',
        'Job scheduling',
        'Authentication and authorization',
        'JWT-based security',
        'Payment and down-payment workflows',
        'REST API architecture',
        'React-based administration interface',
      ],
      technology: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'MySQL', 'React', 'Nginx', 'Linux'],
    },
    description: 'A full-stack service management platform that digitizes and automates how service businesses manage customer jobs, agents, scheduling, and real-time operations.',
    accessInfo: 'Full-stack service platform featuring a custom greedy time-slot optimization scheduling algorithm and Kafka event-driven alerts.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Backend Language', technology: 'Java 21' },
        { area: 'Backend Framework', technology: 'Spring Boot 3.5' },
        { area: 'Security', technology: 'Spring Security + JWT (JJWT)' },
        { area: 'Database', technology: 'MySQL + Spring Data JPA (Hibernate)' },
        { area: 'Messaging / Events', technology: 'Apache Kafka' },
        { area: 'Real-time Push', technology: 'WebSocket (STOMP via SimpMessagingTemplate)' },
        { area: 'Email', technology: 'Spring Mail + Thymeleaf (HTML templates)' },
        { area: 'Scheduling', technology: 'Spring @Scheduled tasks' },
        { area: 'In-Memory Cache', technology: 'Spring Cache (ConcurrentMapCache)' },
        { area: 'Architecture', technology: 'Multi-module Maven monorepo' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React 19' },
        { area: 'UI Libraries', technology: 'Material UI (MUI), Ant Design, Lucide Icons' },
        { area: 'Routing', technology: 'React Router v7' },
        { area: 'HTTP Client', technology: 'Axios' },
        { area: 'WebSocket Client', technology: 'STOMP.js + SockJS' },
        { area: 'PWA', technology: 'Service Worker (offline support + install prompt)' },
        { area: 'Utilities', technology: 'Lombok, Apache Commons, Moment.js' },
        { area: 'Build Tool', technology: 'Maven (backend), Create React App (frontend)' }
      ]
    },
    involvementSection: {
      title: 'How Each Technology Solves a Problem',
      backend: [
        {
          topic: 'Java 21 + Spring Boot 3.5 — Modular Monolith Architecture',
          points: [
            'Multi-module monorepo design (user_module, job_module, service_module, notification_module, dashboard_module, common_module, web_module) keeping each business domain isolated and maintainable',
            'Exposed REST APIs consumed by the React 19 single page application'
          ]
        },
        {
          topic: 'Spring Security + JWT — Method-Level Security & RBAC',
          points: [
            'Custom JwtAuthenticationFilter validating tokens on every API request',
            'Method-level security (@EnableMethodSecurity) enforcing role-based access control (RBAC) at the service layer',
            'CustomAccessDeniedHandler returning clean JSON error payloads'
          ]
        },
        {
          topic: 'Spring Data JPA + MySQL — Efficient Data Queries & Projections',
          points: [
            'Mapped domain entities (Job, JobAtPoint, ServicePoint, User, Customer)',
            'Custom JPQL and native queries (getCompressedJobsByPoint, getAvailableServicesIds) powering the scheduling engine',
            'JPA projection interfaces (ServiceTimeProjection, JobTimelineProjection) preventing database over-fetching'
          ]
        },
        {
          topic: 'Custom Job Scheduling Algorithm — Greedy Time-Slot Optimization',
          points: [
            'Designed and built a greedy time-slot optimization algorithm in PrepareJobSubMethods from scratch',
            'Loops through requested services and available service points to find the earliest free time slot without overlaps',
            'Detects gaps between scheduled jobs and fills them intelligently to minimize customer wait times'
          ]
        },
        {
          topic: 'Apache Kafka — Event-Driven Decoupling',
          points: [
            'Decoupled job events (job timeouts, customer arrivals) from the alert pipeline',
            'Published CustomerArrivedTrigger and TimeoutJobListener events for independent consumer processing'
          ]
        },
        {
          topic: 'WebSocket (STOMP + SimpMessagingTemplate) — Live Push Telemetry',
          points: [
            'Delivered real-time notifications to specific users via WebSocket topic /topic/notifications/{userId}',
            'Auto-refreshed manager and agent dashboards on live job-serving events'
          ]
        },
        {
          topic: 'Spring @Scheduled Tasks & Spring Cache',
          points: [
            'JobTimeoutScheduler marking overdue jobs and DeleteExpiredJobsScheduler purging stale data',
            'Cached role permissions in-memory via ConcurrentMapCacheManager to minimize DB overhead on API calls'
          ]
        },
        {
          topic: 'Spring Mail + Thymeleaf',
          points: [
            'Rendered responsive HTML email templates via Thymeleaf for automated account notifications'
          ]
        }
      ],
      frontend: [
        {
          topic: 'React 19 + React Router v7 — Role-Aware SPA Routing',
          points: [
            'Single Page Application with protected routes (ProtectedRoute)',
            'Role-aware routing redirecting agents to /my-jobs and managers to /dashboard',
            'Global UI state management using React Context API (ThemeContext, CurrencyContext)'
          ]
        },
        {
          topic: 'MUI + Ant Design + Lucide Icons — Component System',
          points: [
            'MUI Skeleton loaders, Tooltips, and DataGrid layout structures',
            'Ant Design time pickers and form controls combined with lightweight Lucide SVG icons'
          ]
        },
        {
          topic: 'WebSocket Client & Progressive Web App (PWA)',
          points: [
            'STOMP.js + SockJS client integration for reliable real-time push subscriptions',
            'Service Worker caching app shell for offline resilience with native home screen install prompt'
          ]
        }
      ]
    },
    product: {
      tagline: 'Book a service. Watch it run itself.',
      impact: 'Full-Stack Creator & Lead Architect — Custom Greedy Job Scheduling Engine, Kafka Telemetry Bus & PWA.'
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
