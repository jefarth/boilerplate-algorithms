// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// Slower and less performant
var isPalindrome = function(str) {
  var reversedString = str
    .split("")
    .reverse()
    .join("");

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};

// Alternatively, this problem could have been solved by comparing the letters at the front of `str` to the letters at the back of `str`

// Faster and covers special characters

// var isPalindrome = function (str) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() !== str[str.length-(i+1)]toLowerCase()) {
//       return false;
//     }
//   }
//   return true;
// };
