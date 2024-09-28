export class Vector2 {
    public X: number;
    public Y: number;

    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    Clone() {
        return new Vector2(this.X, this.Y);
    }

    static Zero(): Vector2 {
        return new Vector2(0, 0);
    }

    static Add(v1: Vector2, v2: Vector2): Vector2 {
        return new Vector2(v1.X + v2.X, v1.Y + v2.Y);
    }

    static Subtract(v1: Vector2, v2: Vector2): Vector2 {
        return new Vector2(v1.X - v2.X, v1.Y - v2.Y);
    }

    // static Dot(v1: Vector2, v2: Vector2): Vector2 {
    //     return ()
    // }

    static Magnitude(v: Vector2) {
        return Math.sqrt((v.X * v.X) + (v.Y * v.Y));
    }
}