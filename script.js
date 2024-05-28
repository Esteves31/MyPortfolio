let airplane = document.getElementById('airplane');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    airplane.style.left = value * -1.5 + 'px';
});