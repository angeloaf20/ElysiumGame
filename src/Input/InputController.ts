type Key = {
    Code: string,
    Duration: number
};

export class InputController {
    public Keys: { [key: string]: number } = {
        ArrowLeft: 0, // move left
        ArrowRight: 0, // move rightc
        ArrowUp: 0, // jump
        ArrowDown: 0, // move down (from platform)
        KeyC: 0, // light attack
        KeyX: 0, // heavy attack
        KeyZ: 0 // shield/block
    };
    //private listenWindow: number; // listen for how long a key is pressed

    constructor() {
        addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] = Date.now();
                //this.Keys[event.code] = true;
            }
        });

        addEventListener("keyup", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] -= Date.now();
                //this.Keys[event.code] = false;
                console.log(this.Keys);
            }
        });
    }
}