// ==================== HAMBURGER MENU TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && navMenu.classList.contains('active')) {
    if (!e.target.closest('nav')) {
      hamburger?.classList.remove('active');
      navMenu.classList.remove('active');
      body.style.overflow = 'auto';
    }
  }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
    body.style.overflow = 'auto';
  });
});

// ==================== ACTIVE MENU HIGHLIGHT ====================
function setActiveMenu() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (currentPage === '' && href === 'index.html') {
      link.classList.add('active');
    } else if (currentPage === href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Set active menu on page load
document.addEventListener('DOMContentLoaded', setActiveMenu);

// ==================== ANIMATE SKILLS PROGRESS BAR ====================
function animateProgressBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  progressFills.forEach(fill => {
    const percentage = fill.getAttribute('data-percentage');
    fill.style.setProperty('--progress-width', percentage + '%');
  });
}

// Trigger animation when page loads or when scrolling into view
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.progress-fill')) {
    animateProgressBars();
  }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== FADE IN ANIMATION ON SCROLL ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .portfolio-card, .info-card, .certificate-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease';
  observer.observe(element);
});

// ==================== PREVENT LAYOUT SHIFT ====================
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.section');
  if (section) {
    const computedStyle = window.getComputedStyle(section);
    // Ensure the section maintains its size
  }
});

// ==================== MODAL LIGHTBOX FOR CERTIFICATES ====================
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Open modal when certificate image is clicked
const certificateImages = document.querySelectorAll('.certificate-image');
certificateImages.forEach(img => {
  img.addEventListener('click', () => {
    imageModal.classList.add('active');
    modalImage.src = img.src;
  });
});

// Close modal when close button is clicked
if (closeModal) {
  closeModal.addEventListener('click', () => {
    imageModal.classList.remove('active');
  });
}

// Close modal when clicking outside the image
window.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.classList.remove('active');
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    imageModal.classList.remove('active');
  }
});
