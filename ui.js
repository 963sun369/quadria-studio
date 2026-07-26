// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.q-mobile-toggle');
  const mobileMenu = document.querySelector('.q-mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.q-mobile-menu a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // Industry card expand/collapse
  document.querySelectorAll('.q-industry-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.q-industry-card');
      card.classList.toggle('expanded');
    });
  });

  // Service card details
  document.querySelectorAll('.q-service-card').forEach(card => {
    const toggle = card.querySelector('.q-industry-toggle');
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        card.classList.toggle('expanded');
      });
    }
  });

  // FAQ accordion
  document.querySelectorAll('.q-faq-question').forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest('.q-faq-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.q-faq-item').forEach(q => {
        q.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Language selector
  const langBtn = document.querySelector('.q-lang-btn');
  const langDropdown = document.querySelector('.q-lang-dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    document.querySelectorAll('.q-lang-option').forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.dataset.lang;
        const flag = this.querySelector('span').textContent;

        document.querySelectorAll('.q-lang-option').forEach(o => {
          o.classList.remove('active');
        });
        this.classList.add('active');

        langBtn.innerHTML = `<span class="q-lang-flag">${flag}</span><span class="q-lang-code">${lang.toUpperCase()}</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>`;
        langDropdown.classList.remove('active');

        // TODO: Implement actual language switching
      });
    });

    document.addEventListener('click', function() {
      langDropdown.classList.remove('active');
    });
  }

  // Pricing toggle
  const pricingToggle = document.querySelector('.q-pricing-toggle');
  if (pricingToggle) {
    pricingToggle.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function() {
        const plan = this.dataset.plan;
        pricingToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.q-pricing-card').forEach(card => {
          const priceEl = card.querySelector('.q-price');
          const priceMonthly = priceEl.dataset.priceMonthly;
          const priceYearly = priceEl.dataset.priceYearly;
          const price = plan === 'monthly' ? priceMonthly : priceYearly;
          priceEl.textContent = price;
        });
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#contact') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Close dropdowns on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      langDropdown?.classList.remove('active');
      mobileMenu?.classList.remove('active');
    }
  });
});
