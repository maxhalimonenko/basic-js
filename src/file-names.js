function renameFiles(Names) {
  let result = [];
  for (elem of Names) {
    if (!result.includes(elem)) {
      result.push(elem)
    } else {
      let counter = 1;
      if (result.includes(`${elem}(${counter})`)) {
        counter++
      }
      elem = `${elem}(${counter})`;
      result.push(elem)
    }
  }
  return result
}
module.exports = {
  renameFiles
};
