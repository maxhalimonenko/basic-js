const { NotImplementedError } = require('../extensions/index.js');
class DepthCalculator {
  calculateDepth( Arr ) {
      if (Arr.some(el => Array.isArray(el))) {
        return 1 + this.calculateDepth(Arr.flat())
      }
      return 1
  }
}
module.exports = {
  DepthCalculator
};