import {
    StandingLeft, StandingRight,
    SittingLeft, SittingRight,
    RunningLeft, RunningRight,
    JumpingLeft, JumpingRight,
    FallingLeft, FallingRight, } from './state.js';

export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new StandingLeft(this), 
            new StandingRight(this), 
            new SittingLeft(this),
            new SittingRight(this),
            new RunningLeft(this),
            new RunningRight(this),
            new JumpingLeft(this),
            new JumpingRight(this),
            new FallingLeft(this),
            new FallingRight(this),];
        this.currentState = this.states[1];
        this.previousStateIndex = 1;
        this.image = document.getElementById('dogImage');
        this.width = 200;
        this.height = 181.83;
        this.x = this.gameWidth / 2 - this.width / 2;
        this.y = this.gameHeight - this.height - 1;
        this.vy = 0;
        this.weight = 1.0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 5;
        this.speed = 0;
        this.maxSpeed = 10;
        this.fps = 30;
        this.frameTimer = 0;
        this.frameInterval = 1000 / this.fps;
    }

    draw(context, deltaTime) {
        if (this.frameTimer >= this.frameInterval) {
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        context.drawImage(this.image,
            this.frameX * this.width, this.frameY * this.height, this.width, this.height,
            this.x, this.y, this.width, this.height);
    }

    update(input) {
        this.currentState.handleInput(input);
        // horizontal movement
        this.x += this.speed;
        if (this.x < 0) this.x = 0;
        else if (this.x >= this.gameWidth - this.width) this.x = this.gameWidth - this.width - 1;
        // vertical movement
        this.y += this.vy;
        if (!this.onGround()) {
            this.vy += this.weight;
        } else {
            this.vy = 0;
        }
        if (this.y >= this.gameHeight - this.height) this.y = this.gameHeight - this.height - 1;
    }

    onGround() {
        return this.y >= this.gameHeight - this.height - 1;
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
        this.previousStateIndex = state;
        if (this.frameX >= this.maxFrame) this.frameX = 0;
    }
}