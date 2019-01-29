// advanced task

let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', createInput);

function createInput() {
    let inputWrap = document.createElement('div');
    // console.log(inputWrap);
    inputWrap.setAttribute('class', 'input-Wrap');
    
    let diameterInput = document.createElement('input');
    diameterInput.setAttribute('class', 'diameter-Input');
    btn1.setAttribute('class', 'btn-hidden'); 
    
    let btn3 = document.createElement('button');
    btn3.setAttribute('class', 'btn3');
    btn3.innerHTML = 'Please insert diameter of circles!';  
    btn3.addEventListener('click', insertDiameter);
    
    inputWrap.appendChild(diameterInput);
    inputWrap.appendChild(btn3);
    document.body.appendChild(inputWrap); 
    
    function insertDiameter() {
        btn3.innerHTML = 'Draw circles!';
        btn3.removeEventListener('click', insertDiameter);
        // console.log(input.value);
        btn3.addEventListener('click', drawCircles);        
    }

    let circlesWrap = document.createElement('div');
    circlesWrap.className = 'circles__wrap';

    function drawCircles(diameter) {                
        document.body.removeChild(inputWrap);
        diameter = diameterInput.value;                
        
        for (let i=1; i<=100; i++) {
            let circle = document.createElement('div');
            circle.className = 'circle-small';
            circle.style.width = `${diameter}%`;
            circle.style.height = `${diameter}%`; 
            circlesWrap.appendChild(circle);
        }          
        return document.body.append(circlesWrap);               
    }     
    
    circlesWrap.addEventListener('click', function(event){
        let target = event.target;
        console.log('target', target);
        let circle = target.closest('div');            
        circle.parentNode.removeChild(circle);            
        });   
     
}

