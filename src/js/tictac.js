const game = document.querySelector('.game');
const gameSteps = document.querySelectorAll('.game__inner');
const gameResult = document.querySelector('.result__text');
const playAgain = document.querySelector('result__again');

game.addEventListener("click", makeStep = (e) => {
    const step = e.target;
    if (!step.innerHTML) {
        step.innerHTML = "x";
        // if (gameSteps)

        botStep();
        step.removeEventListener("click", makeStep);
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

console.log(game.children)