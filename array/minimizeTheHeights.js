export const minimizeHeight = (arr) => {
    var i;
    var n = arr.length;
    var k = 4;

    var ans = arr[n-1]-arr[0];

    var minH,maxH;

    for(i=1;i<n;i++){
        maxH = Math.max(arr[0]+k,arr[i]-k)
        minH = Math.min(arr[0]+k,arr[i]-k)
        if(minH < 0){
          continue;
        }
        ans = Math.min(ans, maxH-minH)
    }
    return ans;
}