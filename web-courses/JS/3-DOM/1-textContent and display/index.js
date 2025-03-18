let excellent = document.getElementById('excellent');
let good = document.getElementById('good');
let average = document.getElementById('average');
let poor = document.getElementById('poor');
let feedback = document.getElementById('feedback');

excellent.addEventListener('click', function() {
    feedback.textContent = 'Thank you for your positive feedback!';
});

good.addEventListener('click', function() {
    feedback.textContent = 'Glad to hear you had a good visit!';
});

average.addEventListener('click', function() {
    feedback.textContent = 'We appreciate your feedback. We will work on improving!';
});

poor.addEventListener('click', function() {
    feedback.textContent = 'Sorry to hear that. We’ll strive to do better next time.';
});


// intro to createElemnts 
// task : when click create a new elelmnts with the feedBack 