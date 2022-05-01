function getCommonCharacterCount(m1, m2) {
  let a1 = m1.split('');
  let a2 = m2.split('');
  let count = 0;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        a1.splice(i, 1);
        i--;
        a2.splice(j, 1);
        j--;
        count++;
        continue;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};