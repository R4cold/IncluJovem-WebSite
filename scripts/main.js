const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    const active = links.classList.toggle('active');
    toggle.setAttribute('aria-expanded', active ? 'true' : 'false');
});
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        links.classList.remove('active');
        const id = a.getAttribute('href');
        const el = document.querySelector(id);
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const darkBtn = document.getElementById('dark-toggle');
const body = document.body;
if(localStorage.getItem('darkMode') === 'true'){ body.classList.add('dark'); darkBtn.textContent = '☀️'; }
darkBtn.addEventListener('click', () => {
    const dark = body.classList.toggle('dark');
    localStorage.setItem('darkMode', dark);
    darkBtn.textContent = dark ? '☀️' : '🌙';
});
