$(document).ready(start);

function start(){
  $('#name').click(displayEmail);
  $('#hidden-text').click(sendEmail);
  $('#film1').hover(showOats);
  $('#film2').hover(showOtis);
  $('#film3').hover(showSaatsuma);
  $('#film4').hover(showSister);
  $('#film5').hover(showHenrik);

}

function displayEmail(){
  $('#hidden-text').slideToggle();
}

function sendEmail(){
  console.log('clicked');
window.open('mailto:howdy@caitlinanneshannon.com?subject=Hello&body=');
}

function showOats(){
  $('#oats').show();
  $('#oats-description').show()
  $('#film1 .fa-play').hide();
  $('.film-box#film1').css('background-color','');
  $(this).addClass('hover');
}

function showOtis(){
  $('#otis').show();
  $('#otis-description').show()
  $('#film2 .fa-play').hide();
  $('.film-box#film2').css('background-color','');
  $(this).addClass('hover');
}

function showSaatsuma(){
  $('#saatsuma').show();
  $('#saatsuma-description').show()
  $('#film3 .fa-play').hide();
  $('#film3 .film-box').css('background-color','');
  $(this).addClass('hover');
}

function showSister(){
  $('#sister').show();
  $('#sister-description').show()
  $('#film4 .fa-play').hide();
  $(this).addClass('hover');

}

function showHenrik(){
  $('#henrik').show();
  $('#henrik-description').show()
  $('#film5 .fa-play').hide();
  $(this).addClass('hover');
}
