let btn1 = $('.btn1');
btn1.click(drawCircle);

function drawCircle() {    
    btn1.remove();
    
    let $inputWrap = $('<div></div>');
    $inputWrap.addClass('input-wrap');
    
    let $inputDiameter = $('<input></input>');
    $inputDiameter.addClass('diameter-input');
    $inputDiameter.attr('placeholder', 'Please, insert diameter in px!');
    $inputDiameter.attr('type', 'number');

    let $inputColor = $('<input></input>');
    $inputColor.addClass = 'color-input';
    $inputColor.attr('placeholder', 'Please, insert color-name!');

    let $btn2 = $('<button></button>');
    $btn2.addClass('btn2');
    $btn2.html('Draw!');
    
    
    $inputWrap.append($inputDiameter);
    $inputWrap.append($inputColor);
    $inputWrap.append($btn2);

    $('body').append($inputWrap);

    $btn2.click(draw);
    
    function draw(diameter, color) {
        diameter = $inputDiameter.val();                      
        color = $inputColor.val();        
        let $circleWrap = $('<div></div>');
        $circleWrap.addClass('circleWrap');
    
        let  $circle = $('<div></div>');
        $circle.addClass('circle');
        $circle.css('width', `${diameter}px`);
        $circle.css('height', `${diameter}px`);
        $circle.css('border-color', `${color}`);       
    
        $circleWrap.append($circle);
    
        $('body').append($circleWrap);

        $circleWrap.click(function() {
            $circleWrap.remove();
        });        
    }
}