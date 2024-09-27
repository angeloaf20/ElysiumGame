import { PhysicsBody } from "./PhysicsBody";

export class PhysicsWorld {
    private physicsBodies: PhysicsBody[];
    private physicsBodiesCount: number;
    private gravity: number = 3.5;
    private airResistance: number = 2;

    constructor() {
        this.physicsBodies = [];
        this.physicsBodiesCount = this.physicsBodies.length;
    }

    registerPhysicsBody(body: PhysicsBody) { 
        this.physicsBodies.push(body);
        this.physicsBodiesCount = this.physicsBodies.length;
    }

    unregisterPhysicsBody(body: PhysicsBody) {
        const bodyIndex= this.physicsBodies.indexOf(body);
        this.physicsBodies.splice(bodyIndex, 1);
        this.physicsBodiesCount = this.physicsBodies.length;
    }

    public WorldStep() {
        for (let i = 0; i < this.physicsBodiesCount; i++) {
            let body = this.physicsBodies[i];
            body.step(this.gravity, this.airResistance);
        }
    }
}
