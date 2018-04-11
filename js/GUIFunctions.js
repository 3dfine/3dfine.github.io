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
