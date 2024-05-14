function max (arr) {
    if(arr.length==0){
        return;
    }
     let largest = arr[0]
    for(let i=0;arr.length>i;++i){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
 return largest;
}

let arr = [7,2.6,4,8,6,4]
console.log(max(arr))