import { Player } from "../Player";
import { Sprite } from "../Sprites/Sprite";
import { Vector2 } from "./Math";

export class Game {
    private deltaTime: number;
    private lastTick: number;
    private renderingContext: CanvasRenderingContext2D;
    private players: Player[];
    private background: Sprite;
    
    constructor() {
        this.deltaTime = 0;
        this.lastTick = 0;
        
        const gameEl = document.querySelector("#game");
        const gameCanvas = document.createElement("canvas");
        gameCanvas.width = 1024;
        gameCanvas.height = 600;
        gameCanvas.id = "game-canvas";
        gameEl?.appendChild(gameCanvas);
        this.renderingContext = gameCanvas.getContext("2d")!;
        this.renderingContext.imageSmoothingEnabled = true;
        this.renderingContext.imageSmoothingQuality = 'high';

        this.players = [];
        this.background = new Sprite(Vector2.Zero(), "Assets/background-animated.gif");

        this.initGame();
    }

    private initGame() {
        const mainPlayer = new Player();
        this.players.push(mainPlayer);
    }

    gameLoop() {
        this.countDeltaTime();
        this.updateGame();
        this.renderGame();
        requestAnimationFrame(() => this.gameLoop());
    }

    countDeltaTime() {
        let currentTick = performance.now();
        this.deltaTime = currentTick - this.lastTick;
        this.lastTick = currentTick;
        const frameTimeEl = document.querySelector("#frame-time-element")! as HTMLSpanElement;
        const fpsEl = document.querySelector("#fps-element")! as HTMLSpanElement;
        frameTimeEl.innerText = `${this.deltaTime}`;
        fpsEl.innerText = `${Math.floor((1 / this.deltaTime) * 1000)}`;
    }

    updateGame() {
        let playersLength = this.players.length;
        for (let i = 0; i < playersLength; i++) {
            const player = this.players[i];
            player.update(this.deltaTime);
        } 
    }

    renderGame() {
        const width = this.renderingContext.canvas.width;
        const height = this.renderingContext.canvas.height;

        this.renderingContext.clearRect(0, 0, width, height);
        
        this.background.draw(this.renderingContext);

        let playersLength = this.players.length;
        for (let i = 0; i < playersLength; i++) {
            const player = this.players[i];
            player.draw(this.renderingContext);
        }
    }
}