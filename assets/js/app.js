const container = document.getElementById("container");
const adviceid = document.getElementById("adviceID");
const adviceQuote = document.getElementById("quote");
const diceBtn = document.getElementById("dice");

const getAdvice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => {
      if (!data) throw new Error("data Unfound!");
      adviceid.textContent = `#${data.slip.id}`;
      adviceQuote.textContent = `${data.slip.advice}`;
    })
    .catch((err) => console.error(`${err} 💣💣`))
    .finally(() => (container.style.opacity = 1));
};
getAdvice();

diceBtn.addEventListener("click", () => {
  container.style.opacity = 0;
  setTimeout(() => {
    getAdvice();
  }, 700);
});

////////////////// Bounas ////////////////////

// Every 20s will generate new advice

setInterval(() => {
  container.style.opacity = 0;
  setTimeout(() => {
    getAdvice();
  }, 700);
}, 20000);
