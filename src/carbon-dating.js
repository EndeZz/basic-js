const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity == undefined ||
    typeof sampleActivity != "string" ||
    isNaN(sampleActivity) ||
    sampleActivity <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY
  )
    return false;
  let k = LN2 / HALF_LIFE_PERIOD;
  let numeric = parseFloat(sampleActivity);
  let res = Math.log(MODERN_ACTIVITY / numeric) / k;
  return Math.ceil(res);
};
