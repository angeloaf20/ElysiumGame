export class Vector2 {
    public X: number;
    public Y: number;

    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    static Zero() {
        return new Vector2(0, 0);
    }
}