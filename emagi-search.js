const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');



function emagiSearch(searchTerm) {
    
//Need new array that holds new result
const searchArray = [];

// console.log(searchTerm)

//given a full word, it returns the matching emoji in an array
//Loop through words array and find word (if statement to check if words array includes that word. If it does, get index and push it.)
for (const searchWords of words){
    if (searchTerm.includes(words)){
        searchArray.push(words);
       if(words === symbols){
           searchArray.push(symbols)
       }


//array includes? array.indexOf?
}

}
//returns the appropriate symbol given the start of a word






//return new array outside the loop.
return searchArray;

















    }
    
    
    
    
    
    
    
    module.exports = emagiSearch;