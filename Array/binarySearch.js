let arr=[1,2,3,4,5,6]
target=3
let start=0;
let end=arr.length-1;
let mid=Math.floor((start+end)/2);
while(start<=end){
    if(arr[mid]>target){
        end=mid-1;
    }
    else if(arr[mid]<target){
        start=mid+1;
    }
    else{
        console.log(mid);
        break;
    }
    mid=Math.floor((start+end)/2);
}