const sumAll = function(int1, int2) {
  let from;
  let to;

  if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
    return 'ERROR';
  };
  if (int1 < 0 || int2 < 0) {
    return 'ERROR';
  }
  if (int2 < int1) {
    to = int1;
    from = int2;
  } else {
    to = int2;
    from = int1;
    
  }

  let sum = 0;
  for (let index = from; index <= to; index++) {
    sum += index;
   
  };
  return sum;
  
};

// Do not edit below this line
module.exports = sumAll;
