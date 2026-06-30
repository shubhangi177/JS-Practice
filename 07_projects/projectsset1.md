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