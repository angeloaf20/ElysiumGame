export type Key = {
    keyName: string,
    duration?: number
}

export interface Move {
    KeyList: Key[]
}

export class InputController {
    private keyBuffer: Key[];
    private currentKey!: Key | null;
    private counter: number;
    private maxBufferSize: number = 10;

    constructor() {
        this.keyBuffer = [];
        this.currentKey = null;
        this.counter = 0;

        addEventListener("keydown", (event: KeyboardEvent) => this.onKeyDown(event));
        addEventListener("keyup", (event: KeyboardEvent) => this.onKeyRelease(event));
    }


    get CurrentKey() {
        return this.currentKey;
    }

    private onKeyDown(event: KeyboardEvent) {
        if (this.currentKey === null || this.currentKey.keyName !== event.key) {
            this.counter = performance.now();
            this.currentKey = { keyName: event.key, duration: 0 };
            this.keyBuffer.push(this.currentKey);

            if (this.keyBuffer.length > this.maxBufferSize) {
                this.keyBuffer.shift();
            }
        }
    }

    private onKeyRelease(event: KeyboardEvent) {
        if (this.currentKey && this.currentKey.keyName === event.key) {
            this.currentKey!.duration = this.counter;
            this.resetCurrentKey();
        }
    }

    private resetCurrentKey() {
        if (this.currentKey !== null) {
            this.keyBuffer = [];
            this.currentKey = null;
            this.counter = 0;
        }
    }
}