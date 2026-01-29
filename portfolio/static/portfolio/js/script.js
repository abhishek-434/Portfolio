document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            nav.style.display = nav.classList.contains('nav-active') ? 'flex' : 'none';
            if (window.innerWidth > 768) nav.style.display = 'flex'; // Reset on resize logic needed ideally, but CSS handles standard view
            
            // Burger Animation
            burger.classList.toggle('toggle');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // 2. Typing Effect
    const roleElement = document.querySelector('.typing-text');
    if (roleElement) {
        const roles = ["Python Developer", "Django Expert", "Web Designer", "Problem Solver"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                roleElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                roleElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Header Scroll Effect
    const navBar = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navBar.style.background = 'rgba(5, 5, 5, 0.95)';
            navBar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            navBar.style.background = 'rgba(5, 5, 5, 0.8)';
            navBar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }
    });

    // 5. 3D Tilt Effect for Hero Card
    const tiltElement = document.querySelector('.tilt-element');
    if (tiltElement) {
        tiltElement.addEventListener('mousemove', (e) => {
            const rect = tiltElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPct = x / rect.width;
            const yPct = y / rect.height;
            
            const xRotation = (yPct - 0.5) * 20; // -10 to 10 deg
            const yRotation = (0.5 - xPct) * 20; // -10 to 10 deg
            
            tiltElement.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
        });
        
        tiltElement.addEventListener('mouseleave', () => {
            tiltElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }
});
