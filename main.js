var longest = 0

function LongestWord(sen) { 
  var words = sen.split(' ')
  words.forEach(function(word){
     word = word.replace(/[^\w\s]|_/g, "")
     if (longest < word.length){
       longest = word.length
       sen = word
     }
  })
  
  
  return sen; 
         
}
   
// keep this function call here 
LongestWord("find the longest word in this sentence");     