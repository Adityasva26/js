function min (arr) {
    if(arr.length==0){
        return;
    }
     let smallest = arr[0]
    for(let i=0;arr.length>i;++i){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
 return smallest;
}

let arr = [7,2.6,4,8,6,4]
console.log(min(arr))

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return undefined; // Handle arrays with less than 2 elements
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return smallest;
}

let numbers = [10, 5, 20, 15, 30];
let secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest); // Output: 10
