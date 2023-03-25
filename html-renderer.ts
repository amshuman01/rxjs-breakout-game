import { gameSize } from "./constants";
import { Player, Ball, GameObject } from "./interfaces";

const empty = 0; // diff types of board elements
const plyer = 1;
const bll = 2;
const brick = 3;

const createElem = (col) => {
  // creates background with specified features
  const elem = document.createElement("div");
  elem.classList.add("board");
  elem.style.display = "inline-block";
  elem.style.marginLeft = "10px";
  elem.style.height = "6px";
  elem.style.width = "6px";
  elem.style["background-color"] =
    col === empty
      ? "white"
      : col === plyer
      ? "cornflowerblue"
      : col === bll
      ? "gray"
      : "silver";
  elem.style["border-radius"] = col === bll ? "100%" : "0%";
  return elem;
};

// takes current state of player ball and game obj and renders to browser
export const render = ([player, ball, bricks]: [
  Player,
  Ball,
  GameObject[]
]) => {
  const game = Array(gameSize)
    .fill(0)
    .map((e) => Array(gameSize).fill(0)); //game board with empty spaces
  game[player.x][player.y] = plyer; //player pos on the game board
  game[ball.x][ball.y] = bll; //sets ball pos on the game board
  bricks.forEach((b) => (game[b.x][b.y] = brick)); // brick pos

  // diaply lives , score  in inner html
  document.body.innerHTML = `Score: ${player.score} Lives: ${player.lives} <br/>`;
  game.forEach((r) => {
    //creates row container div and fills it based on game array
    const rowContainer = document.createElement("div");
    r.forEach((c) => rowContainer.appendChild(createElem(c)));
    document.body.appendChild(rowContainer);
  });
};
