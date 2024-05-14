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

//  A Set in programming, including JavaScript, is a data structure 
// that stores a collection of unique elements. It is similar to an 
// array, but unlike arrays, 
// sets do not allow duplicate values. In other words, each element 
// in a set must be unique.