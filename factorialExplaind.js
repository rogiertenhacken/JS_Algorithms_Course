// Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function  factorial(num) {
  //base case:
  if (num === 1) {
    return num;
  }
  //recursion:
  else {
    return num * factorial(num -1);
      }
}

factorial(4);

// A recursive function will continue to call itself untill the base
// case is statisfied.

// the base case can also be set to 2, it will still work, because in
// essence everything multiplied by 1 is it self. So the function stays the same.
