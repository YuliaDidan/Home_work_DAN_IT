function CreateNewUser() {

    this.firstName = prompt('Please, insert your first name! Thanks!');
    
    this.lastName = prompt('Please, insert your last name! Thanks!');
  
    this.getLogin = () => {     

        let firstLetter = this.firstName.substring(0, 1);
    
        let userName = (firstLetter + this.lastName).toLowerCase();
        
        return userName
    }    
    
    this.setFirstName = (firstName) => {
        this.firstName = firstName;
        return firstName;
    }

    this.setLastName = (lastName) => {
        this.lastName = lastName;
        return lastName;
    }
};


let user = new CreateNewUser();
console.log(user);
console.log(user.setFirstName('Anna'));

