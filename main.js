document.getElementById('longest-submit').onclick=function() {
  var longest = 0
  var sentence = document.getElementById('longest-input').value.split(' ')
    sentence.forEach(function(word){
       word = word.replace(/[^\w\s]|_/g, "")
       if (longest < word.length){
          longest = word.length
          sentence = word
       }
    })
    console.log(sentence)
    document.getElementById('longest-answer').innerHTML = "The longest word is:" + sentence        
}

