///documen.querySelector('')
let inputIn1 = document.querySelector('.input-in1');
let inputIn2 = document.querySelector('.input-in2');
let inputIn3 = document.querySelector('.input-in3');
let button = document.querySelector('button');
///querySelector1


button.onclick = function () {
    //console.log(inputIn1.value)
    //console.log(inputIn2.value)
    //console.log(inputIn3.value)
    let a = inputIn1.value;
    let b = inputIn2.value;
    let c = inputIn3.value;
    
    let result = a.match( /^[a-zA-Z]{2,20}$/g ) 
    if (!result) {
        alert("ERROR,Not case sensitive")
    }
    else {
        a = a + "-"
        if (b === "male" && c < 18) {
            a = a + "boy"
        }
        else if (b === "male" && c > 18) {
            a = a + "man"
        }
        else if (b === "female" && c < 18) {
            a = a + "girl"
        }
        else if (b === "female" && c > 18) {
            a = a + "woman"
        }
        else if (b === "" && c < 18) {
            a = a + "kid"
        }
        else if (b === "" && c > 18) {
            a = a + "hero"
        }
        else {
            console.log("Not case sensitive")
            alert("ERROR,Not case sensitive")
        }
        
        console.log('Супергерой скоро будет найден!')
        console.log("The Superhero name is: " + a)
    } 
}