import { Game } from "../Core/Game";
import { Vector2 } from "../Core/Math";
import { PhysicsBody } from "../Physics/PhysicsBody";
//import { Sprite } from "../Sprites/Sprite";

export class Obstacle {
    private physicsBody: PhysicsBody;
    //private sprite: Sprite;

    constructor(obstacleOptions: {
        position: Vector2,
        scale: Vector2,
        sourceImage?: string 
    }) {

        this.physicsBody = new PhysicsBody({
            position: obstacleOptions.position,
            scale: obstacleOptions.scale,
            mass: 0,
            isStatic: true
        });

        //this.physicsBody.Bounds.updateBounds(this.physicsBody.Position, this.physicsBody.Scale);
    }

    draw() {
        Game.renderingContext.fillStyle = "green";
        Game.renderingContext.fillRect(50, 400, 800, 100);
    }

    get PhysicsBody() {
        return this.physicsBody;
    }
}