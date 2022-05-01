const { NotImplementedError } = require('../extensions/index.js');
function calculateHanoi(Disks, TurnsSpeed) {
  const minimum = Math.pow(2,Disks) - 1
  const time = Math.floor((minimum / TurnsSpeed ) * 60 * 60)
  return {turns: minimum, seconds: time}
}
module.exports = {
  calculateHanoi
};