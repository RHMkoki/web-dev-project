let bt = document.getElementById('bt')
let ul = document.getElementById('ul')
bt.addEventListener('click',function(){
  let list = document.createElement('li')
  list.textContent = 'hello'
  ul.appendChild(list)
})