const box = document.querySelectorAll(".box");
const points = document.querySelector(".points");
const reset = document.querySelector(".reset");
const newGame = document.querySelector(".new-game");
const player1score = document.querySelector(".player1");
const player2score = document.querySelector(".player2");

const player1 = "X";
const player2 = "O";
let playerTurn = player1;
let choices = [];

let player1points = 0;
let player2points = 0;

updateScore();
newGame.addEventListener("click", () => {
    choices = [];
    box.forEach(box => {
        box.innerText = "";
        box.style.color = "white";
    });
    player1points = 0;
    player2points = 0;
    player1score.innerText = `X : ${player1points}`;
    player2score.innerText = `O : ${player2points}`;
});

function updateScore() {
    player1score.innerText = `X : ${player1points}`;
    player2score.innerText = `O : ${player2points}`;
}

box.forEach(box => {
    box.addEventListener("click", box => {
        const boxId = box.target.id;

        if (!choices[boxId]) {
            choices[boxId] = playerTurn;
            box.target.innerText = playerTurn;

            if (playerWon(playerTurn)) {
                if (playerTurn === player1) {
                    player1points++;
                }

                if (playerTurn === player2) {
                    player2points++;
                }

                updateScore();
            }
            playerTurn = playerTurn === player1 ? player2 : player1;
        }
    });
});

function playerWon(player) {
    if (choices[0] === player) {
        if (choices[1] === player && choices[2] === player) {
            box[0].style.color = "green";
            box[1].style.color = "green";
            box[2].style.color = "green";
            return true;
        }

        if (choices[4] === player && choices[8] === player) {
            box[0].style.color = "green";
            box[4].style.color = "green";
            box[8].style.color = "green";
            return true;
        }

        if (choices[3] === player && choices[6] === player) {
            box[0].style.color = "green";
            box[3].style.color = "green";
            box[6].style.color = "green";
            return true;
        }
    }

    if (choices[3] === player) {
        if (choices[4] === player && choices[5] === player) {
            box[3].style.color = "green";
            box[4].style.color = "green";
            box[5].style.color = "green";
            return true;
        }
    }

    if (choices[6] === player) {
        if (choices[7] === player && choices[8] === player) {
            box[6].style.color = "green";
            box[7].style.color = "green";
            box[8].style.color = "green";
            return true;
        }

        if (choices[4] === player && choices[2] === player) {
            box[6].style.color = "green";
            box[4].style.color = "green";
            box[2].style.color = "green";
            return true;
        }
    }

    if (choices[1] === player) {
        if (choices[4] === player && choices[7] === player) {
            box[1].style.color = "green";
            box[4].style.color = "green";
            box[7].style.color = "green";
            return true;
        }
    }

    if (choices[2] === player) {
        if (choices[5] === player && choices[8] === player) {
            box[2].style.color = "green";
            box[5].style.color = "green";
            box[8].style.color = "green";
            return true;
        }
    }
}

function resetBoard() {
    choices = [];
    box.forEach(box => {
        box.innerText = "";
        box.style.color = "white";
    });
}

reset.addEventListener("click", resetBoard);
