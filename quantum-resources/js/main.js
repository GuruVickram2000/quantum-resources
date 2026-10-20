document.documentElement.classList.add('js');
document.addEventListener('error', e => { if (e.target.tagName === 'IMG') { e.target.classList.add('img-missing'); console.warn('Missing image:', e.target.getAttribute('src')) } }, true);
const p = document.getElementById('progress'), t = document.getElementById('toTop');
addEventListener('scroll', () => { const h = document.documentElement; p.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; t.classList.toggle('show', h.scrollTop > 600) }, { passive: true });
t.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

// Image map: all image paths live in the HTML under assets/images/; see assets/images/IMAGES-NEEDED.txt for the full list.
