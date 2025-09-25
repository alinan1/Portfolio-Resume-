
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.hacker-bar');
    const title = document.querySelector('.hacker-box h2');
    if (!bar) return;

    bar.addEventListener('animationend', () => {
        
    if (title) title.textContent = 'ACCESS GRANTED';

    setTimeout(() => {
        window.location.href = 'about.html'; // change to your target page
    }, 610);

    });
});
