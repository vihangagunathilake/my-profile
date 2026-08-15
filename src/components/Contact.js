import React from 'react';

function Contact() {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-box">
        <p className="section-label">Get in Touch</p>
        <h2 className="contact-title">Let's build something meaningful.</h2>
        <p className="contact-sub">
          Open to senior software engineering roles, backend / full-stack positions,
          and interesting technical conversations. Feel free to reach out via any channel below.
        </p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/vihanga-gunathilake/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/vihanga951016"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
        </div>

        <div className="contact-info-footer">
          <span className="contact-info-item">
            📧 hmyvihangagunathilake@gmail.com
          </span>
          <span className="contact-info-separator">·</span>
          <span className="contact-info-item">
            📞 (+94) 77-016-5247
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
