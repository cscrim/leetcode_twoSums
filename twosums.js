// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.


function twoSum(num, target) {

    for (i=0; i<num.length; i++) {
        for (j=0; j<num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i,j];
            }
        }
    }

    return [];
}


const num = [3, 9, 14, 23];
target = 12;

console.log(twoSum(num, target));