// ✅ 04 - isValidRussianPhone
// Write a function that checks if a string is a valid Russian phone number.
// Valid formats: +7xxxxxxxxxx or 8xxxxxxxxxx (exactly 11 digits after +7 or 8)

function isValidRussianPhone(phone) {
  return /^(\+7\d{10}|8\d{10})$/.test(phone);
}

// Test cases
console.log(isValidRussianPhone("+79111234567")); // true
console.log(isValidRussianPhone("89111234567"));  // true
console.log(isValidRussianPhone("7111234567"));   // false
console.log(isValidRussianPhone("+7911123456"));  // false