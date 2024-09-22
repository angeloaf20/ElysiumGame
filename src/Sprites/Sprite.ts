import { Vector2 } from "../Core/Math";

export class Sprite {
    private position: Vector2;
    private image: HTMLImageElement;

    constructor(position: Vector2, imageSource: string) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSource;
    }

    get Position(): Vector2 {
        return this.position;
    }

    get Image(): HTMLImageElement {
        return this.image;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.drawImage(this.image, this.position.X, this.position.Y, context.canvas.width, context.canvas.height);
    }
}