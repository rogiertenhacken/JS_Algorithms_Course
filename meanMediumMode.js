function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  let sum = 0;

  array.forEach(num => {
    sum += num;
  });

  let mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b){return a-b});
  let median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    let mid1 = array[(array.length / 2) -1];
    let mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

function getMode(array) {
  let modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }

  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

meanMedianMode([1,2,3,4,5,4,6,1]);


//with comments:
// function meanMedianMode(array) {
//   //return an object that has the mean, median & mode on it:
//   return {
//     mean: getMean(array),
//     median: getMedian(array),
//     mode: getMode(array)
//   };
// }
//
// function getMean(array) {
//   let sum = 0; //declare variable
//   //loop through every number in the array
//   array.forEach(num => {
//     sum += num; //set number to the sum
//   });
//
//   let mean = sum / array.length; //calculate the mean
//   return mean;
// }
//
// //get the middle element of the array after it's been sorted:
// function getMedian(array) {
//   array.sort(function(a, b){return a-b}); //this assorts numbers in ascending order
//   let median; //declare empty variable
//
//
//   //when there are a odd number of elements in the array (not even):
//   if (array.length % 2 !== 0) {
//     median = array[Math.floor(array.length / 2)]; //using math.floor to round it down.
//     //[Math.floor(array.length / 2)] gives the index of the middle element.
//     //array[Math.floor(array.length / 2)] is the element at the middle index.
//   }
//
//   //when there are an even amount of numbers in the array.
//   //in here we need to grep the two middle elements in the array:
//   else {
//     let mid1 = array[(array.length / 2) -1];
//     //console.log(mid1 + ' mid1');
//     let mid2 = array[array.length / 2];
//      //console.log(mid2);
//     median = (mid1 + mid2) / 2; //set the average of the median using () to calculate it first.
//     //console.log(median + ' is median')
//   }
//   return median;
// }
//
// //shows the number that appears most in our array:
// function getMode(array) {
//   let modeObj = {}; //declare empty object.
//
//   //loop through every element of the array and if the num is not in the object set it to 0 at the current number, and then add 1 for each time the number shows up in the array:
//   array.forEach(num => {
//     if (!modeObj[num]) modeObj[num] = 0;
//     modeObj[num]++;
//   });
//
//
//    //loop through the modeObj and see what numbers appear most frequently:
//   let maxFrequency = 0; //to be able to keep track of the numbers in the modeObject, how often does the number show up.
//   let modes = []; //an array to put all the modes in.
//    //here we get access to every number property on our modeObject:
//   for (let num in modeObj) {
//     //here we check if the number in the modeObj is greater then the number in the maxFrequency, if so we overwrite the maxFrequency with the new number:
//     if (modeObj[num] > maxFrequency) {
//       modes = [num]; //an array with the current number in it
//       maxFrequency = modeObj[num]; //the maxFrequency is the current number that appears most
//     }
//     //if there are two numbers that appear an equal amount of thimes. we push it into the the modes array:
//     else if (modeObj[num] === maxFrequency) modes.push(num);
//   }
//
//   //what if every number appears the same amount of time. all numbers appear equally so there is no modes:
//   if (modes.length === Object.keys(modeObj).length) modes = [];
//   return modes;
// }
//
// meanMedianMode([2,4,6,8]);
