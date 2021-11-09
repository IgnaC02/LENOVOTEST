function palindrome(string) {
  const str = string.split("").reverse().join("");
  return str === string ? true : false;
}

console.log(palindrome("refer"));
console.log(palindrome("LEVEL"));
console.log(palindrome("Hello"));
