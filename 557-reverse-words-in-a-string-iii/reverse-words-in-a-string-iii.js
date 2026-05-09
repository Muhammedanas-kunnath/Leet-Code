/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let words = s.split(" ");
    let result = [];

    for(let i = 0; i < words.length; i++) {

        let reverse = words[i].split("").reverse().join("");

        result.push(reverse);
    }

    return result.join(" ");
};