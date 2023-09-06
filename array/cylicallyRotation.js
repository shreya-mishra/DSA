export const cylicallyRotation = (arr) => {
    var n = arr.length;
    // [2,3,5,6]
    // var temp;
    // for(var i=0;i<arr.length-1 ;i++){
    //     arr[i] = arr[i+1];    
    //     arr[i+1] = temp;
    //     temp = arr[i]
    // }
    // return arr
    const val= arr[n-1];
    arr.pop();
    arr.unshift(val);
    
    return arr;
}