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
    title: 'Queue Management System',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'Enterprise Multi-Branch Queue Management & Branch Experience Platform',
    tags: ['Java', 'Spring Boot', 'React', 'MQTT', 'MySQL', 'Redux', 'JobRunr', 'ApexCharts', 'Caffeine'],
    description: 'Enterprise-grade, multi-branch Queue Management and Branch Experience Platform used by banks, service centers, and government organizations. Owned & built the real-time Branch Dashboard end-to-end over ~4 years.',
    accessInfo: 'Commercial platform deployment protected by NDA. Complete technical stack & personal involvement detailed below.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java' },
        { area: 'Framework', technology: 'Spring Boot 2.x (Modular Maven project)' },
        { area: 'ORM / Persistence', technology: 'Spring Data JPA, Hibernate, MySQL' },
        { area: 'Security', technology: 'Spring Security, JWT, LDAP / Active Directory' },
        { area: 'Real-time Messaging', technology: 'MQTT (ActiveMQ)' },
        { area: 'Caching', technology: 'Caffeine Cache' },
        { area: 'Background Jobs', technology: 'JobRunr' },
        { area: 'Reporting', technology: 'Apache POI (Excel), JasperReports (PDF / JRXML)' },
        { area: 'Monitoring', technology: 'JavaMelody' },
        { area: 'Notifications', technology: 'SMTP Email, SMS Gateway' },
        { area: 'Build and Deploy', technology: 'Maven, Bitbucket Pipelines (CI/CD)' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React 18 (Create React App)' },
        { area: 'State Management', technology: 'Redux + Redux Thunk' },
        { area: 'UI Library', technology: 'Material UI (MUI v5), React Bootstrap, Reactstrap' },
        { area: 'Charts', technology: 'ApexCharts, Chart.js' },
        { area: 'Real-time', technology: 'MQTT (paho-mqtt / mqtt.js)' },
        { area: 'Data Tables', technology: 'MUI Datatables, React Data Table Component' },
        { area: 'Canvas / Design', technology: 'Konva / React-Konva' },
        { area: 'HTTP Client', technology: 'Axios' },
        { area: 'Routing', technology: 'React Router DOM v6' },
        { area: 'Styling', technology: 'SASS' },
        { area: 'Notifications', technology: 'React Hot Toast, SweetAlert2' },
        { area: 'Build and Deploy', technology: 'Webpack, Bitbucket Pipelines' }
      ]
    },
    involvementSection: {
      backend: [
        {
          topic: 'Spring Boot — Modular Monolith',
          points: [
            'Built and maintained services across 11 Maven modules (branch_op, ticket_op, kiosk, reports, users, etc.) each isolated by business domain',
            'Applied the api/impl pattern: facade interfaces in api, JPA logic in impl — keeping controllers decoupled from repositories'
          ]
        },
        {
          topic: 'Spring Data JPA / Hibernate + MySQL',
          points: [
            'Wrote custom @NamedQuery / @NamedNativeQuery on entity beans for complex reporting views',
            'Extended JpaRepository interfaces for domain-specific queries across agents, counters, categories, kiosks, and tickets',
            'Implemented branch cloning — persisting categories, counters, kiosk designs, and SMS templates via JPA in a single transactional flow'
          ]
        },
        {
          topic: 'Spring Security + JWT',
          points: [
            'Implemented role- and user-type-based API access control',
            'Enforced permission-driven visibility backed by Spring Security context'
          ]
        },
        {
          topic: 'MQTT — Real-time Messaging',
          points: [
            'Used MQTT pub/sub to broadcast live ticket state changes to kiosks and display boards — eliminating polling',
            'Integrated MQTT for kiosk initialisation and appointment booking real-time flows'
          ]
        },
        {
          topic: 'Apache POI + JasperReports',
          points: [
            'Built the full agent-wise reporting suite: attendance, performance, matter code summary',
            'Generated Excel exports via Apache POI and PDF reports via JRXML templates',
            'Created MySQL event-driven aggregation tables (rp_agent_wise_table, rp_agent_attendance_table) powering these reports'
          ]
        },
        {
          topic: 'MySQL — Events / Views / Stored Procedures',
          points: [
            'Wrote complex SQL views, scheduled MySQL events for nightly data aggregation, and stored procedures (SP_TRANSFER_USER, agent performance summary)',
            'Fixed multi-table join issues in reporting views and corrected ordering bugs in historical report queries'
          ]
        },
        {
          topic: 'CI/CD — Bitbucket Pipelines',
          points: [
            'Deployed backend as WAR through automated Bitbucket pipeline to Tomcat'
          ]
        }
      ],
      frontend: [
        {
          topic: 'React + Redux',
          points: [
            'Built the Branch Dashboard — real-time operational hub — with live stat tiles, charts, and drill-down modals (issued, waiting, serving, served, no-show, transferred, exception)',
            'Managed complex async state with Redux + Redux Thunk for multi-branch data and live polling',
            'Implemented AUX (break/away) status tracking and operator search in the live counter view'
          ]
        },
        {
          topic: 'ApexCharts / Chart.js',
          points: [
            'Rendered real-time donut/gauge charts for operator status and token-per-hour bar charts',
            'Wired chart data to backend live data — refreshed on intervals and MQTT events',
            'Added category service-time and wait-time statistics charts to the dashboard'
          ]
        },
        {
          topic: 'MQTT (paho-mqtt)',
          points: [
            'Subscribed to MQTT broker topics in React to receive live ticket/queue updates',
            'Powered the real-time branch dashboard without any polling'
          ]
        },
        {
          topic: 'Material UI (MUI v5)',
          points: [
            'Built reusable MUI Datatables for agent-wise reports with column-level PDF/Excel export config',
            'Used MUI components across dashboard modals, form controls, and management screens'
          ]
        },
        {
          topic: 'Konva / React-Konva',
          points: [
            'Implemented kiosk ticket design editing on a canvas with dimension validation',
            'Added cloned kiosk design name editing capability'
          ]
        },
        {
          topic: 'Axios',
          points: [
            'Integrated all backend REST APIs — reports, branch management, user/skill assignment, kiosk management — with JWT token headers'
          ]
        },
        {
          topic: 'React Router DOM v6',
          points: [
            'Implemented role-based route visibility: hid admin/licensing/branch routes based on user type from backend'
          ]
        },
        {
          topic: 'SASS',
          points: [
            'Delivered UI/UX consistency across dashboard, reports, and admin screens through SASS-based theming and layout restructures'
          ]
        }
      ]
    },
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
    tags: ['Java', 'Spring Boot 2.x', 'React 18', 'Redux', 'MUI v5', 'MQTT', 'MySQL Events', 'Apache POI', 'Bitbucket Pipelines'],
    description: 'Enterprise customer feedback application collecting real-time ratings via kiosks and mobile forms, calculating CSAT and weighted SLA scores, and delivering real-time manager alerts over MQTT.',
    accessInfo: 'Commercial platform deployment protected by NDA. Complete technical stack & personal involvement detailed below.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java' },
        { area: 'Framework', technology: 'Spring Boot 2.x (modular Maven multi-module project)' },
        { area: 'Persistence', technology: 'Spring Data JPA / Hibernate, MySQL' },
        { area: 'Security', technology: 'Spring Security + JWT' },
        { area: 'Reporting', technology: 'Apache POI (Excel export)' },
        { area: 'Database Automation', technology: 'MySQL Events (scheduled stored logic) + Materialized-view style summary tables (f_mv_feedback_*)' },
        { area: 'SMS', technology: 'SMS integration via Kiosk/Ticket pipeline' },
        { area: 'Build & Deploy', technology: 'Maven, Bitbucket Pipelines → SFTP deploy to Apache Tomcat' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React 18 (Create React App)' },
        { area: 'State Management', technology: 'Redux + Redux Thunk' },
        { area: 'UI Library', technology: 'Material UI (MUI v5), React Bootstrap' },
        { area: 'Charts', technology: 'ApexCharts (react-apexcharts)' },
        { area: 'Real-time', technology: 'MQTT (mqtt.js / paho-mqtt)' },
        { area: 'Data Tables', technology: 'MUI Datatables (server-side pagination & sorting)' },
        { area: 'HTTP Client', technology: 'Axios' },
        { area: 'Routing', technology: 'React Router DOM v6' },
        { area: 'Date Handling', technology: 'Moment.js, React Datepicker' },
        { area: 'Notifications', technology: 'React Hot Toast, SweetAlert2' },
        { area: 'CI/CD', technology: 'Bitbucket Pipelines → SFTP deploy + Slack notifications' }
      ]
    },
    involvementSection: {
      backend: [
        {
          topic: 'Feedback Data Model & API Architecture',
          points: [
            'Built JPA entities (Feedback, FeedbackQuestion, FeedbackAnswer, Imoji, Weightage, QuestionsAndAnswers) and their Spring Data JPA repositories with custom @Query JPQL/SQL methods'
          ]
        },
        {
          topic: 'Sub-Questions Feature & Dynamic Endpoints',
          points: [
            'Extended FeedbackQuestion and FeedbackAnswer entities; designed the hierarchical question structure and added new API endpoints in FeedbackController (touched 21 files in a single feature commit)'
          ]
        },
        {
          topic: 'Suggestions Capture & Service Layer Integration',
          points: [
            'Added suggestion field to feedback submissions and wired it through the service layer'
          ]
        },
        {
          topic: 'Dashboard Aggregation Services',
          points: [
            'Built FeedbackService methods for question-wise, branch-wise, and counter-wise aggregation powering the analytics dashboard'
          ]
        },
        {
          topic: 'SMS Alerts & Pipeline Coordination',
          points: [
            'Triggered SMS alerts through the kiosk/ticket pipeline when feedback is submitted; modified FeedbackService, TicketServiceImpl, and KioskBean to coordinate the flow'
          ]
        },
        {
          topic: 'MySQL Events & Materialized Summary Views',
          points: [
            'Created and fixed CREATE EVENT evt_report_insert to periodically refresh f_mv_feedback_summary_report, f_mv_feedback_detail_report, and f_mv_feedback_sms_report tables',
            'Debugged a GROUP BY query issue causing the scheduled event to fail in strict SQL mode'
          ]
        },
        {
          topic: 'Email Template & Notification Workflow',
          points: [
            'Added email template integration for post-feedback kiosk notifications'
          ]
        },
        {
          topic: 'Core Technical Solutions (Backend)',
          points: [
            'Spring Data JPA + @Query: Wrote custom JPQL and native SQL queries for aggregated dashboard stats (branch/counter/region filtering)',
            'MySQL Events: Used MySQL scheduler events to simulate materialized views; fixed a GROUP BY mode incompatibility bug so the event runs correctly in strict SQL mode',
            'Spring Security + JWT: Worked within the existing JWT filter chain; applied role-based access guards on feedback endpoints',
            'Lombok: Reduced boilerplate on all DTO and entity classes'
          ]
        }
      ],
      frontend: [
        {
          topic: 'Feedback Dashboard & Operational Analytics',
          points: [
            'Built stat tiles (total, today, mobile count), date-range filters, branch/counter/region hierarchy dropdowns, and an all-feedbacks table with a drill-down details modal',
            'Used MUI Datatable (server-side sort/pagination), Axios, Moment.js for date formatting, and MUI v5 components'
          ]
        },
        {
          topic: 'Token Feedback View (1,341-Line Commit)',
          points: [
            'Built TokenFeedbacks.js (1,341-line commit) linking feedback entries directly with queue tokens'
          ]
        },
        {
          topic: 'All Feedbacks Table & Server-side Sorting Bugfix',
          points: [
            'Implemented server-side sorted MUI Datatable; fixed a bug where an empty sort column crashed the backend query by enforcing givenDate DESC as safe default on the frontend'
          ]
        },
        {
          topic: 'Feedback Summary Report & SMS Reports',
          points: [
            'Built FeedbackReports.js, FeedbackSmsReports.js, and FeedbackSmsReport.js table with Excel download button; added new columns to the summary report'
          ]
        },
        {
          topic: 'MQTT Real-time Push Integration',
          points: [
            'Wired mqttService.js into dashboard components; subscribed to feedback/dashboard/branch topic for live push updates',
            'Managed connect/subscribe/unsubscribe/disconnect in component lifecycle to prevent memory leaks (used mqtt.js / paho-mqtt — solved real-time data refresh without polling)'
          ]
        },
        {
          topic: 'ApexCharts Trend Analytics',
          points: [
            'Rendered line charts and donut charts for feedback trend data wired to date-filtered Axios responses'
          ]
        },
        {
          topic: 'Branch & Counter Mapping Modals',
          points: [
            'Built AddBranchModal.js and AddKioskModal.js to link feedback branches/counters to queue system entities'
          ]
        },
        {
          topic: 'SMS Groups & Mobile Assignment Refactor',
          points: [
            'Implemented email assignment to SMS groups and mobile group assignment to kiosk (large SmsGroup.js refactor)'
          ]
        },
        {
          topic: 'Kiosk Design Fixes',
          points: [
            'Fixed feedback value mapping bug in DesignKiosksTemplate.js; enabled question zone editing'
          ]
        },
        {
          topic: 'CI/CD Bitbucket Pipeline',
          points: [
            'Configured Bitbucket Pipeline (SFTP deploy + Slack notify on build & deployment success)'
          ]
        },
        {
          topic: 'Core Technical Solutions (Frontend)',
          points: [
            'Redux + Thunk: Managed async API state (loading/success/error) across dashboard and report pages',
            'React Router DOM v6: Added new routes for TokenFeedbacks, SMS Reports, and dashboard pages',
            'MUI Datatables: Solved large dataset display with server-side pagination and custom column sorting',
            'MQTT (mqtt.js): Solved real-time dashboard refresh without polling by subscribing to live topic feeds',
            'ApexCharts: Visualized time-series feedback trends and category breakdowns for analytics',
            'Axios: Handled all API calls with date-range and filter params',
            'Bitbucket Pipelines: Automated deployment pipeline with manual approval gate and Slack notification hooks'
          ]
        }
      ]
    },
    product: {
      tagline: 'Capture customer feedback at the point of experience and turn insights into instant action.',
      impact: 'Highest contributor — 14 of ~33 commits across the frontend (yasinthav commits). Full ownership of feedback-specific dashboard, API, and reporting features.'
    }
  },
  {
    id: 'people-counting-solution',
    title: 'People Counting Solution',
    category: 'commercial',
    status: 'Commercial System',
    thumbnail: '/logo.svg',
    subtitle: 'AI & Camera-Based Occupancy Monitoring & Retail Analytics Platform',
    tags: ['Java', 'Spring Boot 2.x', 'React 18', 'Redux', 'PrimeReact', 'MUI v5', 'MQTT', 'Firebase', 'Apache POI'],
    description: 'Computer-vision & IoT powered occupancy monitoring solution providing real-time footfall counting, camera device stream processing, sales conversion dashboards, and campaign analytics.',
    accessInfo: 'Commercial platform deployment protected by NDA. Complete technical stack & personal involvement detailed below.',
    techStackTables: {
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
      backend: [
        { area: 'Language', technology: 'Java' },
        { area: 'Framework', technology: 'Spring Boot 2.x (Modular Maven)' },
        { area: 'ORM', technology: 'Spring Data JPA, Hibernate, MySQL' },
        { area: 'Security', technology: 'Spring Security, JWT, LDAP' },
        { area: 'Background Jobs', technology: 'JobRunr' },
        { area: 'Reporting', technology: 'Apache POI (Excel)' },
        { area: 'Device Integration', technology: 'V9 API / PCS / CubeQuery (people-counting cameras)' },
        { area: 'CI/CD', technology: 'Maven, Bitbucket Pipelines' }
      ],
      frontend: [
        { area: 'Framework', technology: 'React 18' },
        { area: 'State', technology: 'Redux + Redux Thunk' },
        { area: 'UI Libraries', technology: 'MUI v5 + PrimeReact' },
        { area: 'Charts', technology: 'ApexCharts, Chart.js' },
        { area: 'Real-time', technology: 'MQTT (paho-mqtt)' },
        { area: 'HTTP', technology: 'Axios' },
        { area: 'Styling', technology: 'SASS' },
        { area: 'Deployment', technology: 'Firebase Hosting' }
      ]
    },
    involvementSection: {
      backend: [
        {
          topic: 'JPA/Hibernate — Domain Modeling & Aggregation',
          points: [
            'Designed all footfall domain entities (FootfallDevice, DailyPersonAttribute, DetectedPerson, MatchedDetectedPerson, Sales, Campaign)',
            'Wrote complex aggregation queries for hourly/daily/weekly/monthly analytics'
          ]
        },
        {
          topic: 'Device API Integration',
          points: [
            'Integrated V9/PCS/CubeQuery camera APIs to ingest real-time footfall streams',
            'Built the CubeQueryRequest access layer',
            'Retired a separate API service by consolidating into this backend'
          ]
        },
        {
          topic: 'Analytics Pipeline',
          points: [
            'End-to-end: raw device events → JPA aggregation tables → REST APIs for dashboards'
          ]
        },
        {
          topic: 'Sales + Campaign Modules',
          points: [
            'Built full CRUD entities and services for sales conversion and marketing campaign analytics correlated with footfall data'
          ]
        },
        {
          topic: 'Employee Recognition',
          points: [
            'Persisted face-matched employee/visitor data for journey tracking and wait time calculation'
          ]
        }
      ],
      frontend: [
        {
          topic: 'React + Redux — Dashboards & Analytics',
          points: [
            'Built the Advanced Dashboard (daily/weekly/monthly/yearly + comparison views) and Branch Dashboard',
            'Integrated entrance counts, zone heatmaps, and "since yesterday" indicators'
          ]
        },
        {
          topic: 'ApexCharts / Chart.js Data Visualizations',
          points: [
            'Rendered gender/age distribution charts, hourly footfall bars, sales vs. footfall combined charts, weekly/monthly trends'
          ]
        },
        {
          topic: 'Sales Conversion Dashboard',
          points: [
            'Daily/monthly/weekly views with invoice data, conversion rates, and age-wise breakdowns'
          ]
        },
        {
          topic: 'Campaign Analytics',
          points: [
            'Campaign comparison and analytics pages integrating campaign periods with footfall + sales'
          ]
        },
        {
          topic: 'Firebase Hosting & PDF Export',
          points: [
            'Deployed frontend via Firebase Hosting',
            'Made the advanced dashboard browser-downloadable as PDF'
          ]
        }
      ]
    },
    product: {
      tagline: 'Real-time physical space intelligence, camera footfall counting, and sales conversion analytics.',
      impact: '36 backend commits (highest author) · 58 frontend commits'
    }
  },
  {
    id: 'gateway-provider',
    title: 'Service Gateway',
    category: 'personal',
    status: 'Active',
    thumbnail: '/service-gateway-provider.png',
    link: 'https://vihangagunathilake.com/service-gateway',
    subtitle: 'Full-Stack Service Management & Intelligent Job Scheduling Platform',
    tags: ['Java 21', 'Spring Boot 3.5', 'React 19', 'Kafka', 'WebSocket', 'STOMP', 'PWA', 'MySQL'],
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
