function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i ++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) === target) {
        return true;
      }
    }
  } 
  return false //if no pair is found
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
  the worst case scenario, the algotithm would have to go through it n * n times since its comparing two values against each other as it iterates along the entire array
*/

/* 
  Add your pseudocode here
  step1 the function takes in an array and a target integer as its arguments
  step2 we define a for loop such that we can compare two values which will likeley lead to a quadratic time function
  step3 declare the first variable as the first index of the array. for as long as the index is less than or equal to the length of the array it will continue to increment
  step4 declare a second variable that is the first index + 1 of the array. the purpose of this variable is to add itself to the first variable and continue to increment as long as it is less than or equal to the length of the array
  step5 we now return a boolean that says if the sum of the two variables is equal to the target integer, it returns true, else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
