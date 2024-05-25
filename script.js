// JavaScript to toggle the visibility of the mobile menu

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
