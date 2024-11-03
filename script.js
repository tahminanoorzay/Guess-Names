const namesOfArray = ["Ahmad", "Ali", "Sodais", "Tamim", "Aysha", "Donya"];
let newArray = [];
let score = 0;

let radomName = Math.floor(Math.random() * namesOfArray.length);
newArray.push(namesOfArray[radomName]);

console.log(newArray);

function checkName() {
  let guessName = document.querySelector("#guessName").value;
  if (newArray[0] === guessName) {
    score += 5;
    document.querySelector("#scoreDiv").innerHTML = `Your score is : ${score}`;
  } else {
    document.querySelector("#scoreDiv").innerHTML = `You guessed wrong`;
  }
}

function startName() {
  document.querySelector("#guessName").disabled = false;
  document.querySelector("#checkBtn").disabled = false;
  document.querySelector("#guessName").value = "";
  document.querySelector("#timeoutDiv").innerHTML = "";
  timer();

  newArray = [];

  let radomName = Math.floor(Math.random() * namesOfArray.length);
  newArray.push(namesOfArray[radomName]);
  console.log(newArray);
}

function timer() {
  setTimeout(() => {
    document.querySelector("#guessName").disabled = true;
    document.querySelector("#checkBtn").disabled = true;
    document.querySelector("#timeoutDiv").innerHTML = "Time is out!";
  }, 10000);
}

let txt = "JavaScript is amazing";

