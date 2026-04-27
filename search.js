function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // found
        }
    }
    return -1; // not found
}

console.log(search([5, 2, 9, 1], 9)); // Output: 2