//longest word in a sentence 
document.getElementById('longest-submit').onclick=function() {
  let longest = 0
  let sentence = document.getElementById('longest-input').value.split(' ')
    sentence.forEach(function(word){
       word = word.replace(/[^\w\s]|_/g, '')
       if (longest < word.length){
          longest = word.length
          sentence = word
       }
    })
    document.getElementById('longest-answer').innerHTML = "The longest word is: " + sentence        
}

//palindrome 
document.getElementById('pal-submit').onclick=function() {
  word = document.getElementById('pal-input').value
  var test =  word.replace(/[^A-Z0-9]+/ig, '')
    if ( test === test.split('').reverse().join('') ) {
      document.getElementById('pal-answer').innerHTML = 'The word is a palindrome'       
    } else {
      document.getElementById('pal-answer').innerHTML = 'Not a palindrome'     
    }
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

//reverse a string 
document.getElementById('reverse-submit').onclick=function() {
  let string = document.getElementById('reverse-input').value.split('').reverse().join('')
  document.getElementById('reverse-answer').innerHTML = 'Reversed: ' + string        
}



