// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        const target = document.querySelector(this.getAttribute('href'));
        if (target) { // Ensure the target exists
            target.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});

// Toggle "About me" visibility
const learnMoreBtn = document.getElementById('learn-more-btn');
const aboutSection = document.getElementById('about');

if (learnMoreBtn && aboutSection) { // Ensure both elements exist
    learnMoreBtn.addEventListener('click', function() {
        aboutSection.classList.toggle('show'); // Toggle visibility of the about section
    });
}

// Form submission (basic example)
const contactBtn = document.getElementById('contact-btn');

if (contactBtn) { // Ensure the button exists
    contactBtn.addEventListener('click', function() {
        // Replace this alert with actual form submission logic
        alert('Contact form functionality goes here!');
    });
}
