
let dateRequest = prompt("Пожалуйста, введите Вашу дату рождения в следующем формате: `dd.mm.yyyy`");

let dateNow = new Date();

let age = dateNow.getFullYear() - +(dateRequest.substr(6, 4));

alert('Вам ' + age + ' лет!');

let date = dateRequest.substr(0, 5).split('.').reverse().join('-');


if (date >= '03-21' && date <= '04-19') {
    alert(`Ваш знак зодиака: Овен!`); 
} else if (date >= '04-20' && date <= '05-20') {
    alert(`Ваш знак зодиака: Телец!`);
} else if (date >= '05-21' && date <= '06-20') {
    alert(`Ваш знак зодиака: Близнецы!`);
} else if (date >= '06-21' && date <= '07-22') {
    alert(`Ваш знак зодиака: Рак!`);
} else if (date >= '07-23' && date <= '08-22') {
    alert(`Ваш знак зодиака: Лев!`);
} else if (date >= '08-23' && date <= '09-22') {
    alert(`Ваш знак зодиака: Дева!`);
} else if (date >= '09-23' && date <= '10-22') {
    alert(`Ваш знак зодиака: Весы!`);
} else if (date >= '10-23' && date <= '11-21') {
    alert(`Ваш знак зодиака: Скорпион!`);
} else if (date >= '11-22' && date <= '12-21') {
    alert(`Ваш знак зодиака: Стрелец!`);
} else if (date >= '12-22' && date <= '01-19') {
    alert(`Ваш знак зодиака: Козерог!`);
} else if (date >= '01-20' && date <= '01-18') {
    alert(`Ваш знак зодиака: Водолей!`);
} else {
    alert(`Ваш знак зодиака: Рыбы!`);
}





