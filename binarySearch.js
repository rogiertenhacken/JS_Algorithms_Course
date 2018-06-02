function binarySearch(numArray, key) {
  let middleIdx = Math.floor(numArray.length / 2);
  let middleElem = numArray[middleIdx];

  //base case:
  if (middleElem === key) return true;
  //first recursion:
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  //second recursion:
  else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0,  middleIdx), key);
  }
  else return false;
}

binarySearch([5,7,12,16,36,42,56,71], 56);
//outputs true



//
// // With comments:
// function binarySearch(numArray, key) {
//   let middleIdx = Math.floor(numArray.length / 2);
//   console.log(middleIdx + ' middleIdx')
//   let middleElem = numArray[middleIdx];
//   console.log(middleElem + ' middleElem')
//
//   //base case:
//   if (middleElem === key) return true;
//
//   //first recursion:
//   // when the middleElem is smaller then the key the array is divided and we only use the second part of it, because the key has to be on the right side of the middleElem.
//   else if (middleElem < key && numArray.length > 1) {
//     console.log(middleElem + ' 1st recr')
//     return binarySearch(numArray.splice(middleIdx, numArray.length), key);
//   }
//   //second recursion:
//   //here we use the first part of the array, because the middleElem is greater then the key
//   else if (middleElem > key && numArray.length > 1) {
//     console.log(middleElem + ' 2nd recr')
//     return binarySearch(numArray.splice(0,  middleIdx), key);
//   }
//   else return false; //will only be reached if the the middleElement is not the key, if the length of the numArray is 0 or 1. (the key is not present in the numArray)
// }
//
// binarySearch([3,5,7,16,68,72,84,91,98], 7);
