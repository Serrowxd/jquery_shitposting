$('.move-button').on('click', function() {
  console.log('I work uwu');
});

$(document).ready(function() {
  $('#card-1').addClass('showme');
});

function hideCards() {
  $('#card-1')
    .removeClass('showme')
    .removeClass('hideme-left')
    .removeClass('hideme-right');
  $('#card-2')
    .removeClass('showme')
    .removeClass('hideme-left')
    .removeClass('hideme-right');
  $('#card-3')
    .removeClass('showme')
    .removeClass('hideme-left')
    .removeClass('hideme-right');
}

$('#right').on('click', function() {
  if ($('#card-2').hasClass('showme')) {
    hideCards();
    $('#card-1').addClass('showme');
  } else {
    hideCards();
    $('#card-1').addClass('hideme-right');
    $('#card-2').addClass('showme');
  }
});

$('#left').on('click', function() {
  if ($('#card-3').hasClass('showme')) {
    hideCards();
    $('#card-1').addClass('showme');
  } else {
    hideCards();
    $('#card-1').addClass('hideme-left');
    $('#card-3').addClass('showme');
  }
});

// Possibly just remove ability to click right?
// When clicking right on secondary card shown, return to center screen?
// Timeout function to change hideme-left to hideme and add showme to second item.
