// the first loop
var i = 6;
var res1 = ' ';

do {
        res1 += i + ' ';
        i++;
} while (i < 10);

// the second loop
i = 6;
var res2 = ' ';
while ( i < 10)
{
        res2 += +i + '\sTanya';
        i++
}

alert('do while: ' + res1 + 'while: ' + res2);
