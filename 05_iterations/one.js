//for
for (let i = 1; i < 10; i++) {
    const element = i;
    console.log(element);
}

let myArray = ['cindrella',"snow white", "rupunzal"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break
for(let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log('Detected 5');
        break
    }
    console.log(i);
}

//continue
for(let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log('Detected 5');
        continue
    }
    console.log(i);
}
