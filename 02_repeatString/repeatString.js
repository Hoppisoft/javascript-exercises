const repeatString = function (word, times) {
  let returnWord = ''; 

  if (times < 0) {
    return 'ERROR';
  };
  
  for (let index = 0; index < times; index++) {
    returnWord += word;
    
  }
  return returnWord;
};

// Do not edit below this line
module.exports = repeatString;
