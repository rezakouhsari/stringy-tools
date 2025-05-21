function calculateDiscount(originalPrice, discountedPrice) {
  if (originalPrice <= 0 || discountedPrice < 0 || discountedPrice > originalPrice) {
    return 0;
  }
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}
module.exports = calculateDiscount;
