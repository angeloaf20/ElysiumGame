import { Vector2 } from "../Core/Math";

export class PhysicsBody {
    private position: Vector2;
    private scale: Vector2;
    private mass: number;

    private force: Vector2;
    private acceleration: Vector2;
    private velocity: Vector2;

    private isStatic: boolean;
    
    constructor(mass: number, isStatic: boolean) {
        this.position = Vector2.Zero();
        this.scale = new Vector2(1, 1);
        this.velocity = Vector2.Zero();

        this.force = Vector2.Zero();
        this.acceleration = Vector2.Zero();
        this.mass = mass;

        this.isStatic = isStatic;
    }

    step(gravity: number, airResistance: number) {
        if (this.isStatic) return;

        this.acceleration.X = this.force.X / this.mass;
        this.acceleration.Y = this.force.Y + (gravity - airResistance);

        this.velocity.X = this.acceleration.X;
        this.position.X += this.velocity.X;

        this.force.X = 0;
    }

    addForce(force: Vector2) {
        this.force.X = force.X;
        this.force.Y = force.Y;
    }

    checkOverlap() {

    }

    get Position(): Vector2 {
        return this.position;
    }

    get Scale(): Vector2 {
        return this.scale;
    }

    get Velocity(): Vector2 {
        return this.velocity;
    }

    set Position(pos: Vector2) {
        this.position.X = pos.X;
        this.position.Y = pos.Y;
    }

    set Velocity(vel: Vector2) {
        this.velocity.X = vel.X;
        this.velocity.Y = vel.Y;
    }

    set Scale(scale: Vector2) {
        this.scale.X = scale.X; 
    }
}