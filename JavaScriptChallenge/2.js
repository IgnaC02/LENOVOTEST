// 2) Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome* or not.

function palindrome(string) {
  const str = string.split("").reverse().join("");
  return str === string ? true : false;
}

console.log(palindrome("refer"));
console.log(palindrome("LEVEL"));
console.log(palindrome("Hello"));
