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