import { InputController } from "./InputController";
import { Moves } from "../Moves/MovesList";
import { Queue } from "../Core/Queue";

export class InputReader {
    private inputController: InputController;
    //private inputtedMoves: Queue<{[key: string]: boolean}> = new Queue();
    private inputtedMoves: Queue<string> = new Queue();

    constructor() {
        this.inputController = new InputController();
    }

    update() {
        const keys = JSON.stringify(this.inputController.Keys);

        if (keys === JSON.stringify(Moves.Default)) {
            this.inputtedMoves.Dequeue();
            return;
        }

        switch (keys) {
            case JSON.stringify(Moves.MoveLeft):
                this.inputtedMoves.Enqueue("MoveLeft");
                break;
            case JSON.stringify(Moves.MoveRight):
                this.inputtedMoves.Enqueue("MoveRight");
                break;
            case JSON.stringify(Moves.MoveDown):
                this.inputtedMoves.Enqueue("MoveDown");
                break;
            case JSON.stringify(Moves.Jump):
                this.inputtedMoves.Enqueue("Jump");
                break;
            case JSON.stringify(Moves.Neutral):
                this.inputtedMoves.Enqueue("Neutral");
                break;
            case JSON.stringify(Moves.NeutralUp):
                this.inputtedMoves.Enqueue("NeutralUp");
                break;
        }
    }

    get InputtedMoves() {
        return this.inputtedMoves;
    }


}