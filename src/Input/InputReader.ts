import { InputController } from "./InputController";
import { Moves } from "../Moves/MovesList";

export class InputReader {
    private inputController: InputController;
    //private recognizedMoves: { [key: string]: boolean }[];

    constructor() {
        this.inputController = new InputController();
        //this.recognizedMoves = [];
    }

    update() {
        const keys = JSON.stringify(this.inputController.Keys);

        switch (keys) {
            case JSON.stringify(Moves.MoveLeft):
                console.log("MoveLeft");
                break;
            case JSON.stringify(Moves.MoveRight):
                console.log("MoveRight");
                break;
            case JSON.stringify(Moves.MoveDown):
                console.log("MoveDown");
                break;
            case JSON.stringify(Moves.Jump):
                console.log("Jump");
                break;
            case JSON.stringify(Moves.Neutral):
                console.log("Neutral");
                break;
            case JSON.stringify(Moves.NeutralUp):
                console.log("NeutralUp");
                break;
        }
    }


}