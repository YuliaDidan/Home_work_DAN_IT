let object1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {i: 4,
        f: 5,
        g: {j: 6,
            k: 7
        }      
    }    
}

// let object2 = Object.assign({}, object1);

// object2.d.i = 5;

// console.log('object1', object1);
// console.log('object2', object2);

let cloneObj = {};
// for (let propertyName in object1) 
// {
//     let propertyValue = object1[propertyName];
//     if(typeof propertyValue === "object") {
//         cloneObj1[propertyName] = Object.assign({}, propertyValue);
//     } else {
//         cloneObj1[propertyName] = propertyValue;
//     }
        
//     console.log(propertyName, propertyValue,  typeof propertyName, typeof propertyValue);
 
// }

function recursiveClone(obj) {
    
for (let propertyName in obj) {
    let propertyValue = obj[propertyName];
    if(typeof propertyValue === "object") {
        recursiveClone(propertyValue);
        // cloneObj[propertyName] = Object.assign({}, propertyValue);
    } else {
        cloneObj[propertyName] = propertyValue;
    }
        
    // console.log(propertyName, propertyValue,  typeof propertyName, typeof propertyValue);
 
}
}

recursiveClone(object1);


// cloneObj1.d.i = 5;

// cloneObj1.d.g.j = 5;


console.log('object1', object1);
console.log('cloneObj', cloneObj);