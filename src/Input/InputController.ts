export class InputController {
    public Keys: { [key: string]: boolean } = {
        ArrowLeft: false,
        ArrowRight: false,
        ArrowUp: false,
        ArrowDown: false,
        KeyC: false,
        KeyX: false,
    };

    constructor() {
        addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] = true;
            }
        });

        addEventListener("keyup", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] = false;
            }
        });
    }
}