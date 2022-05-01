const { NotImplementedError } = require('../extensions/index.js');
function sortByHeight(Arr) {
  let copy = [...Arr].filter(item => item >= 0);

  copy.sort((m, n) => n - m);
  
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] !== -1) {
      Arr[i] = copy.pop();
    }
  }
  
  return Arr;
}

module.exports = {
  sortByHeight
};