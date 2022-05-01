const { NotImplementedError } = require('../extensions/index.js');
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamName = [];
  for (let name of members) {
    if (typeof name === 'string') {
      let letter = name.trim().substr(0, 1).toUpperCase();
      teamName.push(letter);
    }
  }
  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};