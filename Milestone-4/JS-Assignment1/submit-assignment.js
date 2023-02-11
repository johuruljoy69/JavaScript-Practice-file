// Problem 1: Let’s play a mind game
/* Description: Call function number parameter and calculate this for result,
then apply if condition for getting a positive number and return.

*/


function mindGame(number) {
  const getNumber = ((number * 3 + 10) / 2) - 5;
    if(getNumber > 0){
      return getNumber;
  }
  else {
    return 'Negative number';
  }
     
  }


  // Problem 2: Finding even or odd
  /* Description:Call function string parameter and then apply if condition
   for get length of string and return 'even' or 'odd'
  */


  function evenOdd(inputString) {
    if (inputString.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
 
 

  // Problem 3: Is Less or Greater than seven
  /* Description: Call function number parameter and then apply if condition, difference between parameter number and 7.
     And again condition apply number < 7 and number >= 7 for get condition result
  */
 
  function isLGSeven(inputNumber) {
    let diff = Math.abs(inputNumber - 7);
    if(diff < 7){
        return diff;
    }
    else if ( diff >= 7){
     const getNumber = 2 * inputNumber;
      return getNumber;
    }
  }
 
 
  // Problem 4: Finding Bad data
  /* Description:Call function array parameter and use for loop, then use if condition for
  find the bad number and return a bad number.


  */


function findingBadData(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < 0) {
      count++;
    }
  }
  return count;
}



// Problem 5: Convert your gems into diamond
/*Description: Call function 3 parameter and then question like multiply 3 parameters and sum total.
Use if condition and else if condition, then return.
*/


function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  let totalDiamonds = firstFriendGems * 21 + secondFriendGems * 32 + thirdFriendGems * 43;
  if(totalDiamonds <= 1000 * 2){
    return totalDiamonds;
  }
  else if(totalDiamonds > 1000 * 2){
    const getDiamonds = totalDiamonds - 2000;
    return getDiamonds;
  }
}



