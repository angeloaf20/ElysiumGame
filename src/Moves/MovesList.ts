export const Moves: {[key: string]: { [key: string]: boolean } } = {
    Default: {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    },
    MoveLeft: {
        ArrowLeft: true, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    },
    MoveRight: {
        ArrowLeft: false, // move left
        ArrowRight: true, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    },
    MoveDown: {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: true, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    },
    Jump: {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: true, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    },
    Neutral: {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: true, // light attack
        KeyX: false, // heavy attack
        KeyZ: false // shield/block
    },
    Neavy: {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: true, // heavy attack
        KeyZ: false // shield/block
    },
    Shield: {
        ArrowLeft: false, // move left
        ArrowRight: false, // move right
        ArrowUp: false, // jump
        ArrowDown: false, // move down (from platform)
        KeyC: false, // light attack
        KeyX: false, // heavy attack
        KeyZ: true // shield/block
    },
};