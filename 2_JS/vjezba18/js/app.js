$(document).foundation()

$('#promjeniNaslov').click(function(){
    console.log('Kliknuo sam Simple button');
    $('#naslov').text('Dobrodošli');
    return false;
});

$('#sakrijKomponente').click(() => {
    console.log("može arrow function");
    $('#komponente').hide();
    return false;
})

$('#pokaziKomponente').dblclick(()=>{
    $('#komponente').show();
})

$('#oblikujNaslov').click(function(){
    $('#naslov').css('color', 'red');
    $('#naslov').css('text-decoration', 'underline');
    $('#naslov').after('<hr />');
    return false;
})

$('.callout.primary').mouseover(function(){
    $(this).css('background-color', '#eee');
})

$('#unos').keyup(function(e){
    if(e.key==='b' || e.key==='B'){
        $('p').css('color', 'red');
    }

    if(e.key==='r' || e.key==='R'){
        $('p').css('color', 'black');
    }
})