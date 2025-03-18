let yes = document.getElementById('yes')
let no = document.getElementById('no')
let p = document.getElementById('response')

yes.addEventListener('click',function() {
   p.textContent = 'hello'
})
no.addEventListener('click',function() {
    p.textContent = 'it Oky but hello!'
 })