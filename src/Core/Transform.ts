import { Vector2 } from "./Math";

export class Transform {
    private position: Vector2;
    private scale: Vector2;
    
    constructor() {
        this.position = Vector2.Zero();
        this.scale = new Vector2(1, 1);
    }

    get Position(): Vector2 {
        return this.position;
    }

    get Scale(): Vector2 {
        return this.scale;
    }
}