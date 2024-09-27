/*
Player needs:
- sprite
- movement speed
- physics box
*/

import { Sprite } from "../Sprites/Sprite";
import { Game } from "../Core/Game";
import { PhysicsBody } from "../Physics/PhysicsBody";
import { Vector2 } from "../Core/Math";
import { InputReader } from "../Input/InputReader";

export class Player {
    private physicsBody: PhysicsBody;
    private sprite?: Sprite;
    private inputReader: InputReader;

    constructor(/*spriteSource?*/) {
        this.physicsBody = new PhysicsBody(2, false);
        this.physicsBody.Scale.X = 200;
        this.physicsBody.Scale.Y = 220;
        this.sprite = new Sprite(this.physicsBody.Position, "Assets/Player/Char_3.png");

        
        this.inputReader = new InputReader();

        addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.code === "ArrowRight") {
                
            }
        });

        addEventListener("keyup", (event: KeyboardEvent) => {
            
        })
    }

    get PhysicsBody(): PhysicsBody {
        return this.physicsBody;
    }

    get Sprite(): Sprite {
        return this.sprite!;
    }

    public update() {
        this.inputReader.update();

        
    }

    public draw(): void {
        if (this.sprite) {
            Game.renderingContext.drawImage(this.sprite.Image, 45, 0, 85, 60, this.physicsBody.Position.X, this.physicsBody.Position.Y, this.physicsBody.Scale.X, this.physicsBody.Scale.Y);
        } else {
            console.log("No sprite found for player");
            Game.renderingContext.fillRect(this.physicsBody.Position.X, this.physicsBody.Position.Y, this.physicsBody.Scale.X, this.physicsBody.Scale.Y);
        }
    }
}