const canvas = document.getElementById('bloodCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const count = 50;
const drops = [];

for (let i = 0; i < count; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        length: Math.random() * 50 + 30,
        speed: Math.random() * 3 + 1.5,
        weight: Math.random() * 2.5 + 1
    });
}

function drawBlood() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#020000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
        let d = drops[i];
        let grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.length);
        grad.addColorStop(0, 'rgba(50, 0, 0, 0)');
        grad.addColorStop(1, 'rgba(210, 0, 0, 0.95)');
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = d.weight;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();

        d.y += d.speed;

        if (d.y > canvas.height) {
            d.x = Math.random() * canvas.width;
            d.y = -d.length;
            d.speed = Math.random() * 3 + 1.5;
        }
    }
    requestAnimationFrame(drawBlood);
}
drawBlood();

const plate = document.querySelector('.doom-plate');

document.addEventListener('mousemove', function(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    
    plate.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    
    const shadowX = xAxis * -1.5;
    const shadowY = yAxis * 1.5;
    plate.style.boxShadow = `${shadowX}px ${shadowY}px 50px rgba(255, 0, 0, 0.45), inset 0 0 40px #000000`;
});

document.addEventListener('mouseleave', function() {
    plate.style.transform = 'rotateY(0deg) rotateX(0deg)';
    plate.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.3), inset 0 0 40px #000000';
});

const button = document.getElementById('myBtn');
const backButton = document.getElementById('backBtn');
const mainScreen = document.getElementById('mainScreen');
const systemScreen = document.getElementById('systemScreen');

button.addEventListener('click', function() {
    plate.style.transform = 'scale(0.96) rotateY(0deg) rotateX(0deg)';
    document.body.style.backgroundColor = '#800000';
    
    setTimeout(() => {
        document.body.style.backgroundColor = '';
        mainScreen.style.display = 'none';
        systemScreen.style.display = 'block';
        setTimeout(() => {
            systemScreen.style.opacity = '1';
            systemScreen.style.transform = 'scale(1)';
        }, 10);
    }, 150);
});

backButton.addEventListener('click', function() {
    systemScreen.style.opacity = '0';
    systemScreen.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        systemScreen.style.display = 'none';
        mainScreen.style.display = 'block';
    }, 300);
});
