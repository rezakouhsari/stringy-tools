function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
module.exports = capitalizeWords;
