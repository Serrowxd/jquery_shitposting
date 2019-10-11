$('.move-button').on('click', function() {
  console.log('I work uwu');
});

$(document).ready(function() {
  $('#card-main').addClass('showme');
});

function hideCards() {
  $('#card-main')
    .removeClass('showme')
    .removeClass('hideme-left')
    .removeClass('hideme-right');
  $('#card-right')
    .removeClass('showme')
    .removeClass('hideme-left')
    .removeClass('hideme-right');
  $('#card-left')
    .removeClass('showme')
    .removeClass('hideme-left')
    .removeClass('hideme-right');
}

// $('#right').on('click', function() {
//   if ($('#card-right').hasClass('showme')) {
//     hideCards();
//     $('#card-main').addClass('showme');
//   } else {
//     hideCards();
//     $('#card-main').addClass('hideme-right');
//     $('#card-right').addClass('showme');
//   }
// });

// $('#left').on('click', function() {
//   if ($('#card-left').hasClass('showme')) {
//     hideCards();
//     $('#card-main').addClass('showme');
//   } else {
//     hideCards();
//     $('#card-main').addClass('hideme-left');
//     $('#card-left').addClass('showme');
//   }
// });

$('#right').on('click', function() {});

// Possibly just remove ability to click right?
// When clicking right on secondary card shown, return to center screen?
// Timeout function to change hideme-left to hideme and add showme to second item.
