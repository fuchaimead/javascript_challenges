//longest word in a sentence 
document.getElementById('longest-submit').onclick = () => {
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
document.getElementById('pal-submit').onclick = () => {
  word = document.getElementById('pal-input').value
  let test =  word.replace(/[^A-Z0-9]+/ig, '')
    if ( test === test.split('').reverse().join('') ) {
      document.getElementById('pal-answer').innerHTML = 'The word is a palindrome'       
    } else {
      document.getElementById('pal-answer').innerHTML = 'Not a palindrome'     
    }
}

//factorial of a number 
document.getElementById('factorial-submit').onclick = () => {
  let num = document.getElementById('factorial-input').value
  let factorial = 1
  for ( i=1; i <= num; i++) { 
    factorial = factorial * i;
  }
  document.getElementById('factorial-answer').innerHTML = `The factorial of ${num} is ` + factorial        
}

//reverse a string 
document.getElementById('reverse-submit').onclick = () => {
  let string = document.getElementById('reverse-input').value.split('').reverse().join('')
  document.getElementById('reverse-answer').innerHTML = 'Reversed: ' + string        
}

//shift letters
document.getElementById('letter-submit').onclick = () => {
  let s = document.getElementById('letter-input').value.split('');
    for (var i = 0; i < s.length; i++){
      switch(s[i]){
        case ' ':
          break;
        case 'z':
          s[i] = 'a';
          break;
        case 'Z':
          s[i] = 'A';
          break;
        default: 
          s[i] = String.fromCharCode(1 + s[i].charCodeAt(0))
      }
        switch(s[i]) {
          case 'a' : case 'e' : case 'i' : case 'o': case 'u' : 
            s[i] = s[i].toUpperCase();
          }    
      }
    document.getElementById('letter-answer').innerHTML = 'Reversed: ' + s.join('')        
  }




