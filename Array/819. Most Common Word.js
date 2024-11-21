/* 
Given a string paragraph and a string array of the banned words banned, 
return the most frequent word that is not banned. It is guaranteed there is at 
least one word that is not banned, and that the answer is unique.
The words in paragraph are case-insensitive and the answer should be returned in lowercase.

*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedset=new Set(banned)
    let arr = paragraph
            .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s,]/g, '') // Remove punctuation except commas
    .split(/[, ]+/) // Split by commas or spaces
    .filter(word => word); // Remove empty strings

    let filtarr=arr.filter(item=> !bannedset.has(item))

    let filteredWordCount={}
    for(let word of filtarr){
        filteredWordCount[word]= (filteredWordCount[word]|| 0)+1
        
    }

    const maxfreq=Math.max(...Object.values(filteredWordCount))

    const freqWords= Object.keys(filteredWordCount).filter(word=>filteredWordCount[word]===maxfreq)
    return freqWords[0]
};