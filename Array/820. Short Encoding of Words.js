/* 
A valid encoding of an array of words is any reference string s and array of indices indices such that:

words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

*/


/**
 *   @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words.sort((a, b) => b.lenght - a.length)
    let wordSet = new Set(words)

    for (let word of words) {
        for (let i = 1; i < word.length; i++) {
            wordSet.delete(word.substring(i))
        }
    }

    let totLength = 0
    for (let word of wordSet) {
        totLength += word.length + 1;
    }
    return totLength
};
