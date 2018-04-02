//Add models in scene
stoikiGroup.position.x = 2600;
// scene.add( stoikiGroup );

matUstVent[0] = matRAL7045;
matUstVent[1] = matPlastic;
matUstVent[2] = matRubber;
matUstVent[3] = matAluminuim;
matUstVent2[0] = matAluminuim;
matUstVent2[1] = matPlastic;
matUstVent2[2] = matSteelClear;
matUstVent2[3] = matRAL7045;
scene.add( ustanovka );

// получаем ссылки на элементы DOM
var eMailElement = document.getElementById("eMail");
// создаём текстовые узлы, чтобы сэкономить немного браузерного времени
var eMailNode = document.createTextNode("");
// добавляем текстовые узлы в нужные места
eMailElement.appendChild(eMailNode);
// задаём значения узлов
eMailNode.nodeValue = '3dfine@mail.ru';   // 2 десятичных знака

function setGold() {
  materials[0] = matGold;
  materials2[0] = matGold;
}
function setSteel() {
  materials[0] = matAluminuim;
  materials2[0] = matAluminuim;
}
function setRotate() {
  controls.autoRotate = !controls.autoRotate;
}
let globalTime = 0;
let frame1 = 0;
let VecKeyfrTrck1 = {
  duration: false,
  times: [0, 50, 100, 110, 200, 250, 300],
  // deltaTimes: [100, 20, 40, 60, 80, 100, 120],
  deltaTimes: [0, 40, 20, 40, 20],
  x: [0, 600, 0, -600, 0, -600, 600 , -600],
  // x: [0, 0, 0, 0, 0, 0 , 0],
  y: [0, 600, 0, -600, 0, -500, 500, -500],
  // y: [0, 0, 0, 0, 0, 0, 0],
  z: [0, 600, 0, -600, 0, -500, 500, -500],
};

function moveObject() {
  VecKeyfrTrck1.play = true;
}
// timeElement.onclick = changeMaterial;
var overlayStl = document.getElementById( "overlaySteel" );
overlayStl.addEventListener( "click" , setSteel );
overlayGold.addEventListener( "click" , setGold );
rotateObj.addEventListener( "click" , setRotate );
btnPlay.addEventListener( "click" , moveObject );
btnfullscrn.addEventListener( "click" , toggleFullScreen );
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);
// overlayStl.style.left = 100 + 'px';

var matLine = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1 } );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -1200, 0, 200) );
geometry.vertices.push(new THREE.Vector3( 600, 0, 200) );
// geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
var line = new THREE.Line( geometry, matLine );
scene.add( line );
