function createNewUser() {
    let firstName = prompt('Please, insert your first name! Thanks!');
    let lastName = prompt('Please, insert your last name! Thanks!');
    let firstLetter = firstName.substring(0, 1);
    let userName = (firstLetter + lastName).toLowerCase();
    let newUser = {};
    newUser.user = userName;    
    return console.log(newUser);
}

createNewUser();




