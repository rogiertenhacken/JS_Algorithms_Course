const reverseWords = (string) => {
  let wordsArr = string.split(' ');
  let reversedWordsArray = [];

  wordsArr.forEach(word => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0;  i--) {
       reversedWord += word[i];
    }
    reversedWordsArray.push(reversedWord);
  });
    return reversedWordsArray.join(' ');
}

reverseWords('this is a string of words');



// //with comments:
// //declare the function with param string:
// const reverseWords = (string) => {
//   let wordsArr = string.split(' '); //put the words of the string in an array
//   console.log(wordsArr);
//   let reversedWordsArray = []; //declare empty array
//   console.log(reversedWordsArray);
//
// //go over each word in the wordsArray:
//   wordsArr.forEach(word => {
//     let reversedWord = ''; // declare a empty string to store the words in later.
//     console.log(reversedWord);
//     //use a negative for loop to map each letter !of each individual word! in the wordsArr and store it in reversedWord:
//     for (let i = word.length - 1; i >= 0;  i--) {
//        reversedWord += word[i];
//        console.log(reversedWord + 'after the for loop');
//     }
//     reversedWordsArray.push(reversedWord); //push the reversedWord into the reversedWordsArray
//     console.log(reversedWord + 'after the push');
//   });
//     return reversedWordsArray.join(' '); //join the words in the array, with a space between
//     console.log(reversedWordsArray + 'this is after .join');
// }
//
// reverseWords('this is a string of words');
// //invoked the function






//my simple solution:
// const reverseWords = (string) => {
//   return string.split('').reverse().join('').split(' ').reverse().join(' ');
//   console.log(string);
// }
//
// reverseWords('this is a string of words');
