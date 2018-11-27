let btn = document.querySelector('.btn');

btn.addEventListener('click', setOrange);

if (localStorage.getItem('textcolor') !== null) {
    let textColor = localStorage.getItem('textcolor');
    document.body.style.color = textColor;
}

function setOrange(evt) {
    evt.preventDefault();
    document.body.style.color = 'orange';
    btn.removeEventListener('click', setOrange);
    btn.addEventListener('click', setWhite); 
    localStorage.setItem('textcolor', 'orange');    
}

function setWhite(evt) {
    evt.preventDefault();
    document.body.style.color = '#ffff';
    btn.removeEventListener('click', setWhite);
    btn.addEventListener('click', setOrange);
    localStorage.setItem('textcolor', '#ffff');    
}


