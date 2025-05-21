function removeExtraSpaces(str) {
  return str.trim().replace(/\s+/g, ' ');
}
module.exports = removeExtraSpaces;
