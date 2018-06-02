  const harmlessRansomNote = (noteText, magazineText) => {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};

    magazineArr.forEach(word => {
      if (!magazineObj[word]) magazineObj[word] = 0;
      magazineObj[word]++;
    });

   let noteIsPossible = true;
   
   noteArr.forEach(word => {
     if (magazineObj[word]) {
       magazineObj[word]--;
       if (magazineObj[word] < 0) noteIsPossible = false;
     }
     else noteIsPossible = false;
   })
   return noteIsPossible;
  }

  harmlessRansomNote('this is a secret note for you from a secret admirer',
    'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')



//working code but with notes on the code:
// function harmlessRansomNote (noteText, magazineText) {
//   //this puts the texts into an array:
//   let noteArr = noteText.split(' ');
//   let magazineArr = magazineText.split(' ');
//   let magazineObj = {}; //this is called a has-table
//
// //here it inventorise all the words in the 'magazine' using forEach on the magazineArray
//
//   magazineArr.forEach(word => {
//     if (!magazineObj[word]) magazineObj[word] = 0; //als niet in magazineObj dan wordt magazineObj 0 (if not, then)
//     magazineObj[word]++; //anders voeg je 1 toe
//   });
//   //console.log(magazineObj);
//
//     // here we will compare the words in our noteArray and checks if there are (and how many!) in the magazine:
//
//     //set bolean value to true, after this we loop over the array,
//     //if the word is not there or used already the boelean becomes false:
//     let noteIsPossible = true;
//
//     // start with looping over the noteArray:
//     noteArr.forEach(word => {
//       if (magazineObj[word]) {
//         magazineObj[word]--; //decrement, cause we used the word once.
//         if (magazineObj[word] < 0) noteIsPossible = false;
//         // false want: je hebt niet genoeg van dat woord.
//       }
//       else noteIsPossible = false; //woord komt niet voor, dus het kan niet.
//     });
//
//     return noteIsPossible;
//   }
//
//   harmlessRansomNote('this is a secret note for you from a secret admirer',
//   'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')
//
