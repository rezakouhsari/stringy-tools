function toEnglishDigits(str) {
  return str.replace(/[۰-۹]/g, d => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
}
module.exports = toEnglishDigits;
