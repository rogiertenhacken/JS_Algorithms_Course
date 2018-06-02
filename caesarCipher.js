const caesarCipher= (str, num) => {
  num = num % 26; //to prevent looping over alphabet 100s of time when using a large num
  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //make an array of letters
  let newString = '';

  //go over the lowerCaseString
  for (let i=0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i]; //declare currentLetter
    //als de eerste letter een spatie is:
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue; //ga door naar de volgende operatie
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26; //to start over the alphabet again when you reach the end.
    if (newIndex < 0) newIndex = 26 + newIndex; //deals when a negative num is given

    //sets the letter back to uppercase if that was the case in the original str:
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex]; //geen hoofdletter, dan gewoon verder gaan
  }
  return newString;
}

caesarCipher('a', 2); //outputs: c


//working without comments:
// const caesarCipher= (str, num) => {
//   num = num % 26;
//   let lowerCaseString = str.toLowerCase();
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let newString = '';
//
//   for (let i=0; i < lowerCaseString.length; i++) {
//     let currentLetter = lowerCaseString[i];
//     if (currentLetter === ' ') {
//       newString += currentLetter;
//       continue;
//     }
//     let currentIndex = alphabet.indexOf(currentLetter);
//     let newIndex = currentIndex + num;
//     if (newIndex > 25) newIndex = newIndex - 26;
//     if (newIndex < 0) newIndex = 26 + newIndex;
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndex].toUpperCase();
//     }
//     else newString += alphabet[newIndex];
//   }
//   return newString;
// }
//
// caesarCipher('a', 2);
