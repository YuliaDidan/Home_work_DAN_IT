
function Hamburger (size, stuffing) {
try {
    if (size.name !== 'SIZE_SMALL' && size.name !== 'SIZE_LARGE') {
        throw new HamburgerException('Size is expected!');    
    }

    if (stuffing.name !== 'STUFFING_CHEESE' && stuffing.name !== 'STUFFING_SALAD' && stuffing.name !== 'STUFFING_POTATO') {
        throw new HamburgerException('Stuffing is expected!');
    }   
        
} catch (err) {
    console.log('Please insert appropriate data!');
    }
    
    this.size = size;
    this.stuffing = stuffing;
    this.toppingSet = [];
}

Hamburger.SIZE_SMALL = {
    name: 'SIZE_SMALL',
    size: 'small',
    price: 50,
    calories: 20
};

Hamburger.SIZE_LARGE = {
    name: 'SIZE_LARGE',
    size: 'large',
    price: 100,
    calories: 40
};

Hamburger.STUFFING_CHEESE = {
    name: 'STUFFING_CHEESE',
    stuffing: 'cheese',
    price: 10,
    calories: 20
};

Hamburger.STUFFING_SALAD = {
    name: 'STUFFING_SALAD',
    stuffing: 'salad',
    price: 20,
    calories: 5
};

Hamburger.STUFFING_POTATO = {
    name: 'STUFFING_POTATO',
    stuffing: 'potato',
    price: 15,
    calories: 10
};

Hamburger.TOPPING_MAYO = {    
    name: 'mayo',
    price: 20,
    calories: 5
};

Hamburger.TOPPING_SPICE = {   
    name: 'spice',
    price: 20,
    calories: 5
};

for (key in Hamburger) {        
    Object.freeze(Hamburger[key]);
} 

Hamburger.prototype.getSize = function () {
    return this.size
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
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
    var toppingCalories = function () { 
        var toppingCalories = 0;
        for (let value of this.toppingSet) {
            toppingCalories += +value.calories
        }
        return toppingCalories
    }

    return this.size.calories + this.stuffing.calories + toppingCalories.call(this) + ' ' + 'Calories';
}

Hamburger.prototype.addTopping = function (topping) { 
    try { 
        if (topping.name !== 'mayo' && topping.name !== 'spice') {
            throw new HamburgerException('Please, add appropriate topping!');
        }
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
    }    
    catch (err) {
        console.log('Please insert appropriate data!');
    }
       
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
    alert(message);    
 }

let hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// console.log('Price with spicy:', hamburger.calculatePrice());
// console.log('hamburger', hamburger);
// console.log('Size: ', hamburger.getSize() === Hamburger.SIZE_LARGE);
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log('hamburger', hamburger);
console.log('Price:', hamburger.calculatePrice());
console.log('Calories:', hamburger.calculateCalories());
// console.log('hamburger', hamburger.size.name !== 'SIZE_LARGE');
// console.log("Have toppings: ", hamburger.getToppings());
// console.log('hamburger.addTopping', hamburger.addTopping(Hamburger.TOPPING_SPICE));
// console.log('hamburger.getToppings', hamburger.getToppings().length);

// console.log("Calories:", hamburger.calculateCalories());



