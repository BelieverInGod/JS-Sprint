function mySolver(a,b,c,d,e)  {
    var x = a*a -5*b*c + d/3 + e
    if (isNaN(x)) {
       x = "Wrong input"
    }
    else {
        x = x.toFixed(2)
    }
    alert (x)
    //NaN = "Wrong input"
    return x
}

mySolver(40,-9,0.5,7,100)

mySolver(40,"doesn't look like a number",0.5,7,100)

mySolver(40,-9,0.5,7)

