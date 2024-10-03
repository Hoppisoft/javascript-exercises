const removeFromArray = function(array, remove) {
  let newArray = array;
  for (let i = 1; i < arguments.length; i++) {
    newArray = newArray.filter((word) => word !== arguments[i]);;
  }
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
