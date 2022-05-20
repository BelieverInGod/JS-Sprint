///1
let str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for..."
console.log(str1)
///2
let length = str1.length
let str1dlina = `Длина: ${length}`
console.log(str1dlina)
///3
let str1up = `To upercase ${"YOU'RE CATNIP TO A GIRL LIKE ME. HANDSOME, DAZED, AND TO DIE FOR..."}`
console.log(str1up)
///4
let str1Conc = `Concatenation in a phrase: ${str1 += '-Catwoman'}`
console.log(str1Conc)
///5
let str2 = 'Batman: "I tried to save you"'
let batman = `[Batman Returns] ${str2}`
console.log(batman)
///6
let str3 = `Selina Kyle: catwoman"Mmm seemCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful "`
let replaceResult = str3.replace(/catwoman/ig," ") 
console.log(replaceResult)

alert(`${str1}\n${str1dlina}\n${str1up}\n${str1Conc}\n${batman}\n${replaceResult}`)






