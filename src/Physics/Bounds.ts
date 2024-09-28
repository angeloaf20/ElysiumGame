import { Vector2 } from "../Core/Math";

export class Bounds {
    private min: Vector2;
    private max: Vector2;

    constructor(position: Vector2, scale: Vector2) {
        this.min = new Vector2(position.X, position.Y);
        this.max = new Vector2(position.X + scale.X, position.Y + scale.Y);
    }

    static checkOverlap(aabb1: Bounds, aabb2: Bounds) {
        const aabb1Left = aabb1.min.X;
        const aabb1Right = aabb1.max.X;
        const aabb1Top = aabb1.min.Y;
        const aabb1Bottom = aabb1.max.Y;

        const aabb2Left = aabb2.min.X;
        const aabb2Right = aabb2.max.X;
        const aabb2Top = aabb2.min.Y;
        const aabb2Bottom = aabb2.max.Y;

        const horizontal = (aabb1Right >= aabb2Left && aabb1Left <= aabb2Right);
        const vertical = (aabb1Bottom >= aabb2Top && aabb1Top <= aabb2Bottom);

        return horizontal && vertical;
    }

    updateBounds(position: Vector2, scale: Vector2) {
        this.min.X = position.X;
        this.min.Y = position.Y;

        this.max.X = position.X + scale.X;
        this.max.Y = position.Y + scale.Y;
    }
}