const canvas = document.getElementById('bloodCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const count = 40;
const drops = [];

for (let i = 0; i < count; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        length: Math.random() * 40 + 20,
        speed: Math.random() * 2 + 1,
        weight: Math.random() * 2 + 1
    });
}

function drawBlood() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'rgba(3, 1, 1, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
        let d = drops[i];
        
        let grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.length);
        grad.addColorStop(0, 'rgba(74, 0, 0, 0)');
        grad.addColorStop(1, 'rgba(180, 0, 0, 0.9)');
        
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
            d.speed = Math.random() * 2 + 1;
        }
    }
    requestAnimationFrame(drawBlood);
}
drawBlood();

const button = document.getElementById('myBtn');
button.addEventListener('click', function() {
    const plate = document.querySelector('.doom-plate');
    
    plate.style.transform = 'scale(0.98)';
    document.body.style.backgroundColor = '#5c0000';
    
    setTimeout(() => {
        plate.style.transform = 'none';
        document.body.style.backgroundColor = '';
    }, 150);
});

