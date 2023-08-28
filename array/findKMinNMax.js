export function findKMinNMax(arr, k){
    // sorting and then return kth
return;
    let min = -1
    for(let i=arr.length; i>=0;i--){
        if(arr[i]<min){
            arr[i] = min;
            min = temp;
            temp = arr[i]

        }
        return arr[i]
    }
}