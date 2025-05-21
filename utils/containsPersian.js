function containsPersian(str) {
  return /[\u0600-\u06FF]/.test(str);
}
module.exports = containsPersian;
