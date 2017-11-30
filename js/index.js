$(document).ready(start);

function start(){


  $('#name').click(displayEmail);
  $('.email-me').click(sendEmail);
  $('#film1').click(showOats);
  $('#film2').click(showOtis);
  $('#film3').click(showSaatsuma);
  $('#film4').click(showSister);
  $('#film5').click(showHenrik);
  $('#filmBee').click(showBee);
  $('#freelanceButton').click(displayFreelance);
  $('#publicationsButton').click(displayPublications);
  $('#collaboratorsButton').click(displayCollaborators);
  $('#speakButton').click(displayspeak);
  $('.email-georgie').click(emailGeorgie);


}



function displayEmail(){
  $('#hidden-text').slideToggle();
}

function sendEmail(){
  console.log('clicked');
  window.open('mailto:caitlinanneshannon@gmail.com?subject=Hello&body=');
}

function emailGeorgie(){
  window.open('mailto:georginaabrown@gmail.com?subject=Hello&body=');

}

function showOats(){
  $('#oats').show();
  $('#oats-description').show();
  $('#film1 .fa-play').hide();
  $('.film-box#film1').css('background-color','');
  $(this).addClass('hover');
}

function showBee(){
  $('#bee').show();
  $('#bee-description').show();
  $('#filmBee .fa-play').hide();
  $('.film-box#filmBee').css('background-color','');
  $(this).addClass('hover');
}

function showOtis(){
  $('#otis').show();
  $('#otis-description').show();
  $('#film2 .fa-play').hide();
  $('.film-box#film2').css('background-color','');
  $(this).addClass('hover');
}

function showSaatsuma(){
  $('#saatsuma').show();
  $('#saatsuma-description').show();
  $('#film3 .fa-play').hide();
  $('#film3 .film-box').css('background-color','');
  $(this).addClass('hover');
}

function showSister(){
  $('#sister').show();
  $('#sister-description').show();
  $('#film4 .fa-play').hide();
  $(this).addClass('hover');

}

function showHenrik(){
  $('#henrik').show();
  $('#henrik-description').show();
  $('#film5 .fa-play').hide();
  $(this).addClass('hover');
}

function displayFreelance(){
  $('#freelance').slideToggle();
  gotoBottom();
}

function displayPublications() {
  $('#publications').slideToggle();
  gotoBottom();
}

function displayCollaborators() {
 $('#collaborators').slideToggle();
 gotoBottom();
 }

 function displayspeak(){
   $('#speak').slideToggle();
   gotoBottom();
 }

 function showGeorgie(){
   $(".georgieCredit").hide();
   $(".showGeorgie").show();
 }

 function gotoBottom(){
document.body.scrollTop = document.body.scrollHeight;
document.documentElement.scrollTop = document.documentElement.scrollHeight;
}
