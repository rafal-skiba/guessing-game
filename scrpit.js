const body = document.querySelector("body");
const number = document.querySelector(".number");
let randomNumber = Math.floor(Math.random()*20);

const input = document.querySelector(".quess");
const button = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const score = document.querySelector(".label-score");
const againButton = document.querySelector(".reset-button");


let result = 20


button.addEventListener("click", () => {
    
    if (!input.value) {
        message.textContent = "Musisz wpisać liczbę od 1 do 20 ❗"
    } else if (Number(input.value) === randomNumber) {
        message.textContent = "Gratulacje, podałeś prawidłową liczbę i ukończyłeś grę 🏆";
        body.classList.add("background");
        number.textContent = randomNumber;
        score.textContent = "Twój wynik: " + result;
        
    } else if (Number(input.value) > randomNumber) {
        if (result > 1) {
            message.textContent = "Podałeś za dużą liczbę, spróbuj ponownie 📈"
            result--;
            score.textContent = "Twój wynik: " + result;
        }  else {
            message.textContent = "Niestety przegrałęś";
            score.textContent = 0;
        }
    } else if (Number(input.value) < randomNumber) {
        if (result > 1) {
            message.textContent = "Podałeś za małą liczbę, spróbuj ponownie 🚩"
            result--;
            score.textContent = "Twój wynik: " + result; 
        }   else {
            message.textContent = "Niestety przegrałęś";
            score.textContent = 0;
        }
    } 
})

againButton.addEventListener("click", () => {
    body.classList.remove("background");
    score.textContent = 20;
    randomNumber = Math.floor(Math.random()*20);
    number.textContent = "❓";
    message.textContent = "Zacznij zgadywać";
})

