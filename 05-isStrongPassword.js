// ✅ 05 - isStrongPassword
// Write a function that checks if a password is strong.
// A strong password must:
// - Be at least 8 characters long
// - Contain at least one uppercase letter
// - Contain at least one lowercase letter
// - Contain at least one digit

function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

// Test cases
console.log(isStrongPassword("Abc12345")); // true
console.log(isStrongPassword("password")); // false
console.log(isStrongPassword("12345678")); // false
console.log(isStrongPassword("A1b2C3d4")); // true
