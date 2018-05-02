var btnbrony = document.getElementById( "btnbrony" );
let blockLoad = document.getElementById("loading"); // Получаем основной блок
let blockLoadProgress = document.getElementById("blockloading_progress");
let btnPlay = document.getElementById("btnPlay"); // Получаем основной блок
let btnfullscrn = document.getElementById("btnfullscrn"); // Получаем основной блок
let rotateObj = document.getElementById("rotateObj");
let cameraReset = document.getElementById("cameraReset"); // Получаем основной блок
let textblockUsadba0 = document.getElementById("textblockUsadba0"); // Получаем основной блок

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
document.onmousedown = function(e) {
  // which указывает на клавишу (1 - левая)
  if (e.which === 1) {
    strtm = +new Date();
  }
}
// document.body.onmouseup = function(e) {
document.onmouseup = function(e) {
  if (e.which === 1) {
    let et = +new Date();
    let tt = et - strtm;
    if(tt > 300) offCameraRotate();
  }
}
//----------------------------------------Отображение интерфейса
function showGUI() {
  let guiNotLoaded = true;
  return function() {
    if(guiNotLoaded) {
      $("#cameraControl").css("display", "flex")
        .hide()
        .delay(4000)
        .fadeIn(600);
      $("#copyRight").css("display", "flex")
        .hide()
        .delay(4000)
        .fadeIn(600);
      $("#help1")
        .delay(2000)
        .fadeIn(600)
        .delay(8000)
        .fadeOut(600);
      $("#btnModelsSelect1")
        .delay(4000)
        .fadeIn(600);
      $("#btnModelsSelect2")
        .delay(4000)
        .fadeIn(600);
      $("#btnModelsSelect3")
        .delay(4000)
        .fadeIn(600);
      guiNotLoaded = false;
      $("#btnModelsSelect4")
        .delay(4000)
        .fadeIn(600);
    }
    guiNotLoaded = false;
  }
}
let showGUI1 = showGUI();
