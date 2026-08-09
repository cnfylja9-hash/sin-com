// Настройка холста для генерации эффекта стекающих потоков крови
const canvas = document.getElementById('bloodCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Параметры "кровавых капель"
const columns = Math.floor(canvas.width / 20);
const drops = Array(columns).fill(0);

function drawBlood() {
    // Полупрозрачный черный фон для эффекта плавного затухания шлейфа
    ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем капли разных оттенков багрового и красного
    for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.95 ? "ERR" : "01"; // Смесь кода и капель
        const x = i * 20;
        const y = drops[i] * 20;

        // Случайный выбор цвета крови для глубины
        ctx.fillStyle = Math.random() > 0.3 ? '#8b0000' : '#ff003c';
        ctx.font = '12px monospace';
        
        ctx.fillText(text, x, y);

        // Сброс капли наверх при достижении низа или случайно
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawBlood, 30);

// Обработка клика по кнопке (Жесткий сбой системы)
const button = document.getElementById('myBtn');
button.addEventListener('click', function() {
    const plate = document.querySelector('.doom-plate');
    
    // Эффект яростной тряски и искажения цвета
    plate.style.animation = 'hardGlitch 0.4s steps(2) infinite';
    document.body.style.filter = 'invert(1) hue-rotate(90deg)';
    
    setTimeout(() => {
        plate.style.animation = 'plateDistort 4s infinite';
        document.body.style.filter = 'none';
    }, 400);
});

// Добавляем аварийную анимацию в стили через JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes hardGlitch {
    0% { transform: translate(4px, -2px) skewX(10deg); filter: distort(10%); }
    20% { transform: translate(-3px, 3px) skewX(-15deg); }
    40% { transform: translate(5px, 5px) skewX(5deg); }
    60% { transform: translate(-2px, -4px) skewX(-10deg); }
    80% { transform: translate(2px, 2px) skewX(12deg); }
    100% { transform: translate(0, 0) skewX(-4deg); }
}`;
document.head.appendChild(style);
