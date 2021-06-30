/* 

Valid Anagram
https://leetcode.com/problems/valid-anagram/

*/

// Implementaion
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    let sArray = s.split("");
    let tArray = t.split("");

    sArray.sort();
    tArray.sort();

    for (let i = 0; i < s.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
};

let s = "rat";
let t = "car";

console.log(isAnagram(s, t));
