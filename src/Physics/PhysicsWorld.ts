import { Bounds } from "./Bounds";
import { PhysicsBody } from "./PhysicsBody";

export class PhysicsWorld {
    private physicsBodies: PhysicsBody[];
    private physicsBodiesCount: number;
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
        this.physicsBodies.forEach((body: PhysicsBody) => {
            body.step(this.gravity, this.airResistance);
        });
        
        this.physicsBodies.forEach((body: PhysicsBody, index: number) => {
            for (let nextIndex = index+1; nextIndex < this.physicsBodies.length; nextIndex++) {
                if (Bounds.checkOverlap(body.Bounds, this.physicsBodies[nextIndex].Bounds))
                    console.log("Collision");
            }
        });
    }
}
