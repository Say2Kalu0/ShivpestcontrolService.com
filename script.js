// Image Carousel for Dynamism (for pages with carousel, like cockroach.html)
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
if (images.length > 0) {
    setInterval(showNextImage, 3000); // Change image every 3 seconds
}

// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Dynamic Form Submission with Animation (for enquiry form)
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default for demo (remove for real submission)
        const form = this;
        form.style.transform = 'scale(0.95)'; // Shrink animation for dynamism
        setTimeout(() => {
            alert('Thank you for your enquiry! We will get back to you soon.');
            form.reset();
            form.style.transform = 'scale(1)'; // Reset to original size
        }, 500);
        // For real submission, remove preventDefault and handle via Formspree or backend
    });
}
