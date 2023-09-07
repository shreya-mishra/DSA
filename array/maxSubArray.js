export function maxSubArray(arr){
    var sum = 0;
    var maxi = arr[0];

    for(var i=0 ;i<arr.length; i++){
        sum = sum+arr[i] 
        maxi = Math.max(maxi,sum);

        if(sum < 0){
            sum = 0;
        }
    }
    return maxi;
}