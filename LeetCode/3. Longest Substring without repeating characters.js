/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestString = [];

  let stringArray = [];

  for (let i = 0; i < s.length; i++) {
    subString = s.slice(i);

    for (let j = 0; j < subString.length; j++) {
      const a = subString[j];
      let flag = false;
      stringArray.forEach((c) => {
        if (a === c) {
          flag = true;
        }
      });

      if (flag) {
        break;
      }

      stringArray.push(a);
    }

    longestString =
      stringArray.length > longestString.length ? stringArray : longestString;
    stringArray = [];
  }

  console.log(longestString);
  return longestString.length;
};
