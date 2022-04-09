//part A
let celsius = 100
let fahrenheit = celsius * 9/5 + 32
console.log(`${celsius} celsius degree is ${fahrenheit} fahrenheit degree.`)

let fahrenheit2 = 100
let celsius2 = ( fahrenheit2 - 32) * 5/9
console.log(`${fahrenheit2} fahrenheit degree is ${celsius2} celsius degree.`)

//part B
let johnBMI = 28.3
let lucasBMI = 23.9

if (johnBMI < lucasBMI){
    console.log('Lucass BMI is highter than Johns!')
}else{
    console.log("John's BMI is higher than Lucas's!")
}

if (lucasBMI > johnBMI){
    console.log(`Jonhn's BMI (${johnBMI}) is highter than Lucas' BMI (${lucasBMI}), that is True!`)
}else{
    console.log(`Lucas's BMI (${lucasBMI}) is highter than John's BMI (${johnBMI}), that is false!`)
}

//part C
let userNumber = Number(prompt());
if (!userNumber && userNumber !== 0){ //what to input if user enters nothing or strings
    console.log('Please enter a number!')
}else if(userNumber === 10){
    console.log('You win 10 points')
}else if(userNumber === 8){
    console.log('You win 8 points')
}else{
    console.log('NOT MATCHED!!')
}

//part D
//Nets = [80, 82, 100]
//Knicks = [80, 90, 106]
function draw(Nets, Knicks){
   if (Nets === Knicks && Nets >= 100 && Knicks >= 100){
       console.log('we have a draw')
   }else{
       console.log('no team wins the trophy')
   }
}
draw(80,80)
draw(82,90)
draw(100, 106)
draw(98, 108)
draw(110, 92)
draw(101, 110)
draw(110, 110)

//part E
//using if else function
function tipCalculator(i){
    if ( i > 30 && i < 100){
        console.log(i * 1.15)
    }else{
        console.log(i * 1.20)
    }
}
tipCalculator(70)


function tipCalculator2(i){
    if (i > 30 && i < 100){
        console.log(`The bill was ${i}, the tip was ${i*0.15}, and the totle value ${i*1.15}.`)
    }else{
        console.log(`The bill was ${i}, the tip was ${i*0.20}, and the totle value ${i*1.20}.`)
    }
}
tipCalculator2(285)
tipCalculator2(26)
tipCalculator2(90)


//using arrow function
const tipCal = cost => cost > 30 && cost < 100 ? console.log(`The bill was ${cost}, the tip was ${cost*0.15}, and the totle value ${cost*1.15}.`) : console.log(`The bill was ${cost}, the tip was ${cost*0.20}, and the totle value ${cost*1.20}.`);
tipCal(285);
tipCal(26);
tipCal(90);

//part F
const CovertCelsiusToFahrenheit = celsiusArg => `${celsiusArg} C is ${celsiusArg * 9/5 + 32} F`;
console.log(CovertCelsiusToFahrenheit(100));
console.log(CovertCelsiusToFahrenheit(0));
console.log(CovertCelsiusToFahrenheit(10));

const CovertFahrenheiToCelsius = fahrenheitArg => `${fahrenheitArg} F is ${( fahrenheitArg - 32) * 5/9} C.`
console.log(CovertFahrenheiToCelsius(32));
console.log(CovertFahrenheiToCelsius(10));
console.log(CovertFahrenheiToCelsius(102));