function getSymbol(text) {
    let obj = {}
    for(let i = 0 ; i < text.length; i++ ) {
        console.log(i)
        if(obj[myText[i]]) {
            obj[myText[i]]++ ;
        } else {
            obj[myText[i]] = 1 ;
        }
    }
    return obj 
}

let myText = "Льоша, це по буквам";

console.log(getSymbol(myText));

let strWord = "Льоша, Діма, Вова, Ігор.";
let word = strWord.split(" ");
for(let a of word){
    console.log(a)
    console.log(a.length)
}
