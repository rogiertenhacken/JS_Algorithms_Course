const fibMemo = (index, cache) => {
  cache = cache || [];
  //base case:
  if (cache[index]) return cache[index]; //if the index is inside the cache return it.
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index -1, cache) + fibMemo(index -2, cache);
    }
  }
  return cache[index];
}

fibMemo(500);

//On timecomplexity (good)
//it is the fibonacci code but it uses memorization, in this way it works very fast, even with large number.


//comments:
// const fibMemo = (index, cache) => {
//   //every time the function is called, it will store the calculation inside the cache (which is an array).
//   cache = cache || []; //the initial cache is set.
//
//   //base case:
//   if (cache[index]) return cache[index]; //if the index is inside the cache return it.
//
//   //recursion:
//   //calculate what fibonacci-number is at the given index and place into the cache.
//   else {
//     if (index < 3) return 1;
//     else {
//       cache[index] = fibMemo(index -1, cache) + fibMemo(index -2, cache);
//     }
//   }
//   return cache[index];
// }
//
// fibMemo(50);
//
// //On timecomplexity (good)
