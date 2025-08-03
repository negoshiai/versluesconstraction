:root {
    --primary-color: #1A2A4C;   /* Navy Blue */
    --secondary-color: #B4B8BF; /* Concrete Gray */
    --accent-color: #D4A056;    /* Architectural Gold */
    --text-color: #333333;      /* Charcoal */
    --light-text: #ffffff;
    --bg-color: #F8F9FA;        /* Off-white */
    --dark-bg: #111b33;
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Lato', sans-serif;
    --header-height: 80px;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
}

body {
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-color);
    background-color: var(--bg-color);
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--primary-color);
    font-weight: 700;
    line-height: 1.3;
}

h1 { font-size: 3rem; margin-bottom: 1rem; }
h2 { font-size: 2.5rem; margin-bottom: 1rem; }
h3 { font-size: 1.5rem; margin-bottom: 0.75rem; }

a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #b8863b;
}

p {
    margin-bottom: 1rem;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section-title {
    text-align: left;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;
}
.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--accent-color);
}

.section-subtitle {
    font-size: 1.1rem;
    color: #666;
    margin-top: -2.5rem;
    margin-bottom: 3rem;
}

.text-center { text-align: center; }
.text-center.section-title::after { left: 50%; transform: translateX(-50%); }

/* ======================= BUTTONS & UTILITIES ======================= */
.btn {
    display: inline-block;
    padding: 12px 28px;
    font-family: var(--font-heading);
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--accent-color);
    color: var(--light-text);
}
.btn-primary:hover {
    background-color: #b8863b;
    color: var(--light-text);
    transform: translateY(-3px);
}

/* ======================= HEADER ======================= */
.main-header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    height: var(--header-height);
    display: flex;
    align-items: center;
    transition: background-color 0.4s ease, box-shadow 0.4s ease;
}

.main-header.scrolled {
    background-color: rgba(26, 42, 76, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--light-text);
}
.main-header.scrolled .logo { color: var(--light-text); }
.logo-accent { color: var(--accent-color); }

.nav-links {
    display: flex;
    gap: 2.5rem;
}

.nav-links a {
    color: var(--light-text);
    font-weight: 600;
    font-family: var(--font-heading);
    position: relative;
    padding-bottom: 5px;
}
.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
}
.nav-links a:hover::after, .nav-links a.active::after {
    width: 100%;
}

.hamburger { display: none; }

/* ======================= HERO SECTION ======================= */
.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1551292831-00ba88044432?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600') no-repeat center center/cover;
    position: relative;
    display: flex;
    align-items: center;
    color: var(--light-text);
    text-align: center;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    opacity: 0.8;
}

.hero-content {
    position: relative;
    z-index: 2;
}
.hero-content h1 {
    color: var(--light-text);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
}
.hero-content p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 2rem;
}

/* ======================= ABOUT SECTION ======================= */
.about {
    padding: 6rem 0;
    background-color: var(--bg-color);
}
.about .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
.about-image img {
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
}
.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2.5rem;
}
.stat-item h3 {
    color: var(--accent-color);
    font-size: 2.5rem;
    font-weight: 800;
}
.stat-item p {
    font-weight: 600;
    color: #555;
    margin-bottom: 0;
}

/* ======================= SERVICES SECTION ======================= */
.services {
    padding: 6rem 0;
    background-color: var(--light-text);
    position: relative;
}
/* Blueprint Grid Background */
.services::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(rgba(180, 184, 191, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(180, 184, 191, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.5;
    z-index: 0;
}
.services .container {
    position: relative;
    z-index: 1;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background-color: #fff;
    padding: 2.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}
.service-icon {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1.5rem;
}

/* ======================= PROJECTS SECTION ======================= */
.projects {
    padding: 6rem 0;
    background-color: var(--bg-color);
}
.project-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}
.filter-btn {
    background: none;
    border: 1px solid var(--secondary-color);
    color: #555;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.filter-btn:hover, .filter-btn.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--light-text);
}
.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
.project-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
}
.project-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}
.project-item:hover img {
    transform: scale(1.1);
}
.project-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(26, 42, 76, 0.9), transparent);
    color: var(--light-text);
    padding: 3rem 1.5rem 1.5rem;
    transform: translateY(100%);
    transition: transform 0.4s ease;
}
.project-item:hover .project-overlay {
    transform: translateY(0);
}
.project-overlay h3 { color: var(--light-text); font-size: 1.25rem; }
.project-overlay p { font-size: 0.9rem; color: var(--secondary-color); margin: 0;}

.project-item.hide {
    display: none;
}

/* ======================= CONTACT SECTION ======================= */
.contact {
    padding: 6rem 0;
    background-color: var(--light-text);
}
.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    background: var(--bg-color);
    padding: 4rem;
    border-radius: 8px;
    align-items: flex-start;
}
.contact-info h3 { margin-bottom: 2rem; }
.contact-info p {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}
.contact-info i {
    color: var(--accent-color);
    font-size: 1.2rem;
    width: 20px;
}
.social-links {
    margin-top: 2rem;
}
.social-links a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: var(--light-text);
    border-radius: 50%;
    margin-right: 0.5rem;
    transition: background-color 0.3s ease;
}
.social-links a:hover {
    background-color: var(--accent-color);
    color: var(--light-text);
}
.form-group {
    margin-bottom: 1.5rem;
}
.contact-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}
.contact-form input, .contact-form textarea, .contact-form select {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--secondary-color);
    border-radius: 4px;
    font-family: var(--font-body);
}
.contact-form input:focus, .contact-form textarea:focus, .contact-form select:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(212, 160, 86, 0.3);
}

/* ======================= FOOTER ======================= */
.main-footer {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 2rem 0;
}
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}
.main-footer .logo {
    font-size: 1.5rem;
    color: var(--light-text);
}
.footer-links {
    display: flex;
    gap: 1.5rem;
}
.footer-links a {
    color: var(--secondary-color);
    font-size: 0.9rem;
}
.footer-links a:hover {
    color: var(--light-text);
}

/* ======================= RESPONSIVE DESIGN ======================= */
@media (max-width: 992px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }

    .about .container { grid-template-columns: 1fr; }
    .about-image { margin-top: 2rem; order: -1;}
    
    .project-grid { grid-template-columns: repeat(2, 1fr); }
    
    .contact-wrapper { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
    :root { --header-height: 70px; }
    
    .main-header { background-color: rgba(26, 42, 76, 0.95); } /* Always show bg on mobile */

    .main-nav {
        position: fixed;
        top: var(--header-height);
        right: -100%;
        width: 100%;
        height: calc(100vh - var(--header-height));
        background-color: var(--primary-color);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: right 0.4s ease-in-out;
    }
    .main-nav.active {
        right: 0;
    }
    .nav-links {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
    .nav-links a { font-size: 1.5rem; }

    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 1001;
    }
    .hamburger-bar {
        width: 30px;
        height: 3px;
        background-color: var(--light-text);
        border-radius: 2px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }

    .hamburger.active .hamburger-bar:nth-child(1) {
        transform: rotate(45deg);
    }
    .hamburger.active .hamburger-bar:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
    }
    .hamburger.active .hamburger-bar:nth-child(3) {
        transform: rotate(-45deg);
    }
    
    .project-grid { grid-template-columns: 1fr; }
    
    .contact-wrapper { padding: 2rem; }
    
    .footer-content { flex-direction: column; text-align: center; }
}
