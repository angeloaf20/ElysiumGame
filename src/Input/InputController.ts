export class InputController {
    public Keys: { [key: string]: boolean } = {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    };

    constructor() {
        addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] = true;
            }
            //console.log("Keys: " + JSON.stringify(this.Keys));
        });

        addEventListener("keyup", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] = false;
            }
            //console.log("Keys: " + JSON.stringify(this.Keys));
        });
    }
}