/*
Player needs:
- sprite
- movement speed
- physics box
*/

import { Vector2 } from "./Core/Math";
import { Transform } from "./Core/Transform";
import { Sprite } from "./Sprites/Sprite";

export class Player {
    private speed: Vector2;
    private transform: Transform;
    private sprite?: Sprite;
    private isGrounded: boolean;

    constructor(/*spriteSource?*/) {
        this.speed = Vector2.Zero();
        this.transform = new Transform();
        this.transform.Scale.X = 100;
        this.transform.Scale.Y = 120;
        this.isGrounded = true;
        this.sprite = new Sprite(this.transform.Position, "Assets/Player/Char_3.png");

        addEventListener("keydown", (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowRight":
                    this.speed.X = 5;
                    break;
                case "ArrowLeft":
                    this.speed.X = -5;
                    break;
                case "ArrowUp":
                    this.speed.Y += 5;
                    break;
                default:
                    break;
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

    private movePlayer() {
        if (this.speed.X != 0) 
            this.transform.Position.X += this.speed.X;
    }

    private checkIsGrounded(): boolean {
        return false;
    }

    private keepWithinBounds() {
        const maxWidth = 1280 - this.transform.Scale.X;
        const maxHeight = 600 + this.transform.Scale.Y;

        if (this.transform.Position.X >= maxWidth) {
            this.transform.Position.X = maxWidth


        }
    }

    public update() {
        if (!this.isGrounded) {

        }

        this.keepWithinBounds();

        this.movePlayer();
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