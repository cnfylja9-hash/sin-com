body {
    margin: 0;
    padding: 0;
    background-color: #030101;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: 'Orbitron', sans-serif;
    position: relative;
}

#bloodCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.85;
}

.doom-plate {
    background: linear-gradient(135deg, #0f0a0a 0%, #050202 100%);
    border: 2px solid #8b0000;
    padding: 50px 70px;
    text-align: center;
    box-shadow: 0 0 50px rgba(139, 0, 0, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 2;
    border-radius: 4px;
}

.logo-text {
    color: #ffffff;
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 12px;
    margin: 0;
    text-transform: uppercase;
    text-shadow: 0 0 15px #ff0000, 0 0 30px #8b0000;
}

.line {
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff0000, transparent);
    margin: 25px 0;
}

.sub-text {
    color: #a39999;
    font-size: 13px;
    letter-spacing: 4px;
    margin-bottom: 35px;
    font-weight: 700;
}

.doom-btn {
    background: #1a0303;
    color: #ff3333;
    border: 2px solid #8b0000;
    padding: 14px 55px;
    font-size: 16px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    letter-spacing: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 15px rgba(139, 0, 0, 0.2);
}

.doom-btn:hover {
    background: #ff0000;
    color: #000000;
    box-shadow: 0 0 35px #ff0000;
    border-color: #ff0000;
}

@media (max-width: 600px) {
    .doom-plate { padding: 40px 30px; width: 90%; }
    .logo-text { font-size: 38px; letter-spacing: 6px; }
    .sub-text { font-size: 9px; letter-spacing: 2px; }
}
