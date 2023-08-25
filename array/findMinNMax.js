// [2,3,4,5,6] --> n/2th approach  
export function findMinNMax(arr){
    let min= 1000000000000;
    let max = -1;

    for(var i=0;i<arr.length;i++){
         if(arr[i] < min) {
            min = arr[i]
         }if(arr[i] > max){
            max = arr[i]
         }
    }
    let start = 0;
    let end = arr.length-1;

    console.log('Two pointers approach:',twoPointersApp(arr, start, end))
    return {min: min, max:max};  
}

// 2 pointers approach

export function twoPointersApp(arr,start,end){
    let mid = Math.floor(start+end)/2; 


    if(start === end){
        return {min:arr[start], max:arr[start]}
    }

    if(end - start === 1){
        if(arr[start] < arr[end])
            return {min:arr[start], max:arr[end]}
        else
            return {min: arr[start], max: arr[end]}
    }    
    const leftResult = twoPointersApp(arr, start, mid);
    const rightResult = twoPointersApp(arr, mid + 1, end);
  
    return {
      min: Math.min(leftResult.min, rightResult.min),
      max: Math.max(leftResult.max, rightResult.max)
    };
}