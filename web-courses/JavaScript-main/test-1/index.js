let one = document.getElementById('one')
let two = document.getElementById('two')
let background = document.getElementById('background')

one.addEventListener('click', function(){
   let randomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16);
   background.style.backgroundColor = randomColor;
   console.log(randomColor)
})