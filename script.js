document.addEventListener('DOMContentLoaded', function() {

    // Initialize Animate on Scroll (AOS)
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true,    // whether animation should happen only once - while scrolling down
    });

    // ======================= STICKY HEADER =======================
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ======================= MOBILE NAVIGATION TOGGLE =======================
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        // Prevent body from scrolling when menu is open
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ======================= PROJECT FILTERING =======================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                // If the filter is 'all' or the item's category matches the filter, show it. Otherwise, hide it.
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hide');
                    item.style.display = 'block'; // Or 'grid', 'flex' etc. depending on your layout
                } else {
                    item.classList.add('hide');
                     item.style.display = 'none';
                }
            });
        });
    });
    
    // ======================= FOOTER YEAR =======================
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

});
