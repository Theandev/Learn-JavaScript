// Write a function to check a number is prime or not

function isPrime(n){
    if(n < 2) return false; // 0 and 1 are not prime
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false; // found a divisor, not prime
    }
    return true; // no divisors found, it's prime
}


console.log(isPrime(2)); // true