let add = document.getElementById('add')
let ul = document.getElementById('ul')
let inputText = document.getElementById('text')
let display = document.getElementById('display')
let div = document.getElementById('div')
let clear = document.getElementById('clear')

// craeteElemnts , appendChlide, textContent, innerHtml

// innerHtml Vs textContent  https://www.w3schools.com/jsref/prop_html_innerhtml.asp

// inputs and using value

// create new LIST elemnts


add.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent = 'This new List' 
    ul.appendChild(li)
})

// delet all the list
clear.addEventListener('click', function() {
    // to Clear or the Ul elemnts 
    ul.innerHTML = '';
    // Or we can use this 
    ul.textContent = '';

});

// display input 
display.addEventListener('click',function(){
    // create an h2
    let h2 = document.createElement('h2')
    // create a text for h2 from the input
    h2.textContent = inputText.value
    // Add this h2 to the div to display it 
    div.appendChild(h2)
    // clear the input 
    inputText.value = "" 
})