const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');



const emagify = function(emotions){
// console.log(emotions)  
    
//Need new array that holds new result
const newArray = [];

//Loop through words array and find word 
for (let i = 0; i < emotions.length; i++){
console.log(emotions[i])

for (let j = 0; j < words.length; j++){ 
//This is searching for the emotions word inside the words array.
    if (emotions[i] === words[j]){
        newArray.push(symbols[words.indexOf(words[j])])
        
//If we don't find it, push the word itself.
        } else {
            newArray.push(emotions[i])
        }
    }

}


//capture that index
//console.log(word.indexOf())


return newArray;

    }
 


// //Once word is found, push to new array the symbol at that same index.





//return new array outside the loop.










// }    




// const symbols = []
// console.log(emagify(symbols))






    

    
    
    
    
    
    
    
    module.exports = emagify;