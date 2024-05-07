//given an array - integers
//calculate the ratios of that element that are positive negative and zero 

// for example 
//array = [-1,-3,1,2,0] ratios = 2/5,2/5,1/5
//output
//0.400000
//0.400000
//0.200000

let array = [-1,-3,1,4,4]

function plusMinus(array){
n = array.length;
let pos = 0;
let neg = 0;
let zero = 0;

for (let i = 0; i < n; i++){
if (array[i]<0){
pos += 1;
}
else if(array[i]>0){
neg += 1;
}else{
    zero += 1;
}
}

positive = pos/n;
negative = neg/n;
zeroValue = zero/n

console.log(positive.toFixed(6));

console.log(negative.toFixed(6));

console.log(zeroValue.toFixed(6));

}

plusMinus(array);