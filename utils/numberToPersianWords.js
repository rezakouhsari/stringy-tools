function numberToPersianWords(input) {
  if (isNaN(input)) return 'مقدار نامعتبر';

  const num = Number(input);
  if (num === 0) return 'صفر';

  const ones = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
  const teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
  const tens = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
  const hundreds = ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
  const big = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون'];

  const decimalUnits = {
    1: 'دهم',
    2: 'صدم',
    3: 'هزارم',
    4: 'ده‌هزارم',
    5: 'صدهزارم',
    6: 'میلیونوم',
    7: 'ده‌میلیونوم',
    8: 'صدمیلیونوم',
    9: 'میلیاردوم'
  };

  const splitThreeDigits = (n) => {
    const str = n.toString();
    const parts = [];
    for (let i = str.length; i > 0; i -= 3) {
      parts.unshift(str.substring(Math.max(0, i - 3), i));
    }
    return parts;
  };

  const parseThreeDigits = (n) => {
    n = parseInt(n);
    if (n === 0) return '';

    const h = Math.floor(n / 100);
    const t = Math.floor((n % 100) / 10);
    const o = n % 10;
    const words = [];

    if (h > 0) words.push(hundreds[h]);
    if (t === 1) {
      words.push(teens[o]);
    } else {
      if (t > 1) words.push(tens[t]);
      if (o > 0) words.push(ones[o]);
    }

    return words.join(' و ');
  };

  const [intPart, decimalPart] = Math.abs(num).toString().split('.');

  // بخش صحیح
  const intParts = splitThreeDigits(intPart);
  const intWords = [];

  for (let i = 0; i < intParts.length; i++) {
    const word = parseThreeDigits(intParts[i]);
    if (word) {
      intWords.push(word + (big[intParts.length - i - 1] ? ' ' + big[intParts.length - i - 1] : ''));
    }
  }

  // بخش اعشاری کامل + رتبه آن
  let decimalWords = '';
  if (decimalPart) {
    const cleanDecimal = decimalPart.replace(/0+$/, ''); // حذف صفرهای انتهایی
    const decimalNum = parseInt(cleanDecimal);
    const decimalWord = parseThreeDigits(decimalNum);
    const unit = decimalUnits[cleanDecimal.length] || 'قسمت اعشاری نامشخص';
    if (decimalWord) {
      decimalWords = `ممیز ${decimalWord} ${unit}`;
    }
  }

  const final = (num < 0 ? 'منفی ' : '') + intWords.join(' و ') + (decimalWords ? ' و ' + decimalWords : '');
  return final.trim();
}

module.exports = numberToPersianWords;