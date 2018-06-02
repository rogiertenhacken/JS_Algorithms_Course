const isPalindrome = (string) => {
  string = string.toLowerCase();
  let charactersArr = string.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

isPalindrome("Madam I'm Adam");


// // with comments:
//
// no space in the empty strings ''!!
// //defining a function with string as param:
// const isPalindrome = (string) => {
//   string = string.toLowerCase(); //changes all letters in the string to a lowercase versions (calles a string method)
//   let charactersArr = string.split('');//turns the string into an array
//   let validCharacters = 'abcdefghijklmnopqrstuwvxyz'.split(''); //these characters are allowed in the reversed version later, using .split() to make an array of it.
//
//   let lettersArr = [];//to place only letters from our charactersArray in that we create below here:
//   //removes everything that is not a letter from the string using a forEach-loop:
//   charactersArr.forEach(char => {
//     if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
//     //the indexOf-method checks if a number in the validCharacters-array is greater then -1, i.e.
//     //(a=0, b=1, c=2, etc) any other character (', :, etc) then that is in the array will not be //greater then -1 and there fore excluded. We will have a new array with only our letters in it.
//   });
//
//   //make the new letter array into a string and compare them back and forward.
//   if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
//   else return false;
// }
//
// isPalindrome("Madame I'm Adam")
