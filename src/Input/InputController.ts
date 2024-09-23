export class InputController {
    public Keys: { [key: string]: number } = {
        ArrowLeft: 0, // move left
        ArrowRight: 0, // move right
        ArrowUp: 0, // jump
        ArrowDown: 0, // move down (from platform)
        KeyC: 0, // light attack
        KeyX: 0, // heavy attack
        KeyZ: 0 // shield/block
    };

    private listenWindow: number; // listen for how long a key is pressed

    constructor() {
        this.listenWindow = 0;

        addEventListener("keydown", (event: KeyboardEvent) => {
            this.listenWindow++;
            if (event.code in this.Keys) {
                if (event.code === "ArrowLeft" ||event.code === "ArrowRight" || event.code === "ArrowUp" || event.code === "ArrowDown") this.Keys[event.code] = 1;
                else this.Keys[event.code]+=1;
            }
        });

        addEventListener("keyup", (event: KeyboardEvent) => {
            if (event.code in this.Keys) {
                this.Keys[event.code] = 0;
            }
        });
    }

    update() {
        this.listenWindow++;
    }
}