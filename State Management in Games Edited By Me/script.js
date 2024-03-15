import Player from 'https://cdn.jsdelivr.net/gh/reggmonline/lalalay/State Management in Games Edited By Me/player.js';
import InputHandler from 'https://cdn.jsdelivr.net/gh/reggmonline/lalalay/State Management in Games Edited By Me/input.js';
import {drawStatusText} from 'https://cdn.jsdelivr.net/gh/reggmonline/lalalay/State Management in Games Edited By Me/utils.js';

window.addEventListener('load', function(){
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    const input = new InputHandler();

    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.draw(ctx, deltaTime);
        player.update(input.actions.at(-1));
        drawStatusText(ctx, input, player);
        requestAnimationFrame(animate);
    }

    animate(0);
});
