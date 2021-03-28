module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = 1;

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        let elemDepth = this.calculateDepth(element);
        if (elemDepth > depthArr) depthArr = elemDepth;
        if (depthArr - elemDepth == 0) {
          depthArr++;
        }
      }
    });
    return depthArr;
  }
};
