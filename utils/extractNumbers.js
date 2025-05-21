function extractNumbers(str) {
  return str.match(/\d+/g) || [];
}
module.exports = extractNumbers;
