function findDuplicates(arr) {
    let set = new Set();
    let duplicates = [];

    for (let num of arr) {
        if (set.has(num)) {
            duplicates.push(num);
        } else {
            set.add(num);
        }
    }

    return set;
}

let numbers = [1, 2, 3, 4, 5, 2, 6, 3, 4];
let duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 3, 4]

