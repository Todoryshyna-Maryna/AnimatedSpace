//
// window.onscroll = function () {
//     let obj2 = document.getElementById('obj2');
//     let num = '';
//
//     for (let i = 0; i < obj2.style.transform.length; i++) {
//             console.log(obj2.style.transform[i])
//     }
//
//     console.log(parseFloat(obj2.style.transform))
//     if (parseFloat(obj2.style.transform) > 2.114) {
//         obj2.style.transition = '1s';
//         obj2.style.position = 'absolute';
//     }
// }

// smooth scroll
$("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 50,
  touchpadSupport: true,
  fixedBackground: true
});


$(document).ready(function () {
  document.body.scrollTop = 0;

  var eveningSky = $('#evening-sky');
  var land = $('#land');
  var landTop = land.css('bottom');

  var position = document.body.scrollTop;
  var scroll = setInterval(function () {
    document.body.scrollTop += 1;
    eveningSky.css('top', (document.body.scrollTop +=3) + 'px')
    land.css('bottom', "-=3"+ 'px')
    // land.animation
    console.log('scroll')
  }, 10);

  $(document).scroll(function () {
    position = document.body.scrollTop;

    if (position >= 2400) {
      clearInterval(scroll);
      $(document).unbind('scroll');
    }
  })


  // $(function () {
  //
  //
  // })()

})