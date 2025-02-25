// Mobile Navigation Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
});


  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
  });

  // Impact Stats Counter Animation
  function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // Lower is faster

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;

      if (count < target) {
        count += increment;
        counter.innerText = Math.floor(count);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
  }

  // Run counter animation when the section is in view
  const impactSection = document.querySelector('#impact');

  window.addEventListener('scroll', () => {
  const sectionPosition = impactSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    animateCounters();
    // Remove the event listener after animation starts
    window.removeEventListener('scroll', arguments.callee);
  }
  });

  // Donation Buttons
  const donationBtns = document.querySelectorAll('.donation-btn');
  const donationAmountInput = document.getElementById('donationAmount');

  donationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const amount = btn.getAttribute('data-amount');
    donationAmountInput.value = amount;

    // Scroll to donation form
    document.querySelector('#donationForm').scrollIntoView({ behavior: 'smooth' });
  });
  });

  // Donation Form Submission
  const donationForm = document.getElementById('submitDonation');
  const successModal = document.getElementById('successModal');
  const closeModal = document.getElementById('closeModal');
  const closeModalX = document.querySelector('.close-modal');

  donationForm.addEventListener('click', (e) => {
  e.preventDefault();

  // Basic form validation
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  if (fullName && email && cardNumber && expiryDate && cvv) {
    successModal.style.display = 'block';

    // Reset form
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('expiryDate').value = '';
    document.getElementById('cvv').value = '';
  } else {
    alert('Please fill in all required fields.');
  }
  });

  // Close modal
  closeModal.addEventListener('click', () => {
  successModal.style.display = 'none';
  });

  closeModalX.addEventListener('click', () => {
  successModal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.style.display = 'none';
  }
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic form validation
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
  } else {
    alert('Please fill in all required fields.');
  }
  });
