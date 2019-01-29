class Hamburger {
    constructor(size, stuffing) { 
        // debugger       
        try{
            if (size.name !== 'SIZE_SMALL' && size.name !== 'SIZE_LARGE') {
                
                throw new HamburgerException('Size is expected!');
            }
            
            if (stuffing.name !== 'STUFFING_CHEESE' && stuffing.name !== 'STUFFING_SALAD' && stuffing.name !== 'STUFFING_POTATO') {
                
                throw new HamburgerException('Stuffing is expected!');
            }           
            
        } catch (err) {
            console.log('Please insert appropriate data!');
        } 
        
        this._size = size;
        this._stuffing = stuffing;
        this._toppingSet = [];
                
    }

    getSize() {
        return this._size;
    }
    
    getStuffing() {
        return this._stuffing;
    }
    
    addTopping(topping) {
        try {
            if (topping.name !== 'mayo' && topping.name !== 'spice') {
                throw new HamburgerException('Please, add appropriate topping!');
            }
            let answ = true;
            this._toppingSet.forEach(currentTopping => {
                if(topping===currentTopping) {
                    answ = false;
                }
            });
            if(answ){
                this._toppingSet.push(topping);
            } else {
                alert('Already have this topping!');
            }    
        }
        catch (err) {
            console.log('Please insert appropriate data!');
        }   

    }

    removeTopping(topping) {       
        let answ = false;

        for(let value of this._toppingSet) {
            if(value === topping) {
                answ = true;
            }
        }  
        try {
            if(answ){
                this._toppingSet.splice(this._toppingSet.indexOf(topping),1);
            } else {
                throw new HamburgerException("Topping wasn't added!");
            } 
        }
        catch {
            console.log('No data is in the set!');
        }
                
    }

    getToppings() {
        return this._toppingSet;
    }

    calculatePrice() {
        let toppingPrice = () => {
            let toppingPrice = 0;
            for (let value of this._toppingSet) {              
                toppingPrice += +value.price;                
            }
            return toppingPrice;
        }
        return this._size.price + this._stuffing.price + toppingPrice() + ' ' + 'UAH;';
    }

    calculateCalories() {
        let toppingCalories = () => {
            let toppingCalories = 0;
            for (let value of this._toppingSet) {
                toppingCalories += +value.calories;
            }
            return toppingCalories;
        }
        return this._size.calories + this._stuffing.calories + toppingCalories() + ' ' + 'calories;'; 
    }

}

function HamburgerException(message) {    
    // this.name = 'MyError';
    // this.message = message || 'Ошибка ввода!';
    // this.stack = (new Error()).stack;
    alert(message);  
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

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// shamburger.removeTopping(Hamburger.TOPPING_SPICE);
// hamburger.removeTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());
// hamburger.calculatePrice();




