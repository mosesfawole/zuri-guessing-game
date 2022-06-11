let range = 2;
document.getElementById(
  "range"
).textContent = `Please enter a value within the range of 1 and ${range} 
`;
const username = prompt("Please enter your username");
document.cookie = `username =${username} `;
function checkGuess(e) {
  e.preventDefault();
  let points = document.getElementById("points");
  let guessField = prompt("Please enter your guess");
  let randomNumber = Math.floor(Math.random() * range + 1);
  console.log(range);
  if (guessField == randomNumber) {
    range = range + 1;
    alert("You guessed correctly!, you have a point");
    document.getElementById(
      "range"
    ).textContent = `Please enter a value within the new range of 1 and ${range} 
    `;

    document.cookie = `points =${points.textContent++}`;
  } else if (range == 5) {
    alert("Game over");
    location.reload();
  } else {
    alert("You guessed incorrectly!");
  }
}

document.getElementById("btn").addEventListener("click", checkGuess);
