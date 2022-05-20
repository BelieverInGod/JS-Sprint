function getAnswer(question, wrongAnswer, correctAnswer) {
    return(`${question}\nwrong: ${wrongAnswer}\ncorrect: ${correctAnswer}\n\n`);
}

const a = '15';
const b = 4 ;
const c = true ; 
const d = 'a';
const e = 'B';
const f = '';

let answer = 'Not my type\n\n';

answer += getAnswer('a+b=?', a + b, +a + b  ); ///зробив
answer += getAnswer('a+c=?', a + c, (a > c) +c ); ///зробив
answer += getAnswer('e+d+e+d=?', e + d + e + d , e + d * e + d); ///зробив
answer += getAnswer('c+f=?', c + f, String(+c) + f.length.toString()); ///незробив

alert(answer);