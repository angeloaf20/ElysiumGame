import { Bounds } from "./Bounds";
import { PhysicsBody } from "./PhysicsBody";

export class PhysicsWorld {
    private physicsBodies: PhysicsBody[];
    private gravity: number;
    private airResistance;

    constructor(worldOptions: {
        gravity: number,
        airResistance: number,
        physicsBodies: PhysicsBody[],
    }) {
        this.gravity = worldOptions.gravity;
        this.airResistance = worldOptions.airResistance;
        this.physicsBodies = worldOptions.physicsBodies;
    }

    registerPhysicsBody(body: PhysicsBody) { 
        this.physicsBodies.push(body);
    }

    unregisterPhysicsBody(body: PhysicsBody) {
        const bodyIndex= this.physicsBodies.indexOf(body);
        this.physicsBodies.splice(bodyIndex, 1);
    }

    public WorldStep() {
        this.physicsBodies.forEach((body: PhysicsBody) => {
            body.step(this.gravity, this.airResistance);
        });
        
        this.physicsBodies.forEach((body: PhysicsBody, index: number) => {
            for (let nextIndex = index+1; nextIndex < this.physicsBodies.length; nextIndex++) {
                if (Bounds.checkOverlap(body.Bounds, this.physicsBodies[nextIndex].Bounds)) {
                    body.collisionResponse();
                }
            }
        });
    }
}
