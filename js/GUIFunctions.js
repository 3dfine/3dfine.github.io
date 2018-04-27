var btnbrony = document.getElementById( "btnbrony" );
let blockLoad = document.getElementById("loading"); // Получаем основной блок
let blockLoadProgress = document.getElementById("blockloading_progress");
let btnPlay = document.getElementById("btnPlay"); // Получаем основной блок
let btnfullscrn = document.getElementById("btnfullscrn"); // Получаем основной блок
let rotateObj = document.getElementById("rotateObj");
let cameraReset = document.getElementById("cameraReset"); // Получаем основной блок

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

function setCursorGrab() {
  document.body.style.cursor = 'grab';
  document.body.style.cursor = '-webkit-grab';
}
function setCursorGrabbing() {
  document.body.style.cursor = 'grabbing';
  document.body.style.cursor = '-webkit-grabbing';
}
//--------------------------------------продолжительность нажатия ПКМ для отмены вращения
let strtm;
document.body.onmousedown = function(e) {
  // which указывает на клавишу (1 - левая)
  if (e.which === 1) {
    strtm = +new Date();
  }
}
document.body.onmouseup = function(e) {
  if (e.which === 1) {
    let et = +new Date();
    let tt = et - strtm;
    if(tt > 300) offCameraRotate();
  }
}
