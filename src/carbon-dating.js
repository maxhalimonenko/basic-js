const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const NATURAL_LOGARITHM_OF_2 = 0.693;
const RADIOACTIVE_DECAY_CONSTANT = NATURAL_LOGARITHM_OF_2 / HALF_LIFE_PERIOD;
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const parsedSampleActivity = parseFloat(sampleActivity);
  if (isNaN(parsedSampleActivity) || parsedSampleActivity > 15 || parsedSampleActivity <= 0) return false;
  const sampleApproximateAge = Math.ceil((Math.log(MODERN_ACTIVITY / parsedSampleActivity)) / RADIOACTIVE_DECAY_CONSTANT);
  return sampleApproximateAge;
}
module.exports = {
  dateSample
};