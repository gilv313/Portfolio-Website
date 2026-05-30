// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();
 
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
 
// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});
 