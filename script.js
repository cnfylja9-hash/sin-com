const button = document.getElementById('myBtn');

button.addEventListener('click', function() {
    // При клике на кнопку плашка начинает яростно трястись (эффект взрыва)
    const plate = document.querySelector('.doom-plate');
    plate.style.animation = 'shake 0.5s ease-in-out';
    
    // Эффект вспышки экрана
    document.body.style.backgroundColor = '#ff0000';
    
    setTimeout(() => {
        plate.style.animation = '';
        document.body.style.backgroundColor = '';
    }, 500);
});

// Добавим CSS анимацию тряски через JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg) skewX(-3deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg) skewX(-3deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg) skewX(-3deg); }
    30% { transform: translate(3px, 2px) rotate(0deg) skewX(-3deg); }
    40% { transform: translate(1px, -1px) rotate(1deg) skewX(-3deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg) skewX(-3deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg) skewX(-3deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg) skewX(-3deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg) skewX(-3deg); }
    90% { transform: translate(1px, 2px) rotate(0deg) skewX(-3deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg) skewX(-3deg); }
}`;
document.head.appendChild(style);
