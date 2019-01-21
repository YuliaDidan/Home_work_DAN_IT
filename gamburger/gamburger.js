
function Hamburger (size, stuffing) {
try {
    if (!size) {
        throw new HamburgerException('Size is expected!');    
    }

    if (!stuffing) {
        throw new HamburgerException('Stuffing is expected!');
    }
    
    this.size = size;
    this.stuffing = stuffing;
    this.toppingSet = [];
}

catch (err) {
    console.log('Please insert appropriate data!');
    }
}

Hamburger.SIZE_SMALL = {
    size: 'small',
    price: 50,
    callories: 20
};

Hamburger.SIZE_LARGE = {
    size: 'large',
    price: 100,
    callories: 40
};

Hamburger.STUFFING_CHEESE = {
    stuffing: 'cheese',
    price: 10,
    callories: 20
};

Hamburger.STUFFING_SALAD = {
    stuffing: 'salad',
    price: 20,
    callories: 5
};

Hamburger.STUFFING_POTATO = {
    stuffing: 'potato',
    price: 15,
    callories: 10
};

Hamburger.TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    callories: 5
};

Hamburger.TOPPING_SPICE = {
    name: 'spice',
    price: 20,
    callories: 5
};

for (key in Hamburger) {
    console.log('key', key);    
    Object.freeze(Hamburger[key]);
} 

Hamburger.prototype.getSize = function () {
    return this.size.size
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing.stuffing;
}

Hamburger.prototype.calculatePrice = function () {    
var toppingPrice = function () { 
    var toppingPrice = 0;
    for (let value of this.toppingSet) {
        toppingPrice += +value.price
        }
    return toppingPrice
    }
    return this.size.price + this.stuffing.price + toppingPrice.call(this) + ' ' + 'UAH';
}

Hamburger.prototype.calculateCalories = function () {
    var toppingCallories = function () { 
        var toppingCallories = 0;
        for (let value of this.toppingSet) {
            toppingCallories += +value.callories
        }
        return toppingCallories
    }

    return this.size.callories + this.stuffing.callories + toppingCallories.call(this) + ' ' + 'Calories';
}

Hamburger.prototype.addTopping = function (topping) { 
    // try
    // проверка на топпинг
    // if !topping 
    var answ = true;
    this.toppingSet.forEach(function(currentTopping) {
        if(topping === currentTopping) {
            answ = false;
        }
    })  
        if(answ) {
            this.toppingSet.push(topping);
        } else {
            throw new HamburgerException('Already have this topping!');
        }

    // catch
       
} 

Hamburger.prototype.removeTopping = function (topping) {    
    var flag = false;
    for (let value of this.toppingSet) {        
            if (value === topping) {
                flag = true;
        }         
    }    
        if (flag) {
        this.toppingSet.splice(this.toppingSet.indexOf(topping),1);
    }
        else {
            throw new HamburgerException("Topping wasn't added!");
        }     
}

Hamburger.prototype.getToppings = function() {
    return this.toppingSet;
}

function HamburgerException(message) {    
    this.message = message;    
 }

let hamburger = new Hamburger(Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_CHEESE);
// console.log('hamburger.getSize', hamburger.getSize() === Hamburger.SIZE_LARGE);
// console.log('hamburger.getStuffing', hamburger.getStuffing());
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Price:', hamburger.calculatePrice());
console.log('Calories:', hamburger.calculateCalories());
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log('Price with spicy:', hamburger.calculatePrice());
// console.log('hamburger', hamburger);
console.log('Size: ', hamburger.getSize() === Hamburger.SIZE_LARGE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log('hamburger', hamburger);
console.log("Have toppings: ", hamburger.getToppings());
// console.log('hamburger.addTopping', hamburger.addTopping(Hamburger.TOPPING_SPICE));
// console.log('hamburger.getToppings', hamburger.getToppings().length);

// console.log("Calories:", hamburger.calculateCalories());



