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

function clearBoxDelay() {
    window.setTimeout(function() {
        document.querySelector('.list').innerHTML = "";  
    }, 5000);
}

clearBoxDelay();



