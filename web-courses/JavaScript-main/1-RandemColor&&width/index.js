let colorDiv = document.getElementById('colorDiv');
let colorButton = document.getElementById('colorButton');
let addButton = document.getElementById('add');

colorButton.addEventListener('click', function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorDiv.style.backgroundColor = randomColor;
    console.log('Background color changed to:', randomColor);
});

addButton.addEventListener('click', function() {
    let randomWidth = Math.floor(Math.random() * 401) + 100;
    colorDiv.style.width = randomWidth + 'px';
    console.log('Width changed to:', randomWidth + 'px');
});

