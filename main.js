
//longest word in a sentence 
document.getElementById('longest-submit').onclick=function() {
  let longest = 0
  let sentence = document.getElementById('longest-input').value.split(' ')
  debugger
    sentence.forEach(function(word){
       word = word.replace(/[^\w\s]|_/g, "")
       if (longest < word.length){
          longest = word.length
          sentence = word
       }
    })
    document.getElementById('longest-answer').innerHTML = "The longest word is: " + sentence        
}

//factorial of a number 
document.getElementById('factorial-submit').onclick=function() {
  let num = document.getElementById('factorial-input').value
  let factorial = 1
  for ( i=1; i <= num; i++) { 
    factorial = factorial * i;
  }
  document.getElementById('factorial-answer').innerHTML = `The factorial of ${num} is ` + factorial        
}

