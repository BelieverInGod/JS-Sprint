// 1

/*
function calcSum (numOne, numTwo, less, more) {
    let numSumm = numOne + numTwo;

    if(numSumm > 3) {
            more();
        }
        else {
            less();
        }
    } 

    function showMoreMessage() {
        console.log("More then 3, try to change number")
    }
    function showLessMessage() {
        console.log("Less then 3")
    }
    */


    // 2
/*
calcSum(1, 11, showLessMessage, showMoreMessage);

function calcNum (numOnee, numTwoo) {
    let calcSumm = numOnee + numTwoo ; 
    return calcSumm;
}
let calcResult = calcNum(12, 12)
console.log(calcResult)
*/

//  3
/*
function getSum(numberOne, numberTwo) {
    let resultSum = calcSum(15, 15)
    
    console.log(resultSum)

    function calcSum(numberOne,numberTwo) {
        return (numberOne + numberTwo)
    }
}

getSum()
*/
/*
function calcSumm(numOne, numTwo) {
    if(numTwo === 1){
        return numOne;
    } else {
        return numOne * calcSumm(numOne, numTwo - 1);
    }
}

console.log(calcSumm(2, 4))
*/

//let getName = (name, text) => name + "," + text + ".";
//console.log(getName("Діма", "я потрохі обучаюсь!"));

function getName (name, text) {
    let message = name + "," + text + "."
    console.log(message)
}

setTimeout(getName, 2000, 'Alexey', 'come on' )
setTimeout(getName, 4000, 'OK', 'well done' )
