$(document).ready(function(){
    $('.fbb').hover(function() {
        $(this).find('#fb1').hide();
        $(this).find('#fb2').fadeIn(1100);
    }, function() {
        // $(this).find('#fb2').hide();
        // $(this).find('#fb1').show();
    });
});
