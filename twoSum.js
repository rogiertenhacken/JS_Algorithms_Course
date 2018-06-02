const twoSum = (numArray, sum) => {
  let pairs = [];
  let hashtable = [];

  for (i=0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}

twoSum([40,11,19,17,-12], 28);

//=> [ [ 17, 11 ], [ -12, 40 ] ] is the output






//with comments:
// const twoSum = (numArray, sum) => {
//   let pairs = []; //to store the pairs into
//   let hashtable = []; //you can use an array or an object here
//
//   //loop through every number of the numArray to get acces to every number in it:
//   for (i=0; i < numArray.length; i++) {
//     let currNum = numArray[i];
//     let counterpart = sum - currNum; //counterpart is i.e. you have 4 if you need 7 (sum), the counterpart is 3.
//
//     //now check the hashtable if it has the counterpart in it:
//     if (hashtable.indexOf(counterpart) !== -1) {
//       pairs.push([currNum, counterpart]);
//     }
//     hashtable.push(currNum); //push the currNum into the hashtable no matter what!
//   }
//   return pairs;
// }
//
// twoSum([40,11,19,17,-12], 28);
//
// //=> [ [ 17, 11 ], [ -12, 40 ] ]
