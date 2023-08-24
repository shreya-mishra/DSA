export function reverseArr(arr){
    for(var i=0; i<=(arr.length/2); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

export function reverseString(str){
    var splitStr = str.split('');
    console.log('another method in which not using reverse method',reverseArr(splitStr).join(''))
    return str.split('').reverse().join('')
}