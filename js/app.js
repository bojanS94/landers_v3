$('.scrollBtn').click(function () {
    $('html, body').animate({
        scrollTop: $('.newsletter').offset().top + 'px'
    }, 'slow');
    $('#input').focus();
});
$('#subBtn').click(function () {
    $('#input').focus();
    let inputVal = $('#input').val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (inputVal === '') {
        $('.error').hide();
        $('.errorEmail').show();
        $('.success').hide();
        return;
    }
    else if (!regex.test(inputVal)) {
        $('.error').show();
        $('.errorEmail').hide();
        $('.success').hide();
    }
    else {
        $('.error').hide();
        $('.errorEmail').hide();
        $('.success').show();
    }
});

$('.number').counterUp({
    delay: 10,
    time: 1000
});