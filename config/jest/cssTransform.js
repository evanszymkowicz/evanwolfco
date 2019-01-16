module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey(fileData, filename) {
    // The output is always the same.
    return 'cssTransform';
  },
};
