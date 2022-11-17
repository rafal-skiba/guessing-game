const number = document.querySelector(".number");
const randomNumber = Math.floor(Math.random()*20);

const input = document.querySelector(".quess");
const button = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const score = document.querySelector(".label-score");

number.textContent = randomNumber;
let result = 20


button.addEventListener("click", () => {

    if (!input.value) {
        message.textContent = "Musisz wpisać liczbę od 1 do 20 ❗"
    } else if (Number(input.value) === randomNumber) {
        message.textContent = "Gratulacje, podałeś prawidłową liczbę i ukończyłeś grę 🏆";
    } else if (Number(input.value) > randomNumber) {
        if (result > 1) {
            message.textContent = "Podałeś za dużą liczbę, spróbuj ponownie 📈"
            result--;
            score.textContent = result;
        }  else {
            message.textContent = "Niestety przegrałęś";
            score.textContent = 0;
        }
    } else if (Number(input.value) < randomNumber) {
        if (result > 1) {
            message.textContent = "Podałeś za małą liczbę, spróbuj ponownie 🚩"
            result--;
            score.textContent = result;   
        }   else {
            message.textContent = "Niestety przegrałęś";
            score.textContent = 0;
        }
    } 
})

