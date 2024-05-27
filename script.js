let airplane = document.getElementById('airplane');
let embraerLogo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    embraerLogo.style.top = value + 'px';
    airplane.style.left = value * -1.5 + 'px';
});