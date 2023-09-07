used to find optimised solution of max contigous sub-array
initially, 
sum = 0;
max = arr[0]

sum = sum + arr[i]
max = max(max,sum)
if(sum<0){
    sum = 0;
}