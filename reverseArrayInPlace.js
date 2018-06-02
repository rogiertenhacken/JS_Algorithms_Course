function reverseArrayInPlace(arr) {
  for (let i=0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = tempVar;
  }
  return arr;
}

reverseArrayInPlace([1,2,3,4,5,6,7]);


//with comments:
//define function with param arr:
// function reverseArrayInPlace(arr) {
//   //we don't want a new array or use .reverse(). we start with a for loop to go through the array use .length / 2 to only use the first half of the array, otherwise the array will be reversed to the original again:
//   for (let i=0; i < arr.length / 2; i++) {
//     //here happens the magic:
//     //we want to switch the first element of the array with the last, the second with the second to last, etc.
//     let tempVar = arr[i]; //use a temp var to store the value of i in the tempVar.
//     arr[i] = arr[arr.length -1 -i]; //set element equal to it's counterpart in the array. (-1 is the last element in the array. the -i  makes the counterpart of arr[i])
//     //I.E.: if we are in the third element of the array then this brings us to the third to last in the array: arr[arr.length -1 -i]
//     arr[arr.length -1 -i] = tempVar; //rewrite the counterpart
//     //(arr[arr.length -1 -i]) to be equal to the current element.
//   }
//   return arr;
// }
//
// reverseArrayInPlace([1,2,3,4,5,6,7]);




// or use the build in method .reverse()
//
// const reverseArr = (arr) => {
//   return arr.reverse();
// }
//
// reverseArr([1,2,3,4])
