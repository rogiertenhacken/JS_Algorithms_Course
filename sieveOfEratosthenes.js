function sieveOfEratosthenes (n) {
  let primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <=Math.sqrt(n); i++) {
    for (j=2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i=0; i<=primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}

sieveOfEratosthenes(20);


//comments:
// const sieveOfEratosthenes = (n) => {
//
//   //make an array that goes from 0 to n. Using a for loop:
//   let primes = [];
//   for (let i = 0; i <= n; i++) {
//     primes[i] = true; //set it to the value of true (each number is prime)
//   }
//
//   //mark values 0 + 1 as false, they are never primes:
//   primes[0] = false;
//   primes[1] = false;
//
//   // mark the multiples of each index as false while looping through the primes array, using a nested for loop.
//
//   // the outer loop will start at 2, because 0+1 are already false, untill we reach the squareroot of n.
//   for (let i = 2; i <=Math.sqrt(n); i++) {
//     // use the innerloop the mark each multiples passed as false.
//     // i * j is the multiple of the current index or i.
//     // i.e. when i is 3 j starts at 2 i2xj3=6, i is still 3 and j is now 3 i3xj3=9 and i3xj4=12, etc. as long as the number is less then the number we passed in:
//     for (j=2; j * i <= n; j++) {
//       primes[i * j] = false; //mark each multiple (non-prime) as false (multiple is i*j)
//     }
//   }
//   //return all the numbers that are a prime using a second for loop:
//   let result = []; //to place the prime numbers in.
//   for (let i=0; i<=primes.length; i++) {
//     //if the primes at the current position is true push it into the results array:
//     if (primes[i]) result.push(i);
//   }
//
//   return result;
// }
//
// sieveOfEratosthenes(20);
