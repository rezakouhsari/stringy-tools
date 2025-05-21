function isValidIranianNationalCode(input) {
  if (typeof input !== 'string') return false;

  const code = input.replace(/[^0-9]/g, '');

  // باید دقیقاً 10 رقم باشد
  if (!/^\d{10}$/.test(code)) return false;

  // بررسی اینکه همه ارقام یکسان نباشند (مثلاً: 1111111111)
  if (/^(\d)\1{9}$/.test(code)) return false;

  const check = parseInt(code[9]);
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(code[i]) * (10 - i);
  }

  const remainder = sum % 11;

  return (remainder < 2 && check === remainder) ||
         (remainder >= 2 && check === (11 - remainder));
}

module.exports =  isValidIranianNationalCode ;
