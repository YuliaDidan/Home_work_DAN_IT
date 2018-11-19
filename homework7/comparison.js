// function excludeBy(arr, arr2){

//     let arr3 = [];
//     newCicle:
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr[i] == arr2[j]) {                
//                 continue newCicle;                
//             }            
//         } 
//         arr3.push(arr[i]);    
//     }   
//     return console.log('arr3', arr3)
// }

// let veges1 = ['tomato', 'potato', 'onion', 'carrot', 'cabbage' ];

// let veges2 = ['tomato', 'beetroot', 'onion', 'carlig', 'cabbage'];

// excludeBy(veges1, veges2);


function excludeBy1(arr, arr2, name){
    let arr3 = [];
    newCicle:
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr[i].name == arr2[j].name) {                
                continue newCicle;                
            }            
        } 
        arr3.push(arr[i]);    
    }   
    return console.log('arr3', arr3)
}

const users = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
},
{
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
},

{
    name: "Helena",
    surname: "Ivanova",
    gender: "female",
    age: 22
},

{
    name: "Boris",
    surname: "Ivanov",
    gender: "male",
    age: 22
}]

const users1 = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
},
{
    name: "Olga",
    surname: "Ivanova",
    gender: "female",
    age: 22
},

{
    name: "Helena",
    surname: "Ivanova",
    gender: "female",
    age: 22
},

{
    name: "Sergey",
    surname: "Ivanov",
    gender: "male",
    age: 22
}]

excludeBy1(users, users1, 'name');



