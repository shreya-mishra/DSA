export function sort012(arr){
    const sortedArr = arr.sort((a,b) => a-b) // TC: On(logn)

    return sortedArr;    
}


export function optimiseSolution(arr){
 function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor((arr.length)/2)
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));

 }

 function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while( leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++

        }
        return result.concat(left.slice(leftIndex), right.slice(rightIndex))
    }
 }
 return mergeSort(arr)
}