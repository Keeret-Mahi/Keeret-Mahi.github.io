(function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => {
      const isOpen = hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
    });

    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Close menu if viewport becomes desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });
  })();