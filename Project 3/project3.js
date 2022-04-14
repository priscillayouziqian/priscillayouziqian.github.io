const userInput=document.querySelector('input');
const btn=document.querySelector('.btn1');
const reset=document.querySelector('.btn2');
const msg = document.querySelector('.msg');
const body=document.querySelector('body');
const score= 10;
const currentScore = document.querySelector('.currentScore');

const secrectNum=Math.trunc(Math.random()*10);
//Math.trunc means get rid of decimals.

console.log(userInput.value);

// btn.addEventListener('click', run);

// function run(){
//     if (Number(userInput.value)===10){
//        msg.textContent=`You win 10 points. Secret number is ${secrectNum}.`;

//        body.style.backgroundColor='lightblue';
//     }
//     else if(!(Number(userInput.value))){
//         msg.textContent=`Please enter number 1 to 100 ONLY!`;
//         body.style.backgroundColor='lightgreen';
//         document.querySelector('span').textContent=String(score);
//     }
//     else{
//         msg.textContent='good job';
//     }
// }

let randomNumber=Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)

reset.addEventListener('click', calScores);
function calScores(){
    count1=0;
    currentScore.innerHTML=`current score: ${count1}`;
    btn.removeAttribute("disabled");
    randomNumber=Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
}

let storeHighscore = [];
let count1=0;
btn.addEventListener('click', function(){
    let inputVal = Number(userInput.value);

    if (!inputVal && inputVal !== 0){
        alert("Please Enter A number")
    }
    else if(inputVal > randomNumber){
        msg.innerHTML='Your number is too high';
        currentScore.innerHTML=`Current Score: ${count1 +1}`;
    }
    else if (inputVal < randomNumber){
        msg.innerHTML='Your number is too low';
        currentScore.innerHTML=`Current Score: ${count1 +1}`;
    }
    else if (inputVal === randomNumber){
        count1 = count1 + 1
        msg.innerHTML='That is right!!!';
        btn.removeAttribute("disabled", "disabled");

        currentScore.innerHTML=`Current Score: ${count1 +1}`;
        console.log(count1)

        storeHighscore.push(count1);
        storeHighscore.sort(function(a,b){
            return a - b;
        })
        console.log(storeHighscore);
        document.querySelector('.highscore').innerHTML = `Hightscore: ${storeHighscore[0]}`;
    }
})