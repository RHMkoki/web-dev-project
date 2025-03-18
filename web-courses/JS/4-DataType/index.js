let upper = document.getElementById('upper')
let lower = document.getElementById('lower')
let p = document.getElementById('p')
let textiput = document.getElementById('text')
let calcule = document.getElementById('calcule')
let div = document.getElementById('div')

// the = in p.textContent

// trasfer text to upper case
upper.addEventListener('click',function(){
    p.textContent = p.textContent.toUpperCase()
})
// transfer text to lowel case
lower.addEventListener('click',function(){
    p.textContent = p.textContent.toLocaleLowerCase()
})


// check the length
calcule.addEventListener('click',function(){
     let h3 = document.createElement('h3')
     h3.textContent = 'the length is : ' + textiput.value.length
     div.appendChild(h3)
})



