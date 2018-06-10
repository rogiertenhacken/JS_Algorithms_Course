const maxStockProfit = (pricesArr) => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

maxStockProfit([10,18,4,5,9,6,16,12]); //outputs 12




//comments:
// const maxStockProfit = (pricesArr) => {
//   let maxProfit = -1;
//   let buyPrice = 0;
//   let sellPrice = 0;
//
//   let changeBuyPrice = true;
//
//   for (let i = 0; i < pricesArr.length; i++) {
//     console.log(pricesArr);
//     if (changeBuyPrice) buyPrice = pricesArr[i]; //only change buyPrice if changeBuyPrice is true. the buyPrice is set by the previous itteration. I.E. on the 3rd itteration the value is set from 2nd itteration.
//     sellPrice = pricesArr[i + 1];
//
//     if (sellPrice < buyPrice) {
//       changeBuyPrice = true;
//     }
//     else {
//       let tempProfit = sellPrice - buyPrice; //to determine what happens when we sell at the current bought price and sell price. stored in the tempProfit.
//       if (tempProfit > maxProfit) maxProfit = tempProfit;
//       changeBuyPrice = false;
//       //the sellPrice in the array is going to be larger then the current buyPrice.
//     }
//   }
//   return maxProfit;
// }
//
// maxStockProfit([10,18,4,5,9,6,16,12]); //outputs 12
