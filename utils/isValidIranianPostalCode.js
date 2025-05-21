function isValidIranianPostalCode(postalCode) {
  const regex = /^[1-9][0-9]{9}$/;
  return regex.test(postalCode);
}

module.exports = isValidIranianPostalCode;