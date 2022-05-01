function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date.getMonth) !== '[object Function]') throw new Error('Invalid date!');
  try {
    isNaN(date);
  } catch (err) {
    throw new Error('Invalid date!');
  }
  const currMon = date.getMonth() + 1;
  if (currMon === 12 || currMon < 3) return 'winter';
  if (currMon < 6) return 'spring';
  if (currMon < 9) return 'summer';
  return 'autumn'
}
module.exports = {
  getSeason
};