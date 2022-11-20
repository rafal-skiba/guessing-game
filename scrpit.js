const body = document.querySelector("body");
const number = document.querySelector(".number");
let randomNumber = Math.floor(Math.random()*20);

const input = document.querySelector(".quess");
const button = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const score = document.querySelector(".label-score");
const againButton = document.querySelector(".reset-button");


let result = 10

const dataMessage = {
    noInput: "Musisz wpisać liczbę od 1 do 20 ❗",
    correctNumber: "Gratulacje, podałeś prawidłową liczbę i ukończyłeś grę 🏆",
    toLowNumber: "Podałeś za małą liczbę, spróbuj ponownie 🚩",
    toHighNumber: "Podałeś za dużą liczbę, spróbuj ponownie 📈",
    gameOver: "Niestety przegrałęś",
    resetMessage: "Zacznij zgadywać"
}


button.addEventListener("click", () => {
    
    if (!input.value) {
        message.textContent = dataMessage.noInput;
    } else if (Number(input.value) === randomNumber) {
        message.textContent = dataMessage.correctNumber;
        body.classList.add("background");
        number.textContent = randomNumber;
        score.textContent = "Twój wynik: " + result;       
    } else if (Number(input.value) !== randomNumber) {
        if (result > 1) {
            message.textContent = Number(input.value) > randomNumber ? dataMessage.toHighNumber : dataMessage.toLowNumber;
            result--;
            score.textContent = "Twój wynik: " + result;
        } else {
            message.textContent = dataMessage.gameOver;
            score.textContent = 0;
        }
    }
})

againButton.addEventListener("click", () => {
    body.classList.remove("background");
    result = 10;
    score.textContent = "Twój wynik: " + result;
    randomNumber = Math.floor(Math.random()*20);
    number.textContent = "❓";
    message.textContent = dataMessage.resetMessage;
})

