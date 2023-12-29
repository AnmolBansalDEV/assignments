/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const arr = str.split('')
    let count = 0
    arr.forEach(element => {
      if(vowels.includes(element.toLowerCase())){
        count++;
      }
    });
    return count;
}

module.exports = countVowels;