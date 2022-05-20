function myFunc() {
    alert ('Freedom is power')
}

myFunc()

function countMySquare(number) {
    const square = Math.pow(number,2)
    alert(square)
    return square
}

var sho = countMySquare(2)

sho++
alert(sho)