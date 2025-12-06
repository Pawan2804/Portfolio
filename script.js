// Icons as SVG strings
const icons = {
  github: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  linkedin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  mail: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  briefcase: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
  calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  externalLink: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  layout: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
  server: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
  cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
  database: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
  wrench: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
};

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', function() {
  initializePortfolio();
  initializeNavigation();
  initializeContactForm();
});

function initializePortfolio() {
  // Hero Section
  document.getElementById('hero-name').textContent = portfolioData.personal.name;
  document.getElementById('hero-title').textContent = portfolioData.personal.title;
  document.getElementById('hero-tagline').textContent = portfolioData.personal.tagline;
//   document.getElementById('download-resume').href = portfolioData.personal.resumeUrl;
    const resumeLink = document.getElementById('download-resume');
    resumeLink.href = portfolioData.personal.resumeUrl;
    resumeLink.target = "_blank";

  
  // Hero Social Links
  const heroSocial = document.getElementById('hero-social');
  heroSocial.innerHTML = `
    <a href="${portfolioData.personal.github}" target="_blank" rel="noopener noreferrer" class="social-link">${icons.github}</a>
    <a href="${portfolioData.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">${icons.linkedin}</a>
    <a href="mailto:${portfolioData.personal.email}" class="social-link">${icons.mail}</a>
  `;
  
  // About Section
  document.getElementById('about-description').textContent = portfolioData.about.description;
  document.getElementById('about-image').src = portfolioData.personal.profileImage;
  document.getElementById('about-image').alt = portfolioData.personal.name;
  
  const aboutHighlights = document.getElementById('about-highlights');
  aboutHighlights.innerHTML = portfolioData.about.highlights.map(highlight => `
    <div class="highlight-item">
      <div class="highlight-dot"></div>
      <span>${highlight}</span>
    </div>
  `).join('');
  
  // Experience Timeline
  const experienceTimeline = document.getElementById('experience-timeline');
  experienceTimeline.innerHTML = portfolioData.experience.map((exp, index) => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <div class="timeline-dot ${exp.type}"></div>
        ${index < portfolioData.experience.length - 1 ? '<div class="timeline-line"></div>' : ''}
      </div>
      <div class="timeline-content">
        <div class="experience-header">
          <div>
            <h3 class="experience-title">${exp.title}</h3>
            <div class="experience-company">
              ${icons.briefcase}
              <span>${exp.company}</span>
              <span class="experience-location">• ${exp.location}</span>
            </div>
          </div>
          <div class="experience-period">
            ${icons.calendar}
            <span>${exp.period}</span>
          </div>
        </div>
        <p class="experience-description">${exp.description}</p>
        <ul class="experience-achievements">
          ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
        <div class="experience-technologies">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  // Projects Section
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-image-container">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-overlay">
          <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">${icons.github}</a>` : ''}
            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">${icons.externalLink}</a>` : ''}
          </div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-category">${project.category}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <ul class="project-features">
          ${project.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="project-technologies">
          ${project.technologies.slice(0, 5).map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          ${project.technologies.length > 5 ? `<span class="tech-badge-more">+${project.technologies.length - 5} more</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  // Skills Section
  const skillCategories = [
    { title: 'Languages', icon: icons.code, items: portfolioData.skills.languages },
    { title: 'Frontend', icon: icons.layout, items: portfolioData.skills.frontend },
    { title: 'Backend', icon: icons.server, items: portfolioData.skills.backend },
    { title: 'Cloud & AWS', icon: icons.cloud, items: portfolioData.skills.cloud },
    { title: 'Databases', icon: icons.database, items: portfolioData.skills.databases },
    { title: 'Tools & DevOps', icon: icons.wrench, items: portfolioData.skills.tools }
  ];
  
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = skillCategories.map(category => `
    <div class="skill-category">
      <div class="skill-category-header">
        <div class="skill-icon">${category.icon}</div>
        <h3 class="skill-category-title">${category.title}</h3>
      </div>
      <div class="skill-items">
        ${category.items.map(item => `<span class="skill-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
  
  // Education Section
  const educationGrid = document.getElementById('education-grid');
  educationGrid.innerHTML = portfolioData.education.map(edu => `
    <div class="education-card">
      <div class="education-header">
        <h3 class="education-degree">${edu.degree}</h3>
        <span class="education-year">${edu.year}</span>
      </div>
      <p class="education-institution">${edu.institution}</p>
      <div class="education-courses">
        ${edu.courses.map(course => `<span class="course-tag">${course}</span>`).join('')}
      </div>
      ${edu.highlights ? `
        <ul class="education-highlights">
          ${edu.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
  
  // Publications Section
  const publicationsList = document.getElementById('publications-list');
  publicationsList.innerHTML = portfolioData.publications.map(pub => `
    <div class="publication-card">
      <div class="publication-type">${pub.type}</div>
      <h3 class="publication-title">${pub.title}</h3>
      <p class="publication-meta">${pub.publisher} • ${pub.year}</p>
      <p class="publication-description">${pub.description}</p>
    </div>
  `).join('');
  
  // Contact Details
  const contactDetails = document.getElementById('contact-details');
  contactDetails.innerHTML = `
    <div class="contact-item">
      ${icons.mail}
      <a href="mailto:${portfolioData.personal.email}">${portfolioData.personal.email}</a>
    </div>
    <div class="contact-item">
      ${icons.phone}
      <a href="tel:${portfolioData.personal.phone}">${portfolioData.personal.phone}</a>
    </div>
    <div class="contact-item">
      ${icons.mapPin}
      <span>${portfolioData.personal.location}</span>
    </div>
  `;
  
  // Footer
  document.getElementById('footer-name').textContent = portfolioData.personal.name;
  const footerSocial = document.getElementById('footer-social');
  footerSocial.innerHTML = `
    <a href="${portfolioData.personal.github}" target="_blank" rel="noopener noreferrer">${icons.github}</a>
    <a href="${portfolioData.personal.linkedin}" target="_blank" rel="noopener noreferrer">${icons.linkedin}</a>
    <a href="mailto:${portfolioData.personal.email}">${icons.mail}</a>
  `;
}

// Navigation
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.dark-nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Smooth scroll on click
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-section');
      scrollToSection(targetId);
    });
  });
  
  // Update active nav on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Contact Form
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');
  const btnText = document.getElementById('form-btn-text');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show sending state
    btnText.textContent = 'Sending...';
    form.querySelector('button[type=\"submit\"]').disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      // Show success message
      successMessage.style.display = 'block';
      btnText.textContent = 'Send Message';
      form.querySelector('button[type=\"submit\"]').disabled = false;
      form.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    }, 1000);
  });
}
