
let test = document.querySelector('.test');
let btn = document.querySelector('.btn');
btn.addEventListener('click', go);
// let id;

// запускает таймер
function go(){
    window.id = setInterval(timer, 500);
    this.removeEventListener('click', go);
    this.addEventListener('click', stop);   
    this.value = 'Pause!'
}

//Останавливает таймер
function stop(){
    window.clearInterval(window.id);
    this.removeEventListener('click', stop);
    this.addEventListener('click', go); 
    this.value = 'Start!'   
}

function timer(){   
    test.innerHTML = parseInt(test.innerHTML)+1;
}