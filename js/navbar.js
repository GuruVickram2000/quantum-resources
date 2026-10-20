const hd = document.getElementById('site-header'), pg = document.body.dataset.page;
const f = () => hd.classList.toggle('solid', scrollY > 60); f(); addEventListener('scroll', f, { passive: true });
document.querySelectorAll('.nav-link[data-p]').forEach(a => { if (a.dataset.p.split(' ').includes(pg)) { a.classList.add('active'); a.setAttribute('aria-current', 'page') } });
document.getElementById('mainNav').addEventListener('show.bs.collapse', () => hd.classList.add('solid'));
const mg = document.querySelector('.has-mega');
if (mg) {
    const tg = mg.querySelector('.mega-toggle'), im = document.getElementById('megaImg');
    tg.addEventListener('click', e => { if (innerWidth < 992) { e.preventDefault(); const o = mg.classList.toggle('open'); tg.setAttribute('aria-expanded', o) } });
    mg.addEventListener('mouseenter', () => tg.setAttribute('aria-expanded', 'true')); mg.addEventListener('mouseleave', () => tg.setAttribute('aria-expanded', 'false'));
    mg.querySelectorAll('.mc').forEach(c => { const sw = () => { im.style.opacity = 0; setTimeout(() => { im.src = c.dataset.img; im.alt = c.dataset.alt; im.style.opacity = 1 }, 150) }; c.addEventListener('mouseenter', sw); c.addEventListener('focusin', sw) })
}
const car = document.getElementById('svcCar');
if (car) {
    const pr = car.querySelector('.car-prog'); const run = () => { pr.classList.remove('run'); void pr.offsetWidth; pr.classList.add('run') }; run();
    car.addEventListener('slide.bs.carousel', run); car.addEventListener('mouseenter', () => pr.classList.remove('run')); car.addEventListener('mouseleave', run)
}
