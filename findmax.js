function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

let numbers = [1, 2, 3, 4];
let result = findMaxMin(numbers);

console.log("Max:", result.max);
console.log("Min:", result.min);