/*
Player needs:
- sprite
- movement speed
- physics box
*/

import { Vector2 } from "./Core/Math";
import { Transform } from "./Core/Transform";
import { InputController } from "./Input/InputController";
import { Sprite } from "./Sprites/Sprite";
import { movesList } from "./Moves/MovesList";

export class Player {
    private speed: Vector2;
    private transform: Transform;
    private sprite?: Sprite;
    //private isGrounded: boolean;
    private inputController: InputController;
    private movesListLength: number = movesList.length;

    constructor(/*spriteSource?*/) {
        this.speed = Vector2.Zero();
        this.transform = new Transform();
        this.transform.Scale.X = 100;
        this.transform.Scale.Y = 120;
        //this.isGrounded = true;
        this.sprite = new Sprite(this.transform.Position, "Assets/Player/Char_3.png");
        this.inputController = new InputController();

        addEventListener("keydown", () => {
            for (let i = 0; i < this.movesListLength; i++) {
                if (JSON.stringify(this.inputController.Keys) === JSON.stringify(movesList[i])) {
                    console.log(true);
                }
            }
        });

        addEventListener("keyup", () => {
            this.speed.X = 0;
            this.speed.Y = 0;
        });
    }

    get Sprite(): Sprite {
        return this.sprite!;
    }

    get Speed() {
        return this.speed;
    }

    get Transform() {
        return this.transform;
    }

    public draw(context: CanvasRenderingContext2D): void {
        if (this.sprite) {
            //this.sprite.draw(context);
            context.drawImage(this.sprite.Image, 45, 0, 85, 60, this.transform.Position.X, this.transform.Position.Y, this.transform.Scale.X, this.transform.Scale.Y);
            //context.beginPath();
            //context.rect(this.transform.Position.X, this.transform.Position.Y, 180, 200);
            //context.fill();
        } else {
            context.fillRect(this.transform.Position.X, this.transform.Position.Y, this.transform.Scale.X, this.transform.Scale.Y);
        }
    }
}