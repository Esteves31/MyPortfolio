let airplane = document.getElementById('airplane');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    airplane.style.left = value * -1.5 + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});