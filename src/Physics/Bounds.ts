import { Vector2 } from "../Core/Math";

export class Bounds {
    private min: Vector2;
    private max: Vector2;

    constructor(position: Vector2, scale: Vector2) {
        this.min = new Vector2(position.X, position.Y);
        this.max = new Vector2(position.X + scale.X, position.Y + scale.Y);
    }

    static checkOverlap(aabb1: Bounds, aabb2: Bounds) {
        const horizontal = (aabb1.min.X >= aabb2.max.X && aabb1.max.X <= aabb2.min.X);
        const vertical = (aabb1.min.Y >= aabb2.max.Y && aabb1.max.Y <= aabb2.min.Y);

        console.log("vertical collision: " + vertical);
        console.log("horizontal collision: " + horizontal);

        return horizontal && vertical;
    }

    updateBounds(position: Vector2, scale: Vector2) {
        this.min.X = position.X;
        this.min.Y = position.Y;

        this.max.X = position.X + scale.X;
        this.max.Y = position.Y + scale.Y;
    }
}