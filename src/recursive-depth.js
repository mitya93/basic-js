module.exports = class DepthCalculator {
    calculateDepth(arr) {
    var depth = 0;
    var count = 1;
    for (var j of arr) {
    if (Array.isArray(j)) {
    count = this.calculateDepth(j);
    if (depth < count)
    depth = count;
    }
    }
    return ++depth;
    }
};