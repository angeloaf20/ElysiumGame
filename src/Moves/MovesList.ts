export const movesList: { [key: string]: number }[] = [];

const MoveLeft: { [key: string]: number } = {
    ArrowLeft: 1, // move left
    ArrowRight: 0, // move right
    ArrowUp: 0, // jump
    ArrowDown: 0, // move down (from platform)
    KeyC: 0, // light attack
    KeyX: 0, // heavy attack
    KeyZ: 0 // shield/block
}

movesList.push(MoveLeft);

const MoveRight: { [key: string]: number } = {
    ArrowLeft: 0, // move left
    ArrowRight: 1, // move right
    ArrowUp: 0, // jump
    ArrowDown: 0, // move down (from platform)
    KeyC: 0, // light attack
    KeyX: 0, // heavy attack
    KeyZ: 0 // shield/block
}

movesList.push(MoveRight);