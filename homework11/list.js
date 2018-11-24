let num = +prompt('Введите количество пунктов, пожалуйста!', '');
let list = []
while (num) {
   list.push(prompt('Введите текст списка, пожалуйста', ''));
   if (num == null) break;
   num--;
}

let parent = document.createElement('ul');
parent.className = 'list';

for (let i = 0; i < list.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = list[i];    
    parent.appendChild(li);
}

document.body.append(parent);

let timer = document.createElement('p');
timer.className = 'timer';
timer.innerHTML = '5';
document.body.append(timer);

goTimer();

function goTimer() {
    window.timerId = window.setInterval(timerCount, 1000);        
}
    
function timerCount() {
    let number = parseInt(timer.innerHTML) -1;
    timer.innerHTML = number;
    if (number == 0) {        
        clearBox();
    }
}

function clearBox() {
    window.setInterval(function() {
        window.clearInterval(timerId);
        parent.innerHTML = "";    
        timer.innerHTML = ""; 
    }, 1000);    
          
}

 



