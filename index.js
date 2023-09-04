import { doUnion } from "./array/doUnion.js";
import { findKMinNMax } from "./array/findKMinNMax.js";
import { findMinNMax } from "./array/findMinNMax.js";
import { reverseArr, reverseString } from "./array/reverse.js";
import { optimiseSolution, sort012 } from "./array/sort012.js";
import { sortNegativesNPositives } from "./array/sortNegativesNPositives.js";

const arr = [2,4,5,6,7];
console.log("reverse array to arr is-",reverseArr(arr))

const str = 'Shreya';
console.log("reverse of the str is-", reverseString(str))

console.log(`Min and max element of an array is` , findMinNMax(arr))

console.log(`kth Min and max element of an array is` , findKMinNMax(arr, 3))

console.log('0s, 1s, and 2s; sort the array in ascending order' , sort012(arr))
console.log('OPTIMISE SOL: merge sort 0s, 1s, and 2s; sort the array in ascending order' , optimiseSolution(arr))

console.log('sort negatives and positives' , sortNegativesNPositives([-1,10,20,30,5,-5]))

console.log('Union of two arrays' , doUnion([3,5,6],[3,5,2]))
