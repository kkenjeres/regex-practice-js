// ✅ 03 - startsWithCapital
// Write a function that checks if a string starts with a capital (uppercase) letter.

function startsWithCapital(str) {
  return /^[A-Z]/.test(str);
}

// Test cases
console.log(startsWithCapital("Hello")); // true
console.log(startsWithCapital("world")); // false
console.log(startsWithCapital("Test")); // true
console.log(startsWithCapital("java")); // false
