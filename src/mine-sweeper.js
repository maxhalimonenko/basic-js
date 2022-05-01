function minesweeper(m_x) {
  const boardWidth = m_x[0].length;
  const boardHeight = m_x.length;
  let result = [];
  for (let i = 0; i < boardHeight; i++) {
    result[i] = [];
    for (let k = 0; k < boardWidth; k++) {
      let counter = 0;
      if (m_x[i - 1]) {
        if (m_x[i - 1][k - 1]) counter++;
        if (m_x[i - 1][k]) counter++;
        if (m_x[i - 1][k + 1]) counter++;
      }
      if (m_x[i][k - 1]) counter++;
      if (m_x[i][k + 1]) counter++;
      if (m_x[i + 1]) {
        if (m_x[i + 1][k - 1]) counter++;
        if (m_x[i + 1][k]) counter++;
        if (m_x[i + 1][k + 1]) counter++;
      }
      result[i].push(counter);
    }
  }
  return result
}
module.exports = {
  minesweeper
};