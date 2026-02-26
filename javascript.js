
  // Activation automatique à l'entrée (onload)
  // Séquence : reveal -> spark -> glow -> affichage des autres éléments
  (function introPowerOn(){
    const name = document.getElementById('nameText');
    const wrap = document.getElementById('nameWrap');
    const curtain = document.getElementById('curtain');
    const navbar = document.getElementById('navbar');
    const mainPhoto = document.getElementById('mainPhoto');
    const infoLeft = document.getElementById('infoLeft');
    const infoRight = document.getElementById('infoRight');
    const portfolioLabel = document.getElementById('portfolioLabel');

    // small helper to respect reduced-motion
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(reduce){
      name.classList.add('revealed','glow');
      curtain.classList.add('on');
      navbar.classList.add('show');
      mainPhoto.classList.add('show');
      infoLeft.classList.add('show');
      infoRight.classList.add('show');
      portfolioLabel.classList.add('show');
      return;
    }

    // Sequence timings (tu peux ajuster)
    const revealDelay = 180;      // délai avant reveal (ms)
    const sparkDelay = 550;       // délai avant spark (ms after reveal starts)
    const glowDelay = 950;        // délai pour activer glow (ms after reveal starts)
    const contentDelay = 1200;    // délai pour afficher le contenu (ms after reveal starts)

    // Start small curtain effect
    setTimeout(()=> curtain.classList.add('on'), 80);

    // Reveal (scaleX from 0 -> 1)
    setTimeout(()=> {
      name.classList.add('revealed');
    }, revealDelay);

    // spark sweep
    setTimeout(()=> {
      // add spark class which animates ::after
      wrap.classList.add('spark');
      // remove spark after animation so it can retrigger later if you want
      setTimeout(()=> wrap.classList.remove('spark'), 1200);
    }, revealDelay + sparkDelay);

    // add glow
    setTimeout(()=> {
      name.classList.add('glow');
    }, revealDelay + glowDelay);

    // show all content (photo, info, navbar, portfolio label) après l'animation du nom
    setTimeout(()=> {
      mainPhoto.classList.add('show');

      // Petit délai entre chaque élément pour un effet cascade
      setTimeout(()=> {
        infoLeft.classList.add('show');
        infoRight.classList.add('show');
      }, 150);

      setTimeout(()=> {
        navbar.classList.add('show');
      }, 300);

      setTimeout(()=> {
        portfolioLabel.classList.add('show');
      }, 450);
    }, revealDelay + contentDelay);

    // optional: if you want to enable re-trigger on click:
    // wrap.addEventListener('click', replay);
    function replay(){
      name.classList.remove('revealed','glow');
      navbar.classList.remove('show');
      mainPhoto.classList.remove('show');
      infoLeft.classList.remove('show');
      infoRight.classList.remove('show');
      portfolioLabel.classList.remove('show');

      setTimeout(()=> {
        name.classList.add('revealed');
        wrap.classList.add('spark');
        setTimeout(()=> wrap.classList.remove('spark'), 1200);
        setTimeout(()=> name.classList.add('glow'), 700);

        setTimeout(()=> {
          mainPhoto.classList.add('show');
          setTimeout(()=> {
            infoLeft.classList.add('show');
            infoRight.classList.add('show');
          }, 150);
          setTimeout(()=> navbar.classList.add('show'), 300);
          setTimeout(()=> portfolioLabel.classList.add('show'), 450);
        }, 900);
      }, 60);
    }

    // expose replay to window for dev
    window.replayIntro = replay;

  })();

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

  (function scrollAnimations(){
    // Intersection Observer pour détecter les éléments visibles
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Déclenche quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionnel : arrêter d'observer après l'animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observer tous les éléments avec les classes d'animation
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

  })();

  // ============================================
  // PROJECT CARDS FLIP (touch support)
  // ============================================

  (function projectCardsFlip(){
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!isTouchDevice) return;

    const cards = document.querySelectorAll('.project-card-wrapper');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        // Close other open cards
        cards.forEach(c => { if (c !== card) c.classList.remove('flipped'); });
        this.classList.toggle('flipped');
      });
    });
  })();

  // ============================================
  // SKILL CARDS EXPAND/COLLAPSE
  // ============================================

  (function skillCardsToggle(){
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
      card.addEventListener('click', function() {
        // Toggle la classe expanded
        this.classList.toggle('expanded');
      });
    });
  })();

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================

  (function backToTopButton(){
    const backToTop = document.getElementById('backToTop');

    if (!backToTop) {
      return;
    }

    // Fonction pour vérifier et afficher/cacher le bouton
    function checkScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPosition > 300) {
        if (!backToTop.classList.contains('show')) {
          backToTop.classList.add('show');
        }
      } else {
        if (backToTop.classList.contains('show')) {
          backToTop.classList.remove('show');
        }
      }
    }

    // Détecter le scroll avec plusieurs méthodes pour compatibilité maximale
    window.addEventListener('scroll', checkScroll, { passive: true });
    document.addEventListener('scroll', checkScroll, { passive: true });
    setInterval(checkScroll, 100); // Fallback si les événements ne fonctionnent pas

    // Vérifier la position au chargement
    checkScroll();

    // Remonter en haut au clic
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // Scroll smooth
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      // Fallback pour assurer le scroll
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
    });
  })();

  // ============================================
  // LANGUAGE SELECTOR
  // ============================================

  (function languageSelector(){
    const langButtons = document.querySelectorAll('.lang-btn');

    // Function to apply translations
    function applyTranslations(lang) {
      if (!translations || !translations[lang]) {
        console.error('Translations not found for language:', lang);
        return;
      }

      const trans = translations[lang];

      // Update all elements with data-translate attribute
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (trans[key]) {
          element.textContent = trans[key];
        }
      });

      // Update all placeholders with data-translate-placeholder attribute
      document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (trans[key]) {
          element.placeholder = trans[key];
        }
      });

      // Update all titles with data-translate-title attribute
      document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        if (trans[key]) {
          element.title = trans[key];
        }
      });

      // Update HTML lang attribute
      document.documentElement.lang = lang;

      // Store preference
      localStorage.setItem('preferredLanguage', lang);
    }

    langButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        // Get selected language and apply translations
        const selectedLang = this.getAttribute('data-lang');
        applyTranslations(selectedLang);
      });
    });

    // Load saved language preference or default to French
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    const savedButton = document.querySelector(`[data-lang="${savedLang}"]`);
    if (savedButton) {
      langButtons.forEach(btn => btn.classList.remove('active'));
      savedButton.classList.add('active');
      applyTranslations(savedLang);
    }
  })();
