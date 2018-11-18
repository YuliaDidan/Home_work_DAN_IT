let name = prompt('Please, insert your name!', '');
while (name == '') {
    name = prompt('Please, insert your name!');
}
let age =  prompt('Please, insert your age!', '');
while (age == '') {
	age =  prompt('Please, insert your age!', '');
}
if (!name || !age) {
	alert('Goodbye!!!');	
} else if (age < 18 ) {
	alert('Sorry! You are not allowed to visit this website!');
} else if (age > 18 && age <= 22) {
	let answer = confirm('Are you sure you want to continue?');
	if (answer) {
	 alert('Welcome ' + name + '!');	 
	} else {		
		alert('Sorry! You are not allowed to visit this website!');
	}
} else {
	alert('Welcome ' + name + '!');
}

// let name, age;
// let allowAccess = false;
// const denidMessage = 'You are not allowed to visit this site';
// do {
// 	name = prompt('What is your name');
// 	// alert(typeof name);
// 	// alert(name);
// 	if (name) {
// 		name = name.trim();
// 	} 
// } 
// while (!name); // (name == null || name == '');

// do {
// 	age = prompt('How old are you?'); 
// }
// while (isNan(age) || !age); 

// //  блок логики
// // 1 variant:
// // if (age < 18) {
// // 	allowAccess = false;
// // 	alert(deniedMessage);
// // } else if (age >= 18 && age <= 22) {
// // 	if (confirm('Are you sure you want to continue?')) {
// // 		allowAccess = true;
// // 	}
// // 	else {
// // 		alert(deniedMessage);
// // 	}
// // } else {
// // 	allowAccess = true;
// // }
// // 2 variant:
// // allowAccess = age > 22 || (age >= 18 && age <= 22 && confirm('Are you sure you want to continue?');

// // 3 variant:
// if (age >= 18 && age <= 22) {
// 	allowAccess = confirm('Are you sure you want to continue?');
// } else if (age > 22) {
// 	allowAccess = true;
// }

// // блок проверки результата
// if (allowAccess) {
// 	alert('Welcome ' + name +'!');
// } else {
// 	alert(deniedMessage);
// 	// location.href = '/denid access';
// }

