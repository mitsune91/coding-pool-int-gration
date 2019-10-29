$(document).ready(function () {
//Change le container du menu en croix
    var container = $('#container');
    container.on('click', function () {
        $(this).toggleClass("change");
    });
    container.on('click', function () {
        $('#menu').toggleClass('expanded');
        $('body').css('background',)
    });
    let input = $('input[type=search]');
    $('label[for=test]').on('click',function(){
        if ( input.width() === 0) {
            input.css('width', '150px');
            input.show()
        }else{
            input.css('width','0');
            input.delay(750).hide(0);

        }});


});



