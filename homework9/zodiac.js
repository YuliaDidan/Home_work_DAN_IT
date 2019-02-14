(function getAgeAndZodiac() {
    
let dateRequest = prompt("Пожалуйста, введите Вашу дату рождения в следующем формате: `dd.mm.yyyy`", '');

let dateBirth = new Date(dateRequest.split('.', 3).reverse().join('-'));

let dateNow = new Date();

let age =  parseInt((dateNow.getTime() - dateBirth.getTime())/(1000*60*60*24*365));

alert('Вам ' + age + ' лет!');

let date = dateRequest.split('-').reverse().slice(0, 2).reverse().join('-');

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
})();






