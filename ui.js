
(function() {
  'use strict';
  function initNavbar() {
    const navbar = document.querySelector('.q-navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
  function initMobileMenu() {
    const toggle = document.querySelector('.q-mobile-toggle');
    const menu = document.querySelector('.q-mobile-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const isOpen = menu.classList.contains('open');
      toggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });
  }
  function initLangSwitcher() {
    const btn = document.querySelector('.q-lang-btn');
    const dropdown = document.querySelector('.q-lang-dropdown');
    if (!btn || !dropdown) return;
    const savedLang = localStorage.getItem('q-lang') || 'fr';
    updateLangDisplay(savedLang);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
    dropdown.querySelectorAll('.q-lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.dataset.lang;
        localStorage.setItem('q-lang', lang);
        updateLangDisplay(lang);
        dropdown.classList.remove('open');
      });
    });
  }
  function updateLangDisplay(lang) {
    const btn = document.querySelector('.q-lang-btn');
    if (!btn) return;
    const flags = { fr: '🇫🇷', en: '🇬🇧', es: '🇪🇸', darija: '🇲🇦' };
    btn.querySelector('.q-lang-flag').textContent = flags[lang] || '🇫🇷';
    btn.querySelector('.q-lang-code').textContent = lang;
    document.querySelectorAll('.q-lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }
  function initIndustryCards() {
    document.querySelectorAll('.q-industry-card').forEach(card => {
      card.addEventListener('click', () => {
        const wasActive = card.classList.contains('active');
        document.querySelectorAll('.q-industry-card').forEach(c => c.classList.remove('active'));
        if (!wasActive) card.classList.add('active');
      });
    });
  }
  function initServiceCards() {
    document.querySelectorAll('.q-service-card').forEach(card => {
      card.addEventListener('click', () => {
        const wasActive = card.classList.contains('active');
        document.querySelectorAll('.q-service-card').forEach(c => c.classList.remove('active'));
        if (!wasActive) card.classList.add('active');
      });
    });
  }
  function initPricingToggle() {
    const toggle = document.querySelector('.q-pricing-toggle');
    if (!toggle) return;
    const monthlyBtn = toggle.querySelector('[data-plan="monthly"]');
    const yearlyBtn = toggle.querySelector('[data-plan="yearly"]');
    if (!monthlyBtn || !yearlyBtn) return;
    function updatePrices(isYearly) {
      document.querySelectorAll('[data-price-monthly]').forEach(el => {
        const monthly = el.dataset.priceMonthly;
        const yearly = el.dataset.priceYearly;
        if (monthly && yearly) el.textContent = isYearly ? yearly : monthly;
      });
      document.querySelectorAll('.q-price-note').forEach(el => {
        el.style.display = isYearly ? 'block' : 'none';
      });
    }
    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('active'); yearlyBtn.classList.remove('active'); updatePrices(false);
    });
    yearlyBtn.addEventListener('click', () => {
      yearlyBtn.classList.add('active'); monthlyBtn.classList.remove('active'); updatePrices(true);
    });
  }
  function initFAQ() {
    document.querySelectorAll('.q-faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.q-faq-item');
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.q-faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
      });
    });
  }
  function injectNavbar() {
    if (document.querySelector('.q-navbar')) return;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isIndex = currentPage === 'index.html' || currentPage === '';
    const prefix = isIndex ? '' : 'index.html';
    const navbarHTML = '<header class="q-navbar"><div class="q-navbar-inner"><a href="' + prefix + '" class="q-logo"><div class="q-logo-mark">Q</div><span class="q-logo-text">Quadria<span>Studio</span></span></a><nav class="q-nav-links"><a href="' + prefix + '#services">Services</a><a href="' + prefix + '#metiers">Metiers</a><a href="' + prefix + '#tarifs">Tarifs</a><a href="' + prefix + '#faq">FAQ</a></nav><div class="q-nav-right"><div style="position:relative;"><button class="q-lang-btn" type="button"><span class="q-lang-flag">🇫🇷</span><span class="q-lang-code">fr</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></button><div class="q-lang-dropdown"><button class="q-lang-option active" data-lang="fr" type="button"><span>🇫🇷</span> FR</button><button class="q-lang-option" data-lang="en" type="button"><span>🇬🇧</span> EN</button><button class="q-lang-option" data-lang="es" type="button"><span>🇪🇸</span> ES</button><button class="q-lang-option" data-lang="darija" type="button"><span>🇲🇦</span> DARIJA</button></div></div><a href="' + prefix + '#contact" class="q-cta-btn">Demonstration</a></div><button class="q-mobile-toggle" type="button" aria-label="Menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button></div><div class="q-mobile-menu"><a href="' + prefix + '#services">Services</a><a href="' + prefix + '#metiers">Metiers</a><a href="' + prefix + '#tarifs">Tarifs</a><a href="' + prefix + '#faq">FAQ</a><a href="' + prefix + '#contact" class="q-cta-btn" style="display:block;text-align:center;margin-top:12px;">Demonstration gratuite</a></div></header>';
    const div = document.createElement('div');
    div.innerHTML = navbarHTML;
    document.body.insertBefore(div.firstElementChild, document.body.firstChild);
    document.body.style.paddingTop = '64px';
  }
  function injectFooter() {
    if (document.querySelector('.q-footer')) return;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isIndex = currentPage === 'index.html' || currentPage === '';
    const prefix = isIndex ? '' : 'index.html';
    const footerHTML = '<footer class="q-footer"><div class="container"><div class="q-footer-grid"><div><a href="' + prefix + '" class="q-footer-brand"><div class="q-logo-mark">Q</div><span style="font-weight:600;">Quadria</span><span style="color:var(--text-muted);">Studio</span></a><p>Solutions digitales cle-en-main pour les metiers de proximite.</p></div><div><h4>Produit</h4><ul class="q-footer-links"><li><a href="' + prefix + '#services">Agents IA WhatsApp</a></li><li><a href="' + prefix + '#services">Reservation en ligne</a></li><li><a href="' + prefix + '#services">Sites vitrines</a></li><li><a href="' + prefix + '#services">Dashboard</a></li></ul></div><div><h4>Metiers</h4><ul class="q-footer-links"><li><a href="' + prefix + '#metiers">Salon de beaute</a></li><li><a href="' + prefix + '#metiers">Garage auto</a></li><li><a href="' + prefix + '#metiers">Agence immobiliere</a></li><li><a href="' + prefix + '#metiers">Clinique veterinaire</a></li></ul></div><div><h4>Ressources</h4><ul class="q-footer-links"><li><a href="#">Documentation</a></li><li><a href="#">Blog</a></li><li><a href="#">Temoignages</a></li><li><a href="#">Statut systeme</a></li></ul></div><div><h4>Legal</h4><ul class="q-footer-links"><li><a href="#">Mentions legales</a></li><li><a href="#">CGV</a></li><li><a href="#">Confidentialite</a></li><li><a href="#">Cookies</a></li></ul></div></div><div class="q-footer-bottom"><p>&copy; ' + new Date().getFullYear() + ' Quadria Studio. Tous droits reserves.</p><div class="q-footer-social"><a href="#" aria-label="Twitter"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a><a href="#" aria-label="LinkedIn"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div></div></div></footer>';
    const div = document.createElement('div');
    div.innerHTML = footerHTML;
    document.body.appendChild(div.firstElementChild);
  }
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initLangSwitcher();
    initIndustryCards();
    initServiceCards();
    initPricingToggle();
    initFAQ();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage !== 'index.html' && currentPage !== '') {
      injectNavbar();
      injectFooter();
    }
  });
})();

