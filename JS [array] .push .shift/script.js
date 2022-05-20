let arr = [
    "Діма",
    "Льоша",
    "Вова",
]

arr.push("Привет!")

arr.shift()

console.log(arr.length)

let arrOne = [
    function getFunc() {
        console.log("OK function from [massive]")
    }
]

arrOne[0]()

let arrTwo = [1, 33, 9];

console.log(arrTwo.sort());

console.log(arrTwo.sort((a, b) => a - b)); //Коли сортуєм можна задати стрелочну функцію і все буде ок!
