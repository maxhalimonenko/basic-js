const { NotImplementedError } = require('../extensions/index.js');
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let stolb = 0;
  let m = 0;
  label:
  while (m < matrix.length && stolb < matrix[m].length) {
    if (matrix[m][stolb] == 0) {
      m = 0;
      stolb++;
      continue label;
    }
    if (matrix[m][stolb] != 0) {
      sum += matrix[m][stolb];
      m++;
      if (m >= matrix.length) {
        m = 0;
        stolb++;
      }
      continue label;
    }
  }
  return sum;
}
module.exports = {
  getMatrixElementsSum
};