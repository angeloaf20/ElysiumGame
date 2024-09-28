import { Game } from "../Core/Game";
import { Vector2 } from "../Core/Math";

export class Sprite {
    private sourcePosition: Vector2;
    private sourceScale: Vector2;

    private canvasPosition: Vector2;
    private canvasScale: Vector2;
    private image: HTMLImageElement;

    private spriteSheetPositions: Vector2[];
    private spriteSheetIndex: number = 0;

    private spriteSheetOffset: Vector2;

    constructor(spriteOptions: {
        sourcePos?: Vector2, 
        sourceScale?: Vector2, 
        sheetOffset?: Vector2,
        canvasPos: Vector2, 
        canvasScale: Vector2, 
        imageSource: string, 
    }) {

        this.sourcePosition = spriteOptions.sourcePos!;
        this.sourceScale = spriteOptions.sourceScale!;
        this.spriteSheetOffset = spriteOptions.sheetOffset!;

        this.canvasPosition = spriteOptions.canvasPos;
        this.canvasScale = spriteOptions.canvasScale;

        this.image = new Image();
        this.image.src = spriteOptions.imageSource;

        if (this.sourcePosition === undefined || this.sourceScale === undefined) {
            this.sourcePosition = Vector2.Zero();
            this.sourceScale = new Vector2(this.image.width, this.image.height);
            this.spriteSheetOffset = Vector2.Zero();
        }

        if (this.sourceScale.X === this.image.width && this.sourceScale.Y === this.image.height) {
            this.spriteSheetPositions = [Vector2.Zero()];
        } else {
            this.spriteSheetPositions = this.generateSheetPositions();
        }
    }

    generateSheetPositions() {
        const positions: Vector2[] = [];
        const rows = this.image.width / this.sourceScale.X;
        const columns = this.image.height / this.sourceScale.Y;

        for (let y = 0; y < columns; y++) {
            for (let x = 0; x < rows; x++) {
                const spriteSheetPos = new Vector2(x * this.sourceScale.X, y * this.sourceScale.Y);
                positions.push(spriteSheetPos);
            }
        }

        return positions;
    }

    changeSprite(index: number) {
        if (index > this.spriteSheetPositions.length) {
            console.error(`Sprite index given: ${index} is greater than the number of available sprite indices: ${this.spriteSheetPositions.length}`);
            return;
        }
        this.spriteSheetIndex = index;
    }

    get Image(): HTMLImageElement {
        return this.image;
    }

    get SourcePosition(): Vector2 {
        return this.sourcePosition;
    }

    set CanvasPosition(pos: Vector2) {
        this.canvasPosition.X = pos.X;
        this.canvasPosition.Y = pos.Y;
    }

    set SourcePosition(pos: Vector2) {
        this.sourcePosition = pos;
    }

    public draw(): void {
        this.sourcePosition = this.spriteSheetPositions[this.spriteSheetIndex];
        Game.renderingContext.drawImage(this.image, this.sourcePosition.X, this.sourcePosition.Y, this.sourceScale.X, this.sourceScale.Y, this.canvasPosition.X, this.canvasPosition.Y, this.canvasScale.X, this.canvasScale.Y);
    }
}