document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // 1. Toggle Menu Function
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the nav
        navMenu.classList.toggle('active');

        // Accessibility: Update aria-expanded
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // 2. Close Menu When Clicking Outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = hamburger.contains(event.target);

        // If the menu is open and the click is OUTSIDE both the menu and the button
        if (navMenu.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // 3. Close Menu When a Link is Clicked (Good UX for single-page sites)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});