import { Vector2 } from "../Core/Math";
import { Bounds } from "./Bounds";

export class PhysicsBody {
    private position: Vector2;
    private scale: Vector2;
    private mass: number;

    private force: Vector2;
    private velocity: Vector2;

    private friction: number;

    private isStatic: boolean;

    private bounds: Bounds;
    
    constructor(bodyOptions: {
        position: Vector2,
        scale: Vector2,
        mass: number,
        isStatic: boolean
    }) {
        this.position = bodyOptions.position;
        this.scale = bodyOptions.scale;

        this.velocity = Vector2.Zero();

        this.force = Vector2.Zero();
        this.mass = bodyOptions.mass;

        this.friction = 0.45;

        this.isStatic = bodyOptions.isStatic;

        this.bounds = new Bounds(this.position, this.scale);
    }

    step(gravity: number, airResistance: number) {
        if (this.isStatic) return;

        this.velocity.X = this.force.X * this.friction;
        this.velocity.Y = (this.force.Y / this.mass) + (gravity - airResistance);

        this.position.X += this.velocity.X;
        this.position.Y += this.velocity.Y;

        //this.Bounds.checkOverlap()
        this.Bounds.updateBounds(this.position, this.scale);

        this.force.X = 0;
    }

    addForce(force: Vector2) {
        this.force.X = force.X;
        this.force.Y = force.Y;
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

    get Bounds() {
        return this.bounds;
    }
}