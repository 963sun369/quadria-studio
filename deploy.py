import os
import shutil

PROJECT = r'C:\Users\slaoui\Desktop\quadria-studio'

def main():
    print('Deploiement Quadria Studio v2')
    print('  Dossier : ' + PROJECT)
    print()

    # Sauvegarde
    bak = os.path.join(PROJECT, '_backup_v1')
    if not os.path.exists(bak):
        shutil.copytree(PROJECT, bak, ignore=shutil.ignore_patterns('_backup_*', '_v2_*'))
        print('  Sauvegarde v1 : _backup_v1')

    # theme.css
    with open(os.path.join(PROJECT, 'theme.css'), 'w', encoding='utf-8') as f:
        f.write(CSS)
    print('  theme.css')

    # ui.js
    with open(os.path.join(PROJECT, 'ui.js'), 'w', encoding='utf-8') as f:
        f.write(JS)
    print('  ui.js')

    # index.html
    with open(os.path.join(PROJECT, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(HTML)
    print('  index.html')

    # Injection dans pages existantes
    print()
    print('  Injection sur pages existantes...')
    pages = ['audit.html', 'boutique.html', 'conseil.html', 'growth.html',
             'journal.html', 'statut.html', 'studio.html', 'systemes.html', 'vault.html']
    css_line = '  <link rel="stylesheet" href="theme.css">'
    js_line = '  <script src="ui.js" defer></script>'
    marker = '</head>'
    for page in pages:
        path = os.path.join(PROJECT, page)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            if 'theme.css' not in content:
                content = content.replace(marker, css_line + '\n' + js_line + '\n' + marker)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print('    OK ' + page)
            else:
                print('    OK ' + page + ' (deja a jour)')
        else:
            print('    Page non trouvee : ' + page)

    print()
    print('=' * 40)
    print('  Deploiement v2 termine !')
    print('=' * 40)
    print()
    print('Prochaines etapes :')
    print('  1. git add .')
    print('  2. git commit -m "v2: redesign complet"')
    print('  3. git push origin master')
    print()

CSS = '''
/* QUADRIA STUDIO v2 — Design System */
:root {
  --bg: #0B0F19; --bg-surface: #111827; --bg-elevated: #1A2235;
  --text: #E2E8F0; --text-muted: #94A3B8; --text-dim: #64748B;
  --border: #1E293B; --border-strong: #334155;
  --primary: #14B8A6; --primary-light: #2DD4BF; --primary-dark: #0D9488;
  --beauty: #F43F5E; --garage: #F59E0B; --realestate: #3B82F6; --veterinary: #10B981;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-full: 9999px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
body { font-family: var(--font-sans); background: var(--bg); color: var(--text); line-height: 1.6; min-height: 100vh; overflow-x: hidden; }
::selection { background: rgba(20,184,166,0.3); color: var(--text); }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.text-gradient { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, #5EEAD4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.text-center { text-align: center; }

/* NAVBAR */
.q-navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 64px; background: transparent; border-bottom: 1px solid transparent; transition: all 0.3s ease; }
.q-navbar.scrolled { background: rgba(11,15,25,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom-color: var(--border); }
.q-navbar-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.q-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: var(--text); }
.q-logo-mark { width: 32px; height: 32px; background: var(--primary); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: var(--bg); font-weight: 700; font-size: 14px; }
.q-logo-text { font-weight: 600; font-size: 18px; letter-spacing: -0.02em; }
.q-logo-text span { color: var(--text-muted); font-weight: 400; }
.q-nav-links { display: flex; align-items: center; gap: 32px; }
.q-nav-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; position: relative; transition: color 0.2s; }
.q-nav-links a:hover { color: var(--text); }
.q-nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--primary); transition: width 0.3s ease; }
.q-nav-links a:hover::after { width: 100%; }
.q-nav-right { display: flex; align-items: center; gap: 16px; }
.q-lang-btn { display: flex; align-items: center; gap: 6px; background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-muted); padding: 6px 12px; border-radius: var(--radius-md); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
.q-lang-btn:hover { border-color: var(--border-strong); color: var(--text); }
.q-lang-dropdown { position: absolute; top: calc(100% + 8px); right: 0; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 6px; min-width: 160px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); opacity: 0; visibility: hidden; transform: translateY(-8px); transition: all 0.2s ease; z-index: 1001; }
.q-lang-dropdown.open { opacity: 1; visibility: visible; transform: translateY(0); }
.q-lang-option { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px 12px; border: none; background: none; color: var(--text-muted); font-size: 13px; font-weight: 500; border-radius: var(--radius-md); cursor: pointer; transition: all 0.15s; text-transform: uppercase; letter-spacing: 0.05em; font-family: inherit; }
.q-lang-option:hover, .q-lang-option.active { background: rgba(20,184,166,0.1); color: var(--primary); }
.q-cta-btn { background: var(--primary); color: var(--bg); text-decoration: none; padding: 8px 20px; border-radius: var(--radius-md); font-size: 13px; font-weight: 600; transition: all 0.2s; border: none; cursor: pointer; }
.q-cta-btn:hover { background: var(--primary-light); }
.q-mobile-toggle { display: none; background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; }
.q-mobile-menu { display: none; position: absolute; top: 64px; left: 0; right: 0; background: var(--bg-surface); border-bottom: 1px solid var(--border); padding: 16px; }
.q-mobile-menu.open { display: block; }
.q-mobile-menu a { display: block; padding: 12px 16px; color: var(--text-muted); text-decoration: none; font-size: 14px; border-radius: var(--radius-md); transition: all 0.2s; }
.q-mobile-menu a:hover { background: var(--bg-elevated); color: var(--text); }

/* MARQUEE */
.q-marquee-wrap { position: fixed; top: 64px; left: 0; right: 0; z-index: 999; background: var(--primary); padding: 8px 0; overflow: hidden; white-space: nowrap; }
.q-marquee-track { display: inline-flex; animation: marquee-scroll 25s linear infinite; }
.q-marquee-item { display: inline-flex; align-items: center; gap: 8px; color: var(--bg); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 24px; }
.q-marquee-dot { width: 4px; height: 4px; background: rgba(11,15,25,0.5); border-radius: 50%; }
@keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* HERO */
.q-hero { position: relative; padding: 160px 0 80px; overflow: hidden; }
.q-hero-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 800px; height: 600px; background: radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%); pointer-events: none; }
.q-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(20,184,166,0.1); border: 1px solid rgba(20,184,166,0.2); color: var(--primary); padding: 6px 16px; border-radius: var(--radius-full); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px; }
.q-pulse { width: 6px; height: 6px; background: var(--primary); border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.q-hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; max-width: 800px; margin: 0 auto 20px; }
.q-hero p { font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-muted); max-width: 600px; margin: 0 auto 32px; line-height: 1.6; }
.q-hero-btns { display: flex; gap: 16px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
.q-btn-primary { background: var(--primary); color: var(--bg); text-decoration: none; padding: 14px 32px; border-radius: var(--radius-lg); font-size: 14px; font-weight: 600; transition: all 0.2s; border: none; cursor: pointer; }
.q-btn-primary:hover { background: var(--primary-light); box-shadow: 0 0 40px -10px rgba(20,184,166,0.4); }
.q-btn-secondary { background: var(--bg-surface); color: var(--text); text-decoration: none; padding: 14px 32px; border-radius: var(--radius-lg); font-size: 14px; font-weight: 600; border: 1px solid var(--border); transition: all 0.2s; cursor: pointer; }
.q-btn-secondary:hover { border-color: var(--border-strong); }
.q-social-proof { display: flex; align-items: center; justify-content: center; gap: 16px; color: var(--text-dim); font-size: 13px; }
.q-avatars { display: flex; }
.q-avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--bg-elevated); border: 2px solid var(--bg); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; color: var(--text-muted); margin-left: -10px; }
.q-avatar:first-child { margin-left: 0; }

/* SECTIONS */
.q-section { padding: 96px 0; }
.q-section-label { display: block; color: var(--primary); font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
.q-section h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; line-height: 1.2; margin-bottom: 12px; }
.q-section-desc { color: var(--text-muted); font-size: 1.1rem; max-width: 600px; margin: 0 auto 48px; }

/* INDUSTRIES */
.q-industries-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.q-industry-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; text-align: left; cursor: pointer; transition: all 0.3s ease; position: relative; overflow: hidden; }
.q-industry-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
.q-industry-card.beauty.active { border-color: var(--beauty); box-shadow: 0 0 40px -10px rgba(244,63,94,0.25); }
.q-industry-card.garage.active { border-color: var(--garage); box-shadow: 0 0 40px -10px rgba(245,158,11,0.25); }
.q-industry-card.realestate.active { border-color: var(--realestate); box-shadow: 0 0 40px -10px rgba(59,130,246,0.25); }
.q-industry-card.veterinary.active { border-color: var(--veterinary); box-shadow: 0 0 40px -10px rgba(16,185,129,0.25); }
.q-industry-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.q-industry-icon { width: 44px; height: 44px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; }
.q-industry-icon.beauty { background: rgba(244,63,94,0.1); color: var(--beauty); }
.q-industry-icon.garage { background: rgba(245,158,11,0.1); color: var(--garage); }
.q-industry-icon.realestate { background: rgba(59,130,246,0.1); color: var(--realestate); }
.q-industry-icon.veterinary { background: rgba(16,185,129,0.1); color: var(--veterinary); }
.q-industry-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: var(--radius-sm); }
.q-industry-tag.beauty { background: rgba(244,63,94,0.1); color: var(--beauty); }
.q-industry-tag.garage { background: rgba(245,158,11,0.1); color: var(--garage); }
.q-industry-tag.realestate { background: rgba(59,130,246,0.1); color: var(--realestate); }
.q-industry-tag.veterinary { background: rgba(16,185,129,0.1); color: var(--veterinary); }
.q-industry-card h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 8px; }
.q-industry-card p { color: var(--text-muted); font-size: 14px; line-height: 1.5; margin-bottom: 16px; }
.q-industry-features { display: flex; flex-wrap: wrap; gap: 8px; padding-top: 16px; border-top: 1px solid var(--border); max-height: 0; overflow: hidden; opacity: 0; transition: all 0.4s ease; }
.q-industry-card.active .q-industry-features { max-height: 200px; opacity: 1; }
.q-chip { font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: var(--radius-sm); }
.q-chip.beauty { background: rgba(244,63,94,0.1); color: var(--beauty); }
.q-chip.garage { background: rgba(245,158,11,0.1); color: var(--garage); }
.q-chip.realestate { background: rgba(59,130,246,0.1); color: var(--realestate); }
.q-chip.veterinary { background: rgba(16,185,129,0.1); color: var(--veterinary); }
.q-industry-toggle { display: flex; align-items: center; gap: 6px; margin-top: 16px; font-size: 13px; color: var(--text-dim); font-weight: 500; }
.q-industry-toggle svg { transition: transform 0.3s; }
.q-industry-card.active .q-industry-toggle svg { transform: rotate(180deg); }

/* SERVICES */
.q-services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.q-service-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; text-align: left; cursor: pointer; transition: all 0.3s ease; }
.q-service-card:hover { border-color: var(--border-strong); }
.q-service-card.active { background: var(--bg-elevated); border-color: rgba(20,184,166,0.3); box-shadow: 0 0 40px -10px rgba(20,184,166,0.2); }
.q-service-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.q-service-num { font-size: 3rem; font-weight: 700; color: var(--border-strong); line-height: 1; }
.q-service-card:hover .q-service-num { color: rgba(20,184,166,0.3); }
.q-service-status { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 10px; border-radius: var(--radius-sm); }
.q-service-status.running { background: rgba(20,184,166,0.1); color: var(--primary); }
.q-service-status.shipped { background: rgba(245,158,11,0.1); color: var(--garage); }
.q-service-status.deployed { background: rgba(59,130,246,0.1); color: var(--realestate); }
.q-service-status.live { background: rgba(16,185,129,0.1); color: var(--veterinary); }
.q-service-card h3 { font-size: 1.4rem; font-weight: 600; margin-bottom: 12px; }
.q-service-card p { color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; }
.q-service-details { max-height: 0; overflow: hidden; opacity: 0; transition: all 0.4s ease; }
.q-service-card.active .q-service-details { max-height: 300px; opacity: 1; }
.q-service-details ul { list-style: none; padding-top: 16px; border-top: 1px solid var(--border); }
.q-service-details li { display: flex; align-items: center; gap: 12px; padding: 6px 0; color: var(--text-muted); font-size: 14px; }
.q-service-details li::before { content: ''; width: 5px; height: 5px; background: var(--primary); border-radius: 50%; flex-shrink: 0; }

/* PRICING */
.q-pricing-toggle { display: inline-flex; align-items: center; gap: 4px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 5px; margin-bottom: 40px; }
.q-pricing-toggle button { padding: 10px 24px; border-radius: var(--radius-md); border: none; background: none; color: var(--text-muted); font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
.q-pricing-toggle button.active { background: var(--primary); color: var(--bg); }
.q-pricing-badge { font-size: 10px; font-weight: 700; background: rgba(11,15,25,0.2); padding: 2px 8px; border-radius: var(--radius-sm); margin-left: 6px; }
.q-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.q-pricing-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; position: relative; transition: all 0.3s ease; }
.q-pricing-card:hover { border-color: var(--border-strong); transform: translateY(-4px); box-shadow: 0 12px 40px -12px rgba(0,0,0,0.5); }
.q-pricing-card.popular { background: var(--bg-elevated); border-color: rgba(20,184,166,0.3); box-shadow: 0 0 40px -10px rgba(20,184,166,0.2); }
.q-pricing-popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary); color: var(--bg); font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 16px; border-radius: var(--radius-full); }
.q-pricing-card h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 4px; }
.q-pricing-card .desc { color: var(--text-muted); font-size: 13px; margin-bottom: 24px; }
.q-price { font-size: 2.5rem; font-weight: 700; margin-bottom: 4px; }
.q-price-suffix { color: var(--text-muted); font-size: 14px; }
.q-price-note { color: var(--text-dim); font-size: 12px; margin-bottom: 24px; }
.q-pricing-features { list-style: none; margin-bottom: 32px; }
.q-pricing-features li { display: flex; align-items: flex-start; gap: 12px; padding: 8px 0; color: var(--text-muted); font-size: 14px; }
.q-pricing-features li::before { content: '✓'; color: var(--primary); font-weight: 700; flex-shrink: 0; }
.q-pricing-cta { display: block; text-align: center; padding: 12px; border-radius: var(--radius-lg); font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
.q-pricing-cta.primary { background: var(--primary); color: var(--bg); }
.q-pricing-cta.primary:hover { background: var(--primary-light); }
.q-pricing-cta.secondary { background: var(--bg-elevated); color: var(--text); border: 1px solid var(--border); }
.q-pricing-cta.secondary:hover { border-color: var(--border-strong); }

/* FAQ */
.q-faq-list { max-width: 700px; margin: 0 auto; }
.q-faq-item { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 12px; overflow: hidden; transition: all 0.3s ease; }
.q-faq-item.active { background: var(--bg-elevated); border-color: rgba(20,184,166,0.3); }
.q-faq-question { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 24px; background: none; border: none; color: var(--text); font-size: 15px; font-weight: 500; text-align: left; cursor: pointer; font-family: inherit; }
.q-faq-icon { width: 32px; height: 32px; border-radius: var(--radius-md); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-left: 16px; transition: all 0.3s ease; color: var(--text-muted); }
.q-faq-item.active .q-faq-icon { background: var(--primary); border-color: var(--primary); color: var(--bg); transform: rotate(180deg); }
.q-faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; }
.q-faq-item.active .q-faq-answer { max-height: 300px; }
.q-faq-answer-inner { padding: 0 24px 24px; color: var(--text-muted); line-height: 1.6; font-size: 14px; }

/* FOOTER */
.q-footer { background: var(--bg-surface); border-top: 1px solid var(--border); padding: 64px 0 32px; }
.q-footer-grid { display: grid; grid-template-columns: 2fr repeat(4, 1fr); gap: 32px; margin-bottom: 48px; }
.q-footer-brand { display: flex; align-items: center; gap: 8px; text-decoration: none; color: var(--text); margin-bottom: 12px; }
.q-footer-brand p { color: var(--text-muted); font-size: 14px; line-height: 1.5; }
.q-footer h4 { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text); margin-bottom: 16px; }
.q-footer-links { list-style: none; }
.q-footer-links li { margin-bottom: 12px; }
.q-footer-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; transition: color 0.2s; }
.q-footer-links a:hover { color: var(--text); }
.q-footer-bottom { display: flex; align-items: center; justify-content: space-between; padding-top: 32px; border-top: 1px solid var(--border); }
.q-footer-bottom p { color: var(--text-dim); font-size: 12px; }
.q-footer-social { display: flex; gap: 20px; }
.q-footer-social a { color: var(--text-dim); transition: color 0.2s; }
.q-footer-social a:hover { color: var(--text); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .q-nav-links, .q-nav-right .q-cta-btn { display: none; }
  .q-mobile-toggle { display: block; }
  .q-industries-grid, .q-services-grid { grid-template-columns: 1fr; }
  .q-pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
  .q-footer-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .q-hero-btns { flex-direction: column; width: 100%; }
  .q-btn-primary, .q-btn-secondary { width: 100%; text-align: center; }
  .q-footer-grid { grid-template-columns: 1fr; }
  .q-footer-bottom { flex-direction: column; gap: 16px; }
}

'''

JS = '''
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

'''

HTML = '''
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quadria Studio — Solutions digitales pour les metiers de proximite</title>
<meta name="description" content="WhatsApp IA, reservation en ligne, sites vitrines et dashboards sur mesure pour salons de beaute, garages, agences immobilieres et cliniques veterinaires.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="theme.css">
</head>
<body>

<header class="q-navbar">
  <div class="q-navbar-inner">
    <a href="index.html" class="q-logo">
      <div class="q-logo-mark">Q</div>
      <span class="q-logo-text">Quadria<span>Studio</span></span>
    </a>
    <nav class="q-nav-links">
      <a href="#services">Services</a>
      <a href="#metiers">Metiers</a>
      <a href="#tarifs">Tarifs</a>
      <a href="#faq">FAQ</a>
    </nav>
    <div class="q-nav-right">
      <div style="position:relative;">
        <button class="q-lang-btn" type="button">
          <span class="q-lang-flag">&#127479;&#127482;</span>
          <span class="q-lang-code">fr</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="q-lang-dropdown">
          <button class="q-lang-option active" data-lang="fr" type="button"><span>&#127479;&#127482;</span> FR</button>
          <button class="q-lang-option" data-lang="en" type="button"><span>&#127468;&#127463;</span> EN</button>
          <button class="q-lang-option" data-lang="es" type="button"><span>&#127466;&#127480;</span> ES</button>
          <button class="q-lang-option" data-lang="darija" type="button"><span>&#127474;&#127462;</span> DARIJA</button>
        </div>
      </div>
      <a href="#contact" class="q-cta-btn">Demonstration</a>
    </div>
    <button class="q-mobile-toggle" type="button" aria-label="Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
  <div class="q-mobile-menu">
    <a href="#services">Services</a>
    <a href="#metiers">Metiers</a>
    <a href="#tarifs">Tarifs</a>
    <a href="#faq">FAQ</a>
    <a href="#contact" class="q-cta-btn" style="display:block;text-align:center;margin-top:12px;">Demonstration gratuite</a>
  </div>
</header>

<div class="q-marquee-wrap">
  <div class="q-marquee-track">
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>24h/24</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>FR &#183; EN &#183; ES &#183; DARIJA</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>ZERO DEMANDE PERDUE</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>DEVIS EN 2 MINUTES</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>SANS CARTE BANCAIRE</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>14 JOURS D&#39;ESSAI</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>24h/24</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>FR &#183; EN &#183; ES &#183; DARIJA</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>ZERO DEMANDE PERDUE</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>DEVIS EN 2 MINUTES</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>SANS CARTE BANCAIRE</span>
    <span class="q-marquee-item"><span class="q-marquee-dot"></span>14 JOURS D&#39;ESSAI</span>
  </div>
</div>

<section class="q-hero">
  <div class="q-hero-glow"></div>
  <div class="container text-center">
    <div class="q-badge">
      <span class="q-pulse"></span>
      Nouveau : Agents IA WhatsApp multilingues
    </div>
    <h1>Votre metier de proximite,<br><span class="text-gradient">propulse par l&#39;IA</span></h1>
    <p>WhatsApp intelligent, reservation en ligne, site vitrine et dashboard &#8212; tout ce qu&#39;il faut pour attirer, convertir et fideliser vos clients, sans toucher une ligne de code.</p>
    <div class="q-hero-btns">
      <a href="#demo" class="q-btn-primary">Voir la demo en 2 minutes</a>
      <a href="#metiers" class="q-btn-secondary">Choisir mon metier</a>
    </div>
    <div class="q-social-proof">
      <div class="q-avatars">
        <div class="q-avatar">A</div>
        <div class="q-avatar">B</div>
        <div class="q-avatar">C</div>
        <div class="q-avatar">D</div>
      </div>
      <p><strong style="color:var(--text);">+120 metiers</strong> deja equipes <span style="margin:0 12px;color:var(--border-strong);">|</span> Note moyenne <strong style="color:var(--text);">4.9/5</strong></p>
    </div>
  </div>
</section>

<section id="metiers" class="q-section">
  <div class="container text-center">
    <span class="q-section-label">Choisissez votre univers</span>
    <h2>Une solution pensee pour <span class="text-gradient">votre metier</span></h2>
    <p class="q-section-desc">Pas de template generique. Chaque secteur a ses specificites, ses regles et ses clients. On s&#39;adapte a vous.</p>
    <div class="q-industries-grid">
      <div class="q-industry-card beauty">
        <div class="q-industry-header">
          <div class="q-industry-icon beauty">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.077-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-4.293 0l1.414-1.415a.75.75 0 111.06 1.06l-1.414 1.415zm5.048-4.025a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-4.293 0l1.414-1.415a.75.75 0 111.06 1.06l-1.414 1.415z"/><path d="M12 20.25c0-1.5.75-2.25 2.25-2.25h3a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-.75z"/></svg>
          </div>
          <span class="q-industry-tag beauty">beauty</span>
        </div>
        <h3>Salon de beaute &amp; Coiffure</h3>
        <p>Reservation 24h/24, rappels auto, paiement d&#39;acompte, avis clients.</p>
        <div class="q-industry-features">
          <span class="q-chip beauty">Reservation en ligne</span>
          <span class="q-chip beauty">Rappels SMS/WhatsApp</span>
          <span class="q-chip beauty">Paiement acompte</span>
          <span class="q-chip beauty">Fiche client</span>
        </div>
        <div class="q-industry-toggle">Decouvrir les fonctionnalites <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
      <div class="q-industry-card garage">
        <div class="q-industry-header">
          <div class="q-industry-icon garage">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>
          </div>
          <span class="q-industry-tag garage">garage</span>
        </div>
        <h3>Garage &amp; Auto</h3>
        <p>Devis instantanes, suivi reparations, pieces detachees, facturation.</p>
        <div class="q-industry-features">
          <span class="q-chip garage">Devis WhatsApp</span>
          <span class="q-chip garage">Suivi reparations</span>
          <span class="q-chip garage">Stock pieces</span>
          <span class="q-chip garage">Factures auto</span>
        </div>
        <div class="q-industry-toggle">Decouvrir les fonctionnalites <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
      <div class="q-industry-card realestate">
        <div class="q-industry-header">
          <div class="q-industry-icon realestate">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>
          </div>
          <span class="q-industry-tag realestate">immo</span>
        </div>
        <h3>Agence immobiliere</h3>
        <p>Visites virtuelles, matching IA, mandats digitaux, suivi acquereurs.</p>
        <div class="q-industry-features">
          <span class="q-chip realestate">Matching IA</span>
          <span class="q-chip realestate">Visites virtuelles</span>
          <span class="q-chip realestate">Mandats digitaux</span>
          <span class="q-chip realestate">CRM integre</span>
        </div>
        <div class="q-industry-toggle">Decouvrir les fonctionnalites <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
      <div class="q-industry-card veterinary">
        <div class="q-industry-header">
          <div class="q-industry-icon veterinary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/></svg>
          </div>
          <span class="q-industry-tag veterinary">véto</span>
        </div>
        <h3>Clinique veterinaire</h3>
        <p>Dossiers patients, rappels vaccins, teleconsultation, gestion stocks.</p>
        <div class="q-industry-features">
          <span class="q-chip veterinary">Dossier patient</span>
          <span class="q-chip veterinary">Rappels vaccins</span>
          <span class="q-chip veterinary">Teleconsultation</span>
          <span class="q-chip veterinary">Gestion stock</span>
        </div>
        <div class="q-industry-toggle">Decouvrir les fonctionnalites <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
    </div>
  </div>
</section>

<section id="services" class="q-section" style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
  <div class="container text-center">
    <span class="q-section-label">Notre stack</span>
    <h2>Quatre briques, <span class="text-gradient">zero friction</span></h2>
    <p class="q-section-desc">Pas besoin de jongler entre 10 outils. Tout est connecte, tout parle a tout.</p>
    <div class="q-services-grid">
      <div class="q-service-card active" data-service="whatsapp">
        <div class="q-service-header">
          <span class="q-service-num">01</span>
          <span class="q-service-status running">[ 01 / RUNNING ]</span>
        </div>
        <h3>Agents IA WhatsApp</h3>
        <p>Devis, qualification, prise de rendez-vous &#8212; multilingues, connectes a votre grille tarifaire.</p>
        <div class="q-service-details">
          <ul>
            <li>Reponse instantanee 24h/24</li>
            <li>Qualification automatique des leads</li>
            <li>Integration calendrier</li>
            <li>4 langues : FR, EN, ES, Darija</li>
          </ul>
        </div>
        <div class="q-industry-toggle" style="margin-top:16px;"><span>Voir les details</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
      <div class="q-service-card" data-service="reservation">
        <div class="q-service-header">
          <span class="q-service-num">02</span>
          <span class="q-service-status shipped">[ 02 / SHIPPED ]</span>
        </div>
        <h3>Reservation &amp; acomptes</h3>
        <p>Flux de reservation avec paiement d&#39;acompte a la source, Stripe Connect, commission automatique.</p>
        <div class="q-service-details">
          <ul>
            <li>Paiement securise integre</li>
            <li>Acompte a la reservation</li>
            <li>Annulation &amp; remboursement auto</li>
            <li>Rappels SMS + WhatsApp</li>
          </ul>
        </div>
        <div class="q-industry-toggle" style="margin-top:16px;"><span>Voir les details</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
      <div class="q-service-card" data-service="sites">
        <div class="q-service-header">
          <span class="q-service-num">03</span>
          <span class="q-service-status deployed">[ 03 / DEPLOYED ]</span>
        </div>
        <h3>Sites &amp; plateformes</h3>
        <p>Sites vitrines et web-apps sur mesure &#8212; tailles pour votre metier, pas pour un template.</p>
        <div class="q-service-details">
          <ul>
            <li>Design unique par secteur</li>
            <li>SEO optimise local</li>
            <li>100% responsive</li>
            <li>Hebergement + HTTPS inclus</li>
          </ul>
        </div>
        <div class="q-industry-toggle" style="margin-top:16px;"><span>Voir les details</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
      <div class="q-service-card" data-service="dashboard">
        <div class="q-service-header">
          <span class="q-service-num">04</span>
          <span class="q-service-status live">[ 04 / LIVE ]</span>
        </div>
        <h3>Dashboard &amp; Analytics</h3>
        <p>Vos leads, vos revenus, votre activite &#8212; en temps reel, sur tous vos ecrans.</p>
        <div class="q-service-details">
          <ul>
            <li>KPIs metiers cles en un coup d&#39;oeil</li>
            <li>Export donnees CSV/PDF</li>
            <li>Alertes personnalisees</li>
            <li>Multi-utilisateurs &amp; roles</li>
          </ul>
        </div>
        <div class="q-industry-toggle" style="margin-top:16px;"><span>Voir les details</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div>
      </div>
    </div>
  </div>
</section>

<section id="tarifs" class="q-section">
  <div class="container text-center">
    <span class="q-section-label">Tarifs transparents</span>
    <h2>Un investissement qui <span class="text-gradient">se rentabilise</span></h2>
    <p class="q-section-desc">Pas de frais caches. Pas de commissions sur vos ventes. Un abonnement clair.</p>
    <div class="q-pricing-toggle">
      <button data-plan="monthly" type="button">Mensuel</button>
      <button data-plan="yearly" class="active" type="button">Annuel <span class="q-pricing-badge">-20%</span></button>
    </div>
    <div class="q-pricing-grid">
      <div class="q-pricing-card">
        <h3>Starter</h3>
        <p class="desc">Pour demarrer sereinement</p>
        <div class="q-price" data-price-monthly="79" data-price-yearly="59">59</div>
        <div class="q-price-suffix">&#8364;/mois</div>
        <div class="q-price-note">au lieu de 79&#8364;/mois en mensuel</div>
        <ul class="q-pricing-features">
          <li>Site vitrine sur mesure</li>
          <li>Reservation en ligne</li>
          <li>WhatsApp IA (500 msg/mois)</li>
          <li>Dashboard basique</li>
          <li>Support email</li>
        </ul>
        <a href="#contact" class="q-pricing-cta secondary">Commencer</a>
      </div>
      <div class="q-pricing-card popular">
        <div class="q-pricing-popular-badge">Le plus choisi</div>
        <h3>Pro</h3>
        <p class="desc">Pour les equipes en croissance</p>
        <div class="q-price" data-price-monthly="149" data-price-yearly="119">119</div>
        <div class="q-price-suffix">&#8364;/mois</div>
        <div class="q-price-note">au lieu de 149&#8364;/mois en mensuel</div>
        <ul class="q-pricing-features">
          <li>Tout Starter +</li>
          <li>WhatsApp IA illimite</li>
          <li>Paiement acompte integre</li>
          <li>CRM complet</li>
          <li>Relances automatiques</li>
          <li>Support prioritaire</li>
        </ul>
        <a href="#contact" class="q-pricing-cta primary">Choisir Pro</a>
      </div>
      <div class="q-pricing-card">
        <h3>Enterprise</h3>
        <p class="desc">Sur mesure, sans limite</p>
        <div class="q-price" style="font-size:1.5rem;">Sur mesure</div>
        <div class="q-price-suffix" style="opacity:0;">.</div>
        <div class="q-price-note" style="opacity:0;">.</div>
        <ul class="q-pricing-features">
          <li>Tout Pro +</li>
          <li>Developpements sur mesure</li>
          <li>Integrations API</li>
          <li>Multi-etablissements</li>
          <li>Account manager dedie</li>
          <li>SLA garanti</li>
        </ul>
        <a href="#contact" class="q-pricing-cta secondary">Nous contacter</a>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="q-section" style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
  <div class="container text-center">
    <span class="q-section-label">Questions frequentes</span>
    <h2>On a pense a <span class="text-gradient">tout</span></h2>
    <p class="q-section-desc">Si vous ne trouvez pas votre reponse, notre equipe repond sous 2h en moyenne.</p>
    <div class="q-faq-list">
      <div class="q-faq-item active">
        <button class="q-faq-question" type="button">
          Combien de temps prend la mise en place ?
          <span class="q-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></span>
        </button>
        <div class="q-faq-answer">
          <div class="q-faq-answer-inner">Entre 48h et 5 jours ouvres selon la complexite. Un site vitrine simple est livre en 48h. Une solution complete (site + WhatsApp IA + reservation) prend 3 a 5 jours.</div>
        </div>
      </div>
      <div class="q-faq-item">
        <button class="q-faq-question" type="button">
          Puis-je garder mon nom de domaine ?
          <span class="q-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></span>
        </button>
        <div class="q-faq-answer">
          <div class="q-faq-answer-inner">Oui, absolument. Nous configurons votre domaine existant (ou nous vous en procurons un) et gerons les DNS pour vous.</div>
        </div>
      </div>
      <div class="q-faq-item">
        <button class="q-faq-question" type="button">
          Et si je veux arreter mon abonnement ?
          <span class="q-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></span>
        </button>
        <div class="q-faq-answer">
          <div class="q-faq-answer-inner">Vous pouvez resilier a tout moment sans frais. Vos donnees vous sont restituees dans un format exploitable (CSV/JSON).</div>
        </div>
      </div>
      <div class="q-faq-item">
        <button class="q-faq-question" type="button">
          Le WhatsApp IA parle-t-il vraiment darija ?
          <span class="q-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></span>
        </button>
        <div class="q-faq-answer">
          <div class="q-faq-answer-inner">Oui, notre modele est entraine sur des conversations reelles en darija marocaine, francais, espagnol et anglais. Il comprend le code-switching naturel.</div>
        </div>
      </div>
      <div class="q-faq-item">
        <button class="q-faq-question" type="button">
          Est-ce que ca marche sur mobile ?
          <span class="q-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></span>
        </button>
        <div class="q-faq-answer">
          <div class="q-faq-answer-inner">Tout est pense mobile-first. Votre site, votre dashboard et vos notifications sont optimises pour smartphone et tablette.</div>
        </div>
      </div>
      <div class="q-faq-item">
        <button class="q-faq-question" type="button">
          Proposez-vous un essai gratuit ?
          <span class="q-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></span>
        </button>
        <div class="q-faq-answer">
          <div class="q-faq-answer-inner">Oui, 14 jours d&#39;essai gratuit sans carte bancaire. Vous avez acces a toutes les fonctionnalites Pro pendant cette periode.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="q-footer">
  <div class="container">
    <div class="q-footer-grid">
      <div>
        <a href="index.html" class="q-footer-brand">
          <div class="q-logo-mark">Q</div>
          <span style="font-weight:600;">Quadria</span><span style="color:var(--text-muted);">Studio</span>
        </a>
        <p>Solutions digitales cle-en-main pour les metiers de proximite.</p>
      </div>
      <div>
        <h4>Produit</h4>
        <ul class="q-footer-links">
          <li><a href="#services">Agents IA WhatsApp</a></li>
          <li><a href="#services">Reservation en ligne</a></li>
          <li><a href="#services">Sites vitrines</a></li>
          <li><a href="#services">Dashboard</a></li>
        </ul>
      </div>
      <div>
        <h4>Metiers</h4>
        <ul class="q-footer-links">
          <li><a href="#metiers">Salon de beaute</a></li>
          <li><a href="#metiers">Garage auto</a></li>
          <li><a href="#metiers">Agence immobiliere</a></li>
          <li><a href="#metiers">Clinique veterinaire</a></li>
        </ul>
      </div>
      <div>
        <h4>Ressources</h4>
        <ul class="q-footer-links">
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Temoignages</a></li>
          <li><a href="#">Statut systeme</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul class="q-footer-links">
          <li><a href="#">Mentions legales</a></li>
          <li><a href="#">CGV</a></li>
          <li><a href="#">Confidentialite</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </div>
    <div class="q-footer-bottom">
      <p>&copy; 2026 Quadria Studio. Tous droits reserves.</p>
      <div class="q-footer-social">
        <a href="#" aria-label="Twitter"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
      </div>
    </div>
  </div>
</footer>

<script src="ui.js"></script>
</body>
</html>

'''

if __name__ == '__main__':
    main()
