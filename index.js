import { findMinNMax } from "./array/findMinNMax.js";
import { reverseArr, reverseString } from "./array/reverse.js";

const arr = [2,4,5,6,7];
console.log("reverse array to arr is-",reverseArr(arr))

const str = 'Shreya';
console.log("reverse of the str is-", reverseString(str))

console.log(`Min and max element of an array is` , findMinNMax(arr))

console.log(`kth Min and max element of an array is` , findKMinNMax(arr, 3))