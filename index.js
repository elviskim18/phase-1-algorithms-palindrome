function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split("")
  const original = splitWord.join("")
  //console.log(original)
  const reverse = [...splitWord].reverse().join("")
  if (original === reverse) {
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  1.Break the word into an array
  2.Duplicate arrays
  3.Join one array1 to form a word
  4.reverse the array2
  5.Compare both arrays
  6.return true if equal
*/

/*
  Add written explanation of your solution here
  I broke down the word passed as a parameter to form an array of single characters then I made a copy of the array to and reversed its elements
  Join elements of the two arrays to form words and compare if they are equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
