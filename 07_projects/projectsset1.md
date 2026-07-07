# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(b){
  b.addEventListener('click', function(e){
      body.style.backgroundColor=e.target.id
  })
})
```

## project 2

```javascript
const form = document.querySelector('form')
const result = document.querySelector('#results')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  if(height <= 0 || isNaN(height)){
    result.innerHTML = `please enter a valid height ${height}`
  }else if(weight <= 0 || isNaN(weight)){
    result.innerHTML = `please enter a valid weight ${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    if(bmi<18.6) result.innerHTML = `<span>You are underweight ${bmi}</span>`
    else if(bmi>=18.6 && bmi<=24.9) result.innerHTML = `<span>You are under normal range ${bmi}</span>`
    else result.innerHTML = `<span>You are overweight ${bmi}</span>`
  }
})
```


## project 3
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//to show time on loading the page
const localTime = document.querySelector('#clock');
function updateClock(){
  localTime.innerHTML = new Date().toLocaleTimeString();
}
updateClock()

setInterval(updateClock, 1000 )
```

# project 4
```javascript
let randomNum = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const showGuesses = document.querySelector('.guesses');
let prevGuess = new Array();
const remGuess = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
let playGame = true;
let numGuess = 1;

const p = document.createElement('p');

if (playGame) {
  //
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = parseInt(userInput.value);
    validateGuess(inputValue);
  });
}

function validateGuess(inputValue) {
  //
  if (isNaN(inputValue)) alert('Please enter a valid number');
  else if (inputValue > 100) alert('Please enter vaue less than 100 ');
  else if (inputValue < 0) alert('Please enter vaue more than 1');
  else {
    prevGuess.push(inputValue);
    if (numGuess == 11) {
      displayGuess();
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(inputValue);
      checkGuess(inputValue);
    }
  }
}

function checkGuess(inputValue) {
  //
  if (inputValue == randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (inputValue < randomNum) displayMessage(`You guess is Too Low`);
  else if (inputValue > randomNum) displayMessage(`You guess is TOO High`);
}

function displayMessage(message) {
  //
  lowHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(inputValue) {
  //
  userInput.value = '';
  showGuesses.innerHTML += `${inputValue}, `;
  numGuess++;
  remGuess.innerHTML = `${11 - numGuess}`;
}

function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">'Start new game'</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    showGuesses.innerHTML = '';
    remGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```
# project 5
```javascript
const insert = document.querySelector('#insert')
document.addEventListener('keydown', function(e){
  insert.innerHTML =`
  <table>
    <tr>
      <th>Key</th>
      <th>Code</th>
      <th>Keycode</th>
    </tr>
    
    <tr>
      <td>${e.key === ' '? 'Space': e.key}</td>
      <td>${e.code}</td>
      <td>${e.keyCode}</td>
    </tr>
  </table>
  `;
})
```

# project 6
```javascript
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let colors = "#";
  for(let i = 0; i < 6; i++){
    colors+=hex[Math.floor(Math.random()*16)];
  }
  return colors;
}

let intervalId = null;
const startChangingColor = function(){
  if(!intervalId)
    intervalId = setInterval(changeColor,1000)
    function changeColor(){
      document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null
}
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
```


