/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false
  }
  const arr1 = str1.split('')
  const arr2 = arr1.filter( char => !str2.toLowerCase().includes(char.toLowerCase()))
  return arr2.length === 0
}

module.exports = isAnagram;
