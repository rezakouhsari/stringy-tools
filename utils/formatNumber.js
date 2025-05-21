function formatNumber(number) {
  if (typeof number !== "number") return number;
  return number.toLocaleString("en-US");
}
module.exports = formatNumber;
