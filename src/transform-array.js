module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error();
  let isCheck = false;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        isCheck = true;
        break;
      case "--discard-prev":
        if (res.length > 0 && !isCheck) res.pop();
        isCheck = true;
        break;
      case "--double-next":
        if (i + 1 < arr.length) res.push(arr[i + 1]);
        isCheck = true;
        break;
      case "--double-prev":
        if (i !== 0 && !isCheck) res.push(arr[i - 1]);
        isCheck = true;
        break;
      default:
        res.push(arr[i]);
        isCheck = false;
    }
  }
  return res;
};
