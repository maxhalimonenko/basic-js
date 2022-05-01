const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false
  const number = Number(sampleActivity)
  if (number < 0 || number !== number || number > 15 || number === 0) return false
  const ln = 0.693
  const k = ln / HALF_LIFE_PERIOD
  const res = Math.log(MODERN_ACTIVITY / number) / k
  return Math.ceil(res)
}

module.exports = {
  };``