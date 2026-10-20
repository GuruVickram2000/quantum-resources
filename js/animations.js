const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; co.unobserve(e.target); const el = e.target, to = +el.dataset.to, s = el.dataset.suf || ''; if (rm) { el.textContent = to + s; return }
    const t0 = performance.now(); (function st(n) { const k = Math.min((n - t0) / 1600, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + (k === 1 ? s : ''); if (k < 1) requestAnimationFrame(st) })(t0)
}), { threshold: .6 });
document.querySelectorAll('.count').forEach(el => co.observe(el));
document.querySelectorAll('.media').forEach(el => io.observe(el));
const bgs = [...document.querySelectorAll('.hero-bg img')]; if (!rm && bgs.length) addEventListener('scroll', () => { const y = Math.min(scrollY, 900) * .15; bgs.forEach(b => b.style.transform = 'translateY(' + y + 'px) scale(1.08)') }, { passive: true });

const pm = document.querySelector('.page-hero-media'); if (pm && !rm) addEventListener('scroll', () => { pm.style.transform = 'translateY(' + Math.min(scrollY, 700) * .12 + 'px)' }, { passive: true });
