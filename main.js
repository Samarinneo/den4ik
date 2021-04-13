//  $('#btn').click(function(){
//     $('.div').css({'font-size':'5em'});
//  })

$(document).ready(function(){

// $('div:has("span")').css({'font-size':'40px'});

let attr = $('input').attr('type');
console.log(attr);
 $('.button').on('click', function(){
     $('.koteret').toggle({'display':'block'});
 })
 $('.button2').on('click', function(){
    $('.koteret2').toggle({'display':'block'});
})
$('.button3').on('click', function(){
    $('.koteret3').toggleClass('active');
});
$('input').on('input', function(){
$('.result').html($(this).val());
})

//   $('div').css({'color':'red'});

//   $('.div').css({'color':'green'});
//   $('#div').css({'color':'blue'});

//   let dataatr = $('#h2').data('number');
//   console.log(dataatr);
//   $('input[name="massege"]').css({'border': '1px solid crimson'});

// $('ul li:nth-child(3)').css({'font-size': '40px'} );
$('#run').on('click', function(){
    $('.kvadrat').animate({'height':'200px'}, 1000)
    $('.kvadrat').animate({'width':'200px'}, 500)
})




})