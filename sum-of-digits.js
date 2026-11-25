function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum
}

function luckyNumber(number) {
    let sumEven = 0;
    let sumOdd = 0;
    let pos = 1;
    while (number > 0) {
        if (pos % 2 === 0) {
            sumEven += number % 10;
        } else {
            sumOdd += number % 10;
        }
        pos += 1;
        number = Math.floor(number / 10);
    }
    return sumEven === sumOdd
}

let res = sumDigits(12345);
console.log(`dum digits of 12345 = ${res}`); // should print 15
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky'); // should print lucky
res = luckyNumber(124871); // 1 + 4 + 7 !== 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky'); // should print not lucky