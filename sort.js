//  In this if we want more data type than we have to add more functionality
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (typeof arr[j] === 'number' && typeof arr[j + 1] === 'string') {
                // Strings come before numbers and this is because arr[j] is number and arr[j+1] is string if you reverse this than vise versa
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;  
            } else if (typeof arr[j] === 'string' && typeof arr[j + 1] === 'string') {
                // String comparison
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else if (typeof arr[j] === 'number' && typeof arr[j + 1] === 'number') {
                // Numeric comparison
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    return arr;
}


let mixedArray = [10, 'Apple', 5, 'Banana', 'Cherry'];
let sortedArray = bubbleSort(mixedArray);
console.log(sortedArray); 
