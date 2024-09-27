import { Player } from "../Entities/Player";
import { PhysicsWorld } from "../Physics/PhysicsWorld";
import { Sprite } from "../Sprites/Sprite";
import { Vector2 } from "./Math";

export class Game {
    public static renderingContext: CanvasRenderingContext2D;
    public PhysicsWorld: PhysicsWorld;
    private players: Player[];
    private background: Sprite;
    private targetFps: number = 60;

    public static FrameCounter = 0;
    
    constructor() {
        const gameEl = document.querySelector("#game");
        const gameCanvas = document.createElement("canvas");
        gameCanvas.width = 1024;
        gameCanvas.height = 600;
        gameCanvas.id = "game-canvas";
        gameEl?.appendChild(gameCanvas);
        Game.renderingContext = gameCanvas.getContext("2d")!;
        Game.renderingContext.imageSmoothingEnabled = true;
        Game.renderingContext.imageSmoothingQuality = 'high';

        this.PhysicsWorld = new PhysicsWorld();

        this.players = [];
        this.background = new Sprite(Vector2.Zero(), "Assets/background-edited.png");

        this.initGame();
    }

    private initGame() {
        const mainPlayer = new Player();
        this.players.push(mainPlayer);
        this.PhysicsWorld.registerPhysicsBody(mainPlayer.PhysicsBody);
    }

    gameLoop() {
        requestAnimationFrame(() => this.gameLoop());
        
        // setInterval(() => {
        //     this.updateGame();
        // }, 1000);

        this.updateGame();
        this.renderGame();

        
    }

    updateGame() {
        this.PhysicsWorld.WorldStep();
        let playersLength = this.players.length;
        for (let i = 0; i < playersLength; i++) {
            const player = this.players[i];
            player.update();
        } 
    }

    renderGame() {
        const width = Game.renderingContext.canvas.width;
        const height = Game.renderingContext.canvas.height;

        Game.renderingContext.clearRect(0, 0, width, height);
        
        this.background.draw(Game.renderingContext);

        let playersLength = this.players.length;
        for (let i = 0; i < playersLength; i++) {
            const player = this.players[i];
            player.draw();
        }
    }
}