const fibonacci = (position) => {
  // base case:
  if (position < 3) return 1;
  // recursive case:
  else return fibonacci(position -1) + fibonacci(position - 2);
}

fibonacci(20);

// do not go higher then 40, browser will crash. O2n2 time complexity. exponential(bad)

// the fibonacci sequence is [1,1,2,3,5,8,13,21,34,55,89] the two numbers before become the next number.
