document.addEventListener('DOMContentLoaded', () => {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animations with GSAP
    gsap.from('.hero .title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero .subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.coffee-card', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.catalog',
            start: 'top 80%'
        }
    });

    gsap.from('.featured-product', {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
            trigger: '.featured',
            start: 'top 80%'
        }
    });

    gsap.from('.contact form', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Animation for order buttons
    document.querySelectorAll('.btn-order').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            gsap.to(btn, {
                scale: 1.1,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });
    });
});