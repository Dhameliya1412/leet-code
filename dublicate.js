arr=[0,1,1,2,2,3,4,5,5,6,7,7,8,9,9,9];


var out=[];
for(var i=0,len=arr.length-1;i<len;i++){
    if(arr[i]!==arr[i+1]){
        console.log(arr[i]);
    }
}
console.log(arr[i]);

// ----------------------------------------------------------------------------

let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// --------------------------------------------------------------------------------


let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
