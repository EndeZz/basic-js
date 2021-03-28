module.exports = function repeater(str, options) {
  str = String(str);
  let separator = String(options.separator);
  let repeatTimes = options.repeatTimes;
  let additionSeparator = String(options.additionSeparator);
  let addition = String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes;

  if (separator === "undefined") separator = "+";
  if (additionSeparator === "undefined") additionSeparator = "|";
  if (addition === "undefined") addition = "";
  if (repeatTimes === "undefined") repeatTimes = 1;
  if (additionRepeatTimes === "undefined") additionRepeatTimes = 1;
  if (typeof addition !== "undefined")
    str +=
      addition + (additionSeparator + addition).repeat(additionRepeatTimes - 1);
  return str.concat(separator.concat(str).repeat(repeatTimes - 1));
};
