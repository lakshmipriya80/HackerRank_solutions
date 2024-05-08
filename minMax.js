//want to find the maxSum and minSum values
//max min sum means [1,2,3 ] max sum is 6, and minsum is 3

// sort arrow function
// Comparing 5 and 1:
// a - b evaluates to 5 - 1, which is 4. Since it's positive, 1 comes before 5. So, 1 stays before 5.
// Updated array: [1, 5, 8, 3, 2]
// Comparing 5 and 8:
// a - b evaluates to 5 - 8, which is -3. Since it's negative, 5 stays before 8. So, no change is needed.
// Array remains: [1, 5, 8, 3, 2]
// Comparing 8 and 3:
// a - b evaluates to 8 - 3, which is 5. Since it's positive, 3 comes before 8. So, 3 moves before 8.
// Updated array: [1, 5, 3, 8, 2]
// Comparing 8 and 2:
// a - b evaluates to 8 - 2, which is 6. Since it's positive, 2 comes before 8. So, 2 moves before 8.
// Updated array: [1, 5, 3, 2, 8]

let arr = [5, 1, 8, 3, 2];

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
 
     let minSum = 0;
     let maxSum = 0;
 
     for (let i = 0; i < arr.length - 1; i++) {
         minSum += arr[i];
     }
     for (let i = 1; i < arr.length; i++) {
         maxSum += arr[i];
     }
 
     console.log(minSum, maxSum);
 
 }

miniMaxSum(arr);