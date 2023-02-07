// Problem 1: Let’s play a mind game

function mindGame(number) {
  const getNumber = ((number * 3 + 10) / 2) - 5;
    if(getNumber > 0){
      return getNumber;
  }
  else {
    return false;
  }
      
  }
  const number = mindGame(5);
  console.log(number);
  const number2 = mindGame(50);
  console.log(number2);


  // Problem 2: Finding even or odd

  function evenOdd(inputString) {
    if (inputString.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  const character = evenOdd('Phero');
  console.log(character);
  const character2 = evenOdd('Batch7');
  console.log(character2);


  // Problem 3: Is Less or Greater than seven

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
  const diffNumber = isLGSeven(6);
  console.log(diffNumber);
  const diffNumber2 = isLGSeven(15);
  console.log(diffNumber2);
  
  
  // Problem 4: Finding Bad data
function findingBadData(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < 0) {
      count++;
    }
  }
  return count;
}
const isArray = [ 2, -5, -7, -13, -15, -17, 9, 20 ];
const badData = findingBadData(isArray);
console.log(badData);


// Problem 5: Convert your gems into diamond

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

let diamonds = gemsToDiamond(1, 1, 1);
console.log(diamonds);
let diamonds2 = gemsToDiamond(20, 200, 50);
console.log(diamonds2);
