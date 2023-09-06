export const cylicallyRotation = (arr) => {
    var n = arr.length;
    //[2,4,5,6,7]
    // var temp;

    // for(var i=arr.length-1;i>=0 ;i--){
    //     temp = arr[i]
    //     arr[i] = arr[i+1];    
    //     arr[i+1] = temp;
    // }
    // arr.shift();


    // return arr
    const val= arr[n-1];
    arr.pop();
    arr.unshift(val);
    
    return arr;
}