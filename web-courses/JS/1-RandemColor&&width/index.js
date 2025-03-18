let colorDiv = document.getElementById('colorDiv');
let colorButton = document.getElementById('colorButton');
let addButton = document.getElementById('add');


colorButton.addEventListener('mouseover', function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorDiv.style.backgroundColor = randomColor;

});

addButton.addEventListener('click', function() {
    let randomWidth = Math.floor(Math.random() * 401) + 100;
    colorDiv.style.width = randomWidth + 'px';

});

btt.addEventListener('click', function() {
   let number = 150;
    colorDiv.style.width = number + 'px';

});

