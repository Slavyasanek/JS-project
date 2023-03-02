const game = document.querySelector('.game');
const gameSteps = document.querySelectorAll('.game__inner');
const gameResult = document.querySelector('.result__text');
const playAgain = document.querySelector('.result__again');

let i = 0;
game.addEventListener("click", makeStep = (e) => {
    const step = e.target;
    if (!step.innerHTML) {
        step.innerHTML = "x";
        i += 1;
        if (i > 4) {
            i = 0;
            return;
        } else {
            botStep();
        }
        checkWinner();
    }
})

const getRandomInt = () => {
    return Math.floor(Math.random() * (8 - 0) + 0);
}

const botStep = () => {
    let randomMove = Number.parseInt(getRandomInt());
    if (!gameSteps[randomMove].innerHTML) {
        gameSteps[randomMove].innerHTML = "o";
    } else {
        botStep();
    }
}

const checkWinner = () => {
    const combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let comb of combs) {
        if (gameSteps[comb[0]].textContent == gameSteps[comb[1]].textContent &&
            gameSteps[comb[1]].textContent == gameSteps[comb[2]].textContent &&
            gameSteps[comb[0]].textContent != '') {
            if (gameSteps[comb[0]].textContent === "x" &&
                gameSteps[comb[1]].textContent === "x" &&
                gameSteps[comb[2]].textContent === "x") {
                gameResult.textContent = "You win!";
                playAgain.classList.remove('disabled');
                playAgain.textContent = "Wanna play again?";
            } else {
                gameResult.textContent = "Bot winned:(";
                playAgain.classList.remove('disabled');
                playAgain.textContent = "Wanna play again?";
            }

        } else {
            const hasStep = (element) => {
                return element.innerHTML;
            }
            if ([...gameSteps].every(hasStep)) {
                gameResult.textContent = "It is a draw! Nobody winned";
                playAgain.classList.remove('disabled');
                playAgain.textContent = "Wanna play again?";
            }
        }
    }
}

playAgain.addEventListener("click", clearGame = () => {
    gameSteps.forEach(step => step.innerHTML = "");
    gameResult.textContent = "";
    playAgain.textContent = "";
    playAgain.classList.add('disabled');
})

console.log(gameSteps)