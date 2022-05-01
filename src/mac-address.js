function isMAC48Address(n) {
    const parsedStr = n.split('-');
    if (parsedStr.length !== 6) return false;  
    const converted = parsedStr.map(num => parseInt(num, 16));
    return converted.every(item => isFinite(item));  
  }  
  module.exports = {
    isMAC48Address
  };