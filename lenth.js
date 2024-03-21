// 1.lenth of word------------------------------------

// var fruits = ["apple", "mango", "watermelon", "orange" ];
// var fruits_len = fruits.map((ele) => ele.length);
// console.log(fruits_len);

// 2.-------------------------------------------------

function reverse(num) {
    let digits = Array.from(String(num), Number);
    let reversedArray = digits.reduce((acc, digit) =>
        [digit, ...acc], []);
    return parseInt(reversedArray.join(''));
}
 
let num = 123456789;
console.log(reverse(num));
 
console.log(reversedNum);