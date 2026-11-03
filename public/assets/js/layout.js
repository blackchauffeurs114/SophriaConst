/* CANADIAN FLOORING & RENOVATIONS (SophriaConst) — shared layout injection */
(function() {
  var page = document.body.getAttribute('data-page') || 'home';

  var NAV = [
    ['home', 'Home', 'index.html'],
    ['services', 'Services', 'services.html'],
    ['rta', 'RTA Kitchens', 'rta-kitchens.html'],
    ['projects', 'Projects', 'projects.html'],
    ['about', 'About', 'about.html'],
    ['quiz', 'Style Quiz', 'quiz.html'],
    ['estimate', 'Estimate', 'estimate.html'],
    ['contact', 'Contact', 'contact.html']
  ];

  var links = NAV.map(function(n) {
    var cls = n[0] === page ? ' class="active"' : '';
    return '<li><a href="' + n[2] + '"' + cls + '>' + n[1] + '</a></li>';
  }).join('');

  var headerEl = document.getElementById('site-header');
  if (headerEl && !headerEl.querySelector('.re-pill-container')) {
    if (page === 'home') {
      headerEl.className = 'site-header site-header--glass';
      headerEl.innerHTML =
        '<div class="site-header__inner">' +
          '<!-- Desktop Left Nav -->' +
          '<nav class="site-header__nav site-header__nav--left" aria-label="Primary navigation">' +
            '<a class="header-link active" href="index.html">Home</a>' +
            '<a class="header-link" href="services.html">Services</a>' +
            '<a class="header-link" href="projects.html">Projects</a>' +
          '</nav>' +
          '<!-- Center Brand -->' +
          '<a class="site-header__brand" aria-label="Sophria Construction" href="index.html">' +
            '<img src="assets/cfr-mark.svg" alt="SophriaConst logo" class="site-header__brand-image">' +
            '<span class="site-header__brand-text">SophriaConst<small>Flooring · Kitchens · Bathrooms</small></span>' +
          '</a>' +
          '<!-- Desktop Right Nav -->' +
          '<nav class="site-header__nav site-header__nav--right" aria-label="Secondary navigation">' +
            '<a class="header-link" href="about.html">About</a>' +
            '<a class="header-link" href="contact.html">Contact</a>' +
            '<a href="contact.html" class="button button-accent header-btn">Free Quote</a>' +
          '</nav>' +
          '<!-- Mobile Top Bar -->' +
          '<div class="site-header__mobile">' +
            '<a class="site-header__brand site-header__brand--mobile" href="index.html">' +
              '<img src="assets/cfr-mark.svg" alt="SophriaConst logo" class="site-header__brand-image">' +
              '<span class="site-header__brand-text">SophriaConst</span>' +
            '</a>' +
            '<button type="button" class="menu-button" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">' +
              '<span></span>' +
              '<span></span>' +
              '<span></span>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<!-- Mobile Drawer Menu -->' +
        '<nav class="mobile-drawer" id="mobileDrawer" aria-label="Mobile navigation">' +
          '<ul class="mobile-drawer__links">' + links + '</ul>' +
          '<div class="mobile-drawer__cta">' +
            '<a href="tel:14376054750" class="button button-outline mobile-drawer__call">📞 +1 (437) 605-4750</a>' +
            '<a href="contact.html" class="button button-accent mobile-drawer__quote">Get a Free Quote</a>' +
          '</div>' +
        '</nav>';
    } else {
      headerEl.innerHTML =
        '<div class="container nav-inner">' +
          '<a class="brand" href="index.html" aria-label="Sophria Construction home">' +
            '<img src="assets/cfr-mark.svg" alt="SophriaConst logo">' +
            '<span class="wordmark grad-silver">SophriaConst<small>Flooring · Kitchens · Bathrooms</small></span>' +
          '</a>' +
          '<ul class="nav-links" id="navLinks">' + links + '</ul>' +
          '<div class="nav-cta">' +
            '<a href="contact.html" class="btn btn-sm magnetic">Free Quote</a>' +
            '<button id="hamburger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
          '</div>' +
        '</div>';
    }
  }

  // Footer injection
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML =
      '<div class="container">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand">' +
            '<a class="brand" href="index.html"><img src="assets/cfr-mark.svg" alt="SophriaConst logo">' +
            '<span class="wordmark grad-silver">SophriaConst<small>Flooring · Kitchens · Bathrooms</small></span></a>' +
            '<p>Mississauga, Ontario\'s premier luxury renovation and flooring crew. We turn tired rooms into the reason you rush home — on time, on budget, and built to be stared at.</p>' +
            '<span class="script" style="font-size:1.6rem">Building Better Spaces</span>' +
          '</div>' +
          '<div><h4>Explore</h4><ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="projects.html">Projects</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="quiz.html">Style Quiz</a></li>' +
            '<li><a href="estimate.html">Instant Estimate</a></li>' +
          '</ul></div>' +
          '<div><h4>Services</h4><ul>' +
            '<li><a href="services.html#service-kitchen">Kitchen Remodeling</a></li>' +
            '<li><a href="services.html#service-bathroom">Bathroom Retreats</a></li>' +
            '<li><a href="services.html#service-basement">Basement Finishing</a></li>' +
            '<li><a href="services.html#service-flooring">Flooring</a></li>' +
            '<li><a href="services.html#service-painting">Painting</a></li>' +
            '<li><a href="services.html#service-stone">Quartz &amp; Quartzite</a></li>' +
          '</ul></div>' +
          '<div><h4>Resources</h4><ul>' +
            '<li><a href="faq.html">Renovation FAQs</a></li>' +
            '<li><a href="areas.html">Service Areas</a></li>' +
            '<li><a href="kitchen-renovation-cost-toronto.html">Kitchen Cost Guide</a></li>' +
            '<li><a href="bathroom-renovation-cost-toronto.html">Bathroom Cost Guide</a></li>' +
          '</ul></div>' +
          '<div><h4>Get in touch</h4><ul class="foot-contact">' +
            '<li><b>Phone </b><a href="tel:14376054750">+1 (437) 605-4750</a></li>' +
            '<li><b>Email </b><a href="mailto:estimating@sophria.ca">estimating@sophria.ca"foot-bottom">' +
          '<span>© 2026 Sophria Construction. All rights reserved.</span>' +
          '<span class="script">Building Better Spaces</span>' +
          '<span>Licensed &amp; insured · 1-year craftsmanship warranty · Since 1999</span>' +
        '</div>' +
      '</div>';
  }

  // Mobile Sticky Bar removed per re-media style

  // Header scroll state + mobile menu toggle
  var header = document.getElementById('site-header');
  var burger = document.getElementById('hamburger');
  var drawer = document.getElementById('mobileDrawer') || document.getElementById('navLinks');

  if (header) {
    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (burger && drawer) {
    if (!burger.hasAttribute('data-nav-bound')) {
      burger.setAttribute('data-nav-bound', 'true');
      burger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = drawer.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (document.body) {
          document.body.classList.toggle('menu-open', isOpen);
        }
      });

      drawer.addEventListener('click', function(e) {
        if (e.target.closest('a')) {
          drawer.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });

      document.addEventListener('click', function(e) {
        if (drawer.classList.contains('open') && !drawer.contains(e.target) && !burger.contains(e.target)) {
          drawer.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });
    }
  }
})();
