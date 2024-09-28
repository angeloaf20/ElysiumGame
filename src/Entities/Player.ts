/*
Player needs:
- sprite
- movement speed
- physics box
*/

import { Vector2 } from "../Core/Math";
import { Game } from "../Core/Game";
import { PhysicsBody } from "../Physics/PhysicsBody";
import { InputReader } from "../Input/InputReader";
import { Sprite } from "../Sprites/Sprite";

export class Player {
    private physicsBody: PhysicsBody;
    private sprite: Sprite;
    private inputReader: InputReader;

    constructor(/*spriteSource?*/) {
        this.physicsBody = new PhysicsBody({
            position: new Vector2(100, 100),
            scale: new Vector2(200, 220),
            mass: 20, 
            isStatic: false
        });

        //this.physicsBody.Bounds.updateBounds(this.physicsBody.Position, this.physicsBody.Scale);

        this.sprite = new Sprite({
            sourcePos: new Vector2(0, 0),
            sourceScale: new Vector2(300, 300),
            canvasPos: this.physicsBody.Position,
            canvasScale: this.physicsBody.Scale,
            imageSource: "Assets/Player/test-sprites-3.png"
        });
        
        this.inputReader = new InputReader();

        let index = 0;
        addEventListener("keydown", () => {
            index += 1;
            this.sprite.changeSprite(index % 7);
        });
        
        
    }

    get PhysicsBody(): PhysicsBody {
        return this.physicsBody;
    }

    get Sprite(): Sprite {
        return this.sprite!;
    }

    public update() {
        this.inputReader.update(); 

        if (this.inputReader.InputtedMoves.Data.length > 0) {
            const key = this.inputReader.InputtedMoves.Peek();
            
            switch(key) {
                case "MoveLeft": 
                    this.physicsBody.addForce(new Vector2(-5, 0));
                    break;
                case "MoveRight":
                    this.physicsBody.addForce(new Vector2(5, 0));
                    break;
                case "Jump":
                    this.physicsBody.addForce(new Vector2(2, 3));
                    break;
            }
        }

        this.sprite.CanvasPosition = this.physicsBody.Position;
    }

    public draw(): void {
        this.sprite.draw();
        Game.renderingContext.strokeRect(this.physicsBody.Position.X, this.physicsBody.Position.Y, this.physicsBody.Scale.X, this.physicsBody.Scale.Y);
    }
}