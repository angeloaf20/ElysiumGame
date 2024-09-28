//import { InputController } from "../Input/InputController";

import { Vector2 } from "../Core/Math";

export class MovementController {
   // private inputController?: InputController;

    static Translate(position: Vector2, speed: Vector2) {
        position.X += speed.X ;
        position.Y += speed.Y ;
    }
}