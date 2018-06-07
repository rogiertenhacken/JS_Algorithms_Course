const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  let result = [];
  while (array1.length && array2.length) {
    let minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }

  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);
  return result;
}

mergeSort([6000,34,-200,203,3,-100, -10,746,200,984,198,768,1,9,1]);



// //comments:
// // this is a recursive function, in which the mergeSort function keeps going untill the base case is reached. I.E. if we put in the array [10,9,8,7] it will split the array into the firstHalf [10,9] and the secondHalf [8,7] and it does this untill the recursion unwinds.
//
// //simplified: input this array [10,9,8,7] --some recursion happens-- it becomes these arrays [10,9] and [8,7] and then they are merged into the result in the merge function, which will be: [7,8,9,10]
//
// const mergeSort = (arr) => {
//   //base case:
//   if (arr.length < 2) return arr;
//   //recursion:
//   let middleIndex = Math.floor(arr.length / 2);
//   let firstHalf = arr.slice(0, middleIndex); //[10,9]
//   let secondHalf = arr.slice(middleIndex); //[8,7]
//
//   return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }
//
// function merge(array1, array2) {
//   let result = [];
//   while (array1.length && array2.length) {
//     let minElem;
//     if (array1[0] < array2[0]) minElem = array1.shift();
//     else minElem = array2.shift();
//     result.push(minElem);
//   }
//
//   if (array1.length) result = result.concat(array1);
//   else result = result.concat(array2);
//   return result;
// }
//
// mergeSort([10,9,8,7]);
//
