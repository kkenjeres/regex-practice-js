// ✅ 02 - isOnlyDigits
// Write a function that checks if the string contains only digits (0–9).

function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}

// Test cases
console.log(isOnlyDigits("123456")); // true
console.log(isOnlyDigits("42a")); // false
console.log(isOnlyDigits("098765")); // true
console.log(isOnlyDigits("12 34")); // false
