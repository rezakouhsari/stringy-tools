function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}
module.exports = countWords;
