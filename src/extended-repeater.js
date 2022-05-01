function repeater(str, options) {
  const addArray = [];  
  for (let i = 0; i < options.additionRepeatTimes; i++) {
  addArray.push(String(options.addition));
  }  
  const addString = addArray.join(options.additionSeparator || '|'); 
  if (addString.length !== 0) {
  addArray.length = 0;  
  for (let j = 0; j < options.repeatTimes; j++) {
  addArray.push(String(str) + addString);
  }
  } else {
  if (!options.repeatTimes) {
  addArray.push(String(str) + String(options.addition));
  } else {
  for (let j = 0; j < options.repeatTimes; j++) {
  !options.addition ? addArray.push(String(str)) : addArray.push(String(str) + String(options.addition));
  }
  }  
  }  
  return addArray.join(options.separator || '+');
  }  
  module.exports = {
  repeater
  };