const reverseString = function(origString) {
  let returnString = '';
  index = origString.length;

  for (let i = 0; i < origString.length; i++) {
    index--;
    returnString += origString[index];
   
  }

  return returnString;
};

// Do not edit below this line
module.exports = reverseString;
