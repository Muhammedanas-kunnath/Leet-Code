/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") count++;
    
    if (count === k) {
      return s.slice(0, i);
    }
  }
  
  return s;
}