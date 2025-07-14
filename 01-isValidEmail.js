// ✅ 01 - isValidEmail
// Write a function that checks if the given string is a valid email address.
// A valid email should contain a username, an @ symbol, and a domain (example@example.com)

function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
}

// Test cases
console.log(isValidEmail("test@gmail.com"));      // true
console.log(isValidEmail("my_email@domain.io"));  // true
console.log(isValidEmail("invalid-email.com"));   // false
console.log(isValidEmail("@domain.com"));         // false