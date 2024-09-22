import { Game } from "./Core/Game";

document.addEventListener("DOMContentLoaded", function() {
  const game = new Game();
  requestAnimationFrame(() => game.gameLoop());
});