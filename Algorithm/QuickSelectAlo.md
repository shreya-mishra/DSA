QuickSelect is an algorithm used to find the Kth smallest (or largest) element in an unsorted array without fully sorting the array. It is a variation of the QuickSort algorithm and is designed for selecting a specific element from an array efficiently, without the need to sort the entire array.

The idea behind QuickSelect is similar to the partition step in QuickSort. It selects a pivot element and then rearranges the array in such a way that all elements smaller than the pivot are on its left, and all elements greater than the pivot are on its right. This gives an indication of where the pivot (and consequently the Kth element) belongs in the sorted order.

The algorithm then recursively focuses on the partition where the Kth element should be located. If the pivot ends up at the Kth position, then the pivot is the Kth element. If the pivot is before the Kth position, QuickSelect is recursively applied to the right partition. If the pivot is after the Kth position, QuickSelect is applied to the left partition.

Here's a high-level implementation of the QuickSelect algorithm to find the Kth smallest element in JavaScript:

```javascript
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSelect(arr, low, high, k) {
    if (low <= high) {
        const pivotIndex = partition(arr, low, high);

        if (pivotIndex === k - 1) {
            return arr[pivotIndex];
        } else if (pivotIndex < k - 1) {
            return quickSelect(arr, pivotIndex + 1, high, k);
        } else {
            return quickSelect(arr, low, pivotIndex - 1, k);
        }
    }
}

const arr = [12, 3, 5, 7, 19];
const k = 3; // Finding the 3rd smallest element
console.log(`The ${k}th smallest element is: ${quickSelect(arr, 0, arr.length - 1, k)}`);
```

In this example, the code will find the 3rd smallest element in the `arr` array using the QuickSelect algorithm. You can adjust the value of `k` and the `arr` array as needed.