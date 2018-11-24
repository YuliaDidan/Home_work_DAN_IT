let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', drawCircle);

function drawCircle() {
    btn1.setAttribute('class', 'btn-hidden');
    
    let inputWrap = document.createElement('div');
    inputWrap.className = 'input-wrap';
    
    let inputDiameter = document.createElement('input');
    inputDiameter.className = 'diameter-input';
    inputDiameter.setAttribute('placeholder', 'Please, insert diameter in px!');
    inputDiameter.setAttribute('type', 'number');

    let inputColor = document.createElement('input');
    inputColor.className = 'color-input';
    inputColor.setAttribute('placeholder', 'Please, insert color-name!');

    let btn2 = document.createElement('button');
    btn2.className = 'btn2';
    btn2.innerHTML = 'Draw!';
    
    inputWrap.appendChild(inputDiameter);
    inputWrap.appendChild(inputColor);
    inputWrap.appendChild(btn2);

    document.body.append(inputWrap);

    btn2.addEventListener('click', draw);
    
    function draw(diameter, color) {
        diameter = inputDiameter.value;       
        color = inputColor.value;
        let circleWrap = document.createElement('div');
        circleWrap.className = 'circleWrap';
    
        let circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.borderColor = `${color}`;
    
        circleWrap.appendChild(circle);
    
        document.body.append(circleWrap);

        circle.addEventListener('click', function() {
            this.style.display = 'none';
        });        
    }
}



