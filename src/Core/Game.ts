import { Obstacle } from "../Entities/Obstacle";
import { Player } from "../Entities/Player";
import { Bounds } from "../Physics/Bounds";
import { PhysicsWorld } from "../Physics/PhysicsWorld";
import { Sprite } from "../Sprites/Sprite";
import { Vector2 } from "./Math";

export class Game {
    public static renderingContext: CanvasRenderingContext2D;
    public PhysicsWorld!: PhysicsWorld;
    private players: Player[];
    private background: Sprite;
    private obstacles: Obstacle[];
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

        this.players = [];
        this.obstacles = [];
        this.background = new Sprite({
            //sourcePos: Vector2.Zero(), 
            //sourceScale: new Vector2(752, 360), 
            canvasPos: Vector2.Zero(), 
            canvasScale: new Vector2(Game.renderingContext.canvas.width, Game.renderingContext.canvas.height,), 
            imageSource: "Assets/background-edited.png"
        });

        this.initGame();
    }

    private initGame() {
        const mainPlayer = new Player();
        this.players.push(mainPlayer);

        const obstacle = new Obstacle({
            position: new Vector2(0, 400),
            scale: new Vector2(Game.renderingContext.canvas.width, 400),
        });

        this.obstacles.push(obstacle);

        this.PhysicsWorld = new PhysicsWorld({
            gravity: 4,
            airResistance: 2.5,
            physicsBodies: [mainPlayer.PhysicsBody, obstacle.PhysicsBody]
        });

        console.log("Player bounds: " + JSON.stringify(mainPlayer.PhysicsBody.Bounds));
        console.log("Obstcle bounds: " + JSON.stringify(obstacle.PhysicsBody.Bounds));

        console.log(Bounds.checkOverlap(mainPlayer.PhysicsBody.Bounds, obstacle.PhysicsBody.Bounds));
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
        //this.PhysicsWorld.WorldStep();

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
        
        this.background.draw();

        this.obstacles[0].draw();

        let playersLength = this.players.length;
        for (let i = 0; i < playersLength; i++) {
            const player = this.players[i];
            player.draw();
        }
    }
}