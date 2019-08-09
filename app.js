let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const smallUser = "User".fontsize(3).sup();
const smallComp = "Comp".fontsize(3).sup();



function computerChoice() {
    const choice = ['r', 'p', 's'];
    return choice[(Math.floor(Math.random() * 3))]
}

function convertWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(computerChoice, UserChoice) {
    userScore++;
    const glow_css = document.getElementById(UserChoice);
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertWords(UserChoice)}${smallUser} wins against ${convertWords(computerChoice)}${smallComp}.`;
    glow_css.classList.add('green-glow');
    setTimeout(() => glow_css.classList.remove('green-glow'), 300);
}

function lose(computerChoice, UserChoice) {
    computerScore++;
    const glow_css = document.getElementById(UserChoice);
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWords(UserChoice)}${smallUser} Lose against ${convertWords(computerChoice)}${smallComp}.`;
    glow_css.classList.add('red-glow');
    setTimeout(() => glow_css.classList.remove('red-glow'), 300);
}

function draw(computerChoice, UserChoice) {
    const glow_css = document.getElementById(UserChoice);
    result_p.innerHTML = `${convertWords(UserChoice)}${smallUser} draw against ${convertWords(computerChoice)}${smallComp}.`;
    glow_css.classList.add('gray-glow');
    setTimeout(() => glow_css.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    comp_choice = computerChoice();
    switch (userChoice + comp_choice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log("UserWins");
            win(comp_choice, userChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log("UserLose");
            lose(comp_choice, userChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log("Draw");
            draw(comp_choice, userChoice);
            break;
    }
}


rock_div.addEventListener('click', () =>
    game("r")
)
paper_div.addEventListener('click', () =>
    game("p")
)
scissor_div.addEventListener('click', () =>
    game("s")
)