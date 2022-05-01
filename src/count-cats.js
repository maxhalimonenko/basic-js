function countCats(matrix) {
  let cats = 0;
  matrix.forEach(elem => {
    elem.forEach(cat => {
      if (cat === '^^') {
        cats++
      }
    })
  });
  return cats;
}

module.exports = {
  countCats
};