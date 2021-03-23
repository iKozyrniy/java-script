const findLongestWord = function (string) {
  let array = string.split(" ");
  let a = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > a.length) {
      a = array[i];
    }
  }
  return a;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
