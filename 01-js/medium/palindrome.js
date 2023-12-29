/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const string = str.toLowerCase().replace(/\s|[?!'",.]/g, '')
  const arr = string.split('')
  const revArr = []
  arr.forEach(element => {
    revArr.unshift(element)
  });
  console.log(revArr)
  const revString = revArr.join('')
  console.log(string, revString)
  return revString === string
}

console.log(isPalindrome('returns true for strings with spaces'))

module.exports = isPalindrome;
