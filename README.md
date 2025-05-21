# stringy-tools

یک پکیج کاربردی برای کار با رشته‌ها و اعداد در زبان جاوااسکریپت با پشتیبانی از زبان فارسی.

---

## امکانات

- تبدیل رشته به **slug** (مناسب URL)
- تبدیل اعداد انگلیسی به فارسی و بالعکس
- محاسبه درصد تخفیف بین دو قیمت
- قالب‌بندی اعداد با جداکننده‌ی هزارگان (comma)
- تبدیل اولین حرف رشته یا هر کلمه به حروف بزرگ
- حذف فاصله‌های اضافی
- کوتاه کردن رشته با اضافه کردن `...`
- بررسی اعتبار ایمیل
- حذف تگ‌های HTML از رشته
- تبدیل رشته به قالب‌های `kebab-case` و `snake_case`
- شمارش تعداد کلمات
- استخراج اعداد از رشته
- تشخیص وجود حروف فارسی در رشته

---

## نصب

```bash
npm install stringy-tools




# استفاده

const {
  slug,
  toPersianDigits,
  toEnglishDigits,
  calculateDiscount,
  formatNumber,
  capitalize,
  capitalizeWords,
  removeExtraSpaces,
  truncate,
  isValidEmail,
  stripHtml,
  kebabCase,
  snakeCase,
  countWords,
  extractNumbers,
  containsPersian
} = require("stringy-tools");

// مثال‌ها:

console.log(slug("سلام دنیا!")); // salam-donya

console.log(toPersianDigits("Price: 123")); // Price: ۱۲۳

console.log(calculateDiscount(200, 150)); // 25

console.log(formatNumber(1234567)); // 1,234,567

console.log(capitalize("hello")); // Hello

console.log(isValidEmail("test@example.com")); // true
