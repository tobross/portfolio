var card = document.querySelector(".card");
var playing = false;

$(document).on('click', ".card", function() { 
  if(playing)
    return;
  
  playing = true;
  
  anime({
    targets: this,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
  $(this).toggleClass("overflow");
 
});
