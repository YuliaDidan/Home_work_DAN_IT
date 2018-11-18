let num = prompt('Please, insert the number!');

nextPrime:
for (var i = 2; i <= num; i++) {

   for (var j = 2; j < i; j++) {
   // console.log(i, j);
     if (i % j == 0) continue nextPrime;
   }

   console.log( i ); 
 }


// let num = prompt('Please, insert the number!');
// let isPrimary = true;
// for (let i = 2; i < num; i++) {
// if (num%i == 0) {
// alert(num + ' is not a primary number!');
// isPrimary=false;
// break;
// }  
// } 
// if (isPrimary) {
// alert(num + ' is a primary number!');
// } 
// простые числа
// let num = prompt('Please, insert the primary number!');
// for (let i = 1; i < num; i++) {
//    for (let j = 2; j < i; j++) {
//    if (num%j == 0) {
//     num = prompt(num + ' is not a primary number! Please, insert the primary number'); 
//     break;     
//    } else {
//         alert(num + ' is a primary number! Thank you for cooperation!!');   
//    }   
// } 
// }


// let num = prompt('Please, insert the primary number!');
// for (let i = 2; i < num; i++) {
//     if (num%i == 0) {
//     alert(num + ' is not a primary number! Please, insert the primary number');                                                                 
//     } else{
//         alert(num + ' is a primary number! Thank you for cooperation!!');     
//     }     
//  }