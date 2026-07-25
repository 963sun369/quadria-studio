// ui.js — interactions souris partagées par toutes les pages QuadrIA.
// Curseur custom + boutons magnétiques. Autonome : injecte son propre CSS.
// Désactivé sur écrans tactiles.

(function () {
  if (!matchMedia('(pointer: fine)').matches) return;
  if (document.querySelector('.cursor-dot')) return; // déjà initialisé

  const css = document.createElement('style');
  css.textContent = `
    body, a, button { cursor: none; }
    .cursor-dot {
      position: fixed; top: 0; left: 0; width: 7px; height: 7px; border-radius: 50%;
      background: var(--accent, #ff5e1f); z-index: 1001; pointer-events: none;
      transform: translate(-50%, -50%);
    }
    .cursor-ring {
      position: fixed; top: 0; left: 0; width: 30px; height: 30px; border-radius: 50%;
      border: 1px solid rgba(255,94,31,.5); z-index: 1001; pointer-events: none;
      transform: translate(-50%, -50%);
      transition: width .25s, height .25s, border-color .25s;
    }
    .cursor-ring.big { width: 54px; height: 54px; border-color: rgba(53,224,194,.7); }
  `;
  document.head.appendChild(css);

  const dot = document.createElement('div'); dot.className = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    rx += (mx - rx) * .18; ry += (my - ry) * .18;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button')) ring.classList.add('big');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button')) ring.classList.remove('big');
  });

  // boutons magnétiques
  document.querySelectorAll('.btn, .btn-nav, .btn-wa, .buy').forEach(b => {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    const step = () => {
      cx += (tx - cx) * .2; cy += (ty - cy) * .2;
      b.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px)';
      if (Math.abs(tx - cx) > .2 || Math.abs(ty - cy) > .2) raf = requestAnimationFrame(step);
      else { raf = null; if (!tx && !ty) b.style.transform = ''; }
    };
    const go = () => { if (!raf) raf = requestAnimationFrame(step); };
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      tx = (e.clientX - r.left - r.width / 2) * .25;
      ty = (e.clientY - r.top - r.height / 2) * .35;
      go();
    });
    b.addEventListener('mouseleave', () => { tx = 0; ty = 0; go(); });
  });
})();
