// task 1
const sumOfDigits = (n) => {
    if (n < 10){
        return n;
    } else {
        return (n % 10) + sumOfDigits(Math.floor(n / 10));
    }
};
// task 2


// task 3

function sumOfNumbers(a,b, ...nums){
    let sum = a+b;
    for(let arg of nums){sum += arg;}
    return sum;
    };
    // console.log(sumOfNumbers.apply(null, [1, 2, 3, 4, 5]));
    // console.log(sumOfNumbers.call(null, 1, 2, 3, 4, 5));

// task 4


function checkOfEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return checkOfEven(num - 2);
    }   
}; 