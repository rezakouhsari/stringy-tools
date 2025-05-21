function isValidIranianMobile(phone) {
  const regex = /^(\+98|0098|98|0)?9\d{9}$/;
  return regex.test(phone);
}

module.exports = isValidIranianMobile;
