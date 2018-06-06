const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort([5,3,8,2,1,4]);




//comments:
// const bubbleSort = (array) => {
//   //the outerloop dictates how many loops there are through the array. that is; the arrays length minus one time. because the largest number always goes to the end of the array, so last number is larger then the one in front of it, no need to check it.
//   // using the decrement here is because the inner loop can stop one length of the array earlier on each loop.
//   for (let i = array.length; i > 0; i--) {
//     //the inner loop will run as long as j is less then i, this way the largest nummers bubble up to the end of the array:
//     for (let j = 0; j < i; j++) {
//       //switch numbers if they are next to each other and are equal:
//       if (array[j] > array[j+1]) {
//         //to switch them:
//         let temp = array[j];
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }
//   }
//   return array;
// }
//
// bubbleSort([5,3,8,2,1,4]);
