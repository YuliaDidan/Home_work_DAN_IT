let btn = document.querySelector('.btn');

btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.body.style.color = 'orange'; 
});