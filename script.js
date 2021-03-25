const image = document.getElementById("die");
const p = document.getElementsByClassName("display")[0];
let totalScore = 0;

document.addEventListener("click", () => {
  let randomNumber = Math.ceil(Math.random() * 6);
  console.log(randomNumber);
  image.src = `dice${randomNumber}.png`;
  totalScore += randomNumber;
  console.log(totalScore);
  if (randomNumber === 1) {
    p.textContent = "you loose";
    totalScore = 0;
  } else if (totalScore >= 12) {
    p.textContent = "you win";
  } else {
    p.textContent = "keep going till you get 12!";
  }
});
