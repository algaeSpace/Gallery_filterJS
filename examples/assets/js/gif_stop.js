// There are 2 versions to animate the gif
// 1. using gifffer

window.onload = function() {
    var gifs = Gifffer();
    setTimeout(function() {
        // gifs[0].click(); //will play the first gif
    }, 1000);
}

// 2. using gifcontrol css
// var gifElements = document.querySelectorAll('img.gif');
// console.log("!!", gifElements)
// for (var e in gifElements) {
//     var element = gifElements[e];

//     if (element.nodeName == 'IMG') {

//         var supergif = new SuperGif({
//             gif: element,
//             progressbar_height: 0,
//             auto_play: false,
//         });

//         var controlElement = document.createElement("div");
//         controlElement.className = "gifcontrol loading g" + e;

//         supergif.load((function (controlElement) {
//             controlElement.className = "gifcontrol paused";
//             var playing = false;
//             controlElement.addEventListener("click", function () {
//                 if (playing) {
//                     this.pause();
//                     playing = false;
//                     controlElement.className = "gifcontrol paused";
//                 } else {
//                     this.play();
//                     playing = true;
//                     controlElement.className = "gifcontrol playing";
//                 }
//             }.bind(this, controlElement));

//         }.bind(supergif))(controlElement));

//         var canvas = supergif.get_canvas();
//         controlElement.style.width = canvas.width + "px";
//         controlElement.style.height = canvas.height + "px";
//         controlElement.style.left = canvas.offsetLeft + "px";
//         var containerElement = canvas.parentNode;
//         containerElement.appendChild(controlElement);

//     }
// }


