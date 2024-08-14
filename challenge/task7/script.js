// script.js

document.addEventListener('DOMContentLoaded', () => {
    const waveElement = document.querySelector('.wave');

    // Example toggle effect
    waveElement.addEventListener('click', () => {
        waveElement.classList.toggle('active');
    });
});
