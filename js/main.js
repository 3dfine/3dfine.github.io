//Add models in scene
stoikiGroup.position.x = 2600;
// scene.add( stoikiGroup );
//


scene.add( ustanovka );

scene.add(potok1);

// получаем ссылки на элементы DOM
var param1Element = document.getElementById("param1");
// создаём текстовые узлы, чтобы сэкономить немного браузерного времени
var param1Node = document.createTextNode("");
// добавляем текстовые узлы в нужные места
param1Element.appendChild(param1Node);
// задаём значения узлов
param1Node.nodeValue = '3dfine@mail.ru';   // 2 десятичных знака


let block = document.getElementById("block_resize"); // Получаем основной блок
function setGold() {
  if(CameraKeyTrck.loop && CameraKeyTrck.playOn) {
    CameraKeyTrck.playOn = false;
  }
  else {
    CameraKeyTrck = CameraKeyTrckAllPos;
    CameraKeyTrck.playOn = true;
  }
}
function setSteel() {
  if(!potok1.visible) {
    rama.children[0].children[1].visible = !rama.children[0].children[1].visible;
    rama.children[0].children[0].visible = !rama.children[0].children[0].visible;
    barashki.children[0].visible = !barashki.children[0].visible;
  }
  if(!rama.children[0].children[1].visible) {
    CameraKeyTrck = CameraKeyTrck1;
    CameraKeyTrck.playOn = true;
  }
  // materials[0] = matAluminuim;
  // materials2[0] = matAluminuim;
}
function setRotate() {
  controls.autoRotate = !controls.autoRotate;
  if(controls.autoRotate) {
      // textblock1.style.display = 'block';
      // $("#textblock1").text( $("#text11").eq(0).text() );
      $("#textblock1").html( $("#text11").eq(0).html() );
      $("#textblock1").fadeIn(500);
  }
  else {
      // textblock1.style.display = 'none';
      $("#textblock1").fadeOut(500);
  }
}
function setCamera() {
  CameraKeyTrck = CameraKeyTrckDefPos;
  CameraKeyTrck.playOn = true;
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

//----------------------------------------------------------
// создаём треки ключей анимации
// позиция
// let positionKF = new THREE.VectorKeyframeTrack( '.position', [ 0, 1, 2 ], [ 0, 0, 0, 300, 0, 0, 0, 0, 0 ] );
// // вращение
// let qAxis = new THREE.Vector3( 1, 0, 0 );
// let qA = new THREE.Quaternion().setFromAxisAngle( qAxis, 0 );
// let qB = new THREE.Quaternion().setFromAxisAngle( qAxis, Math.PI  );
// let qC = new THREE.Quaternion().setFromAxisAngle( qAxis, -Math.PI  );
// let quaternionKF = new THREE.QuaternionKeyframeTrack(
//   '.quaternion',
//   [ 0, 0.7, 0.701, 1.4 ],
//   [ qA.x, qA.y, qA.z, qA.w,  qB.x, qB.y, qB.z, qB.w,  qC.x, qC.y, qC.z, qC.w,  qA.x, qA.y, qA.z, qA.w ]
//   );
// // из треков ключей анимации создаем клип
// let clip = new THREE.AnimationClip( 'Action', 1.4, [  quaternionKF ] );
// // применяем анимационную группу к микшеру в качестве корневого объекта
// let mixer = new THREE.AnimationMixer( animGrpLopasti );
// let clipAction = mixer.clipAction( clip );
// clipAction.play();
// clipAction.paused = true;
//----------------------------------------------------------
function compareName(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
function moveObject() {
  CameraKeyTrck = CameraKeyTrckFrontPos;
  CameraKeyTrck.playOn = true;
  setTimeout(holodUstMode_1, 700);
  // holodUstMode_1();
}
// timeElement.onclick = changeMaterial;

btnbrony.addEventListener( "click" , setSteel );
btnhide.addEventListener( "click" , setGold );
rotateObj.addEventListener( "click" , setRotate );
btnPlay.addEventListener( "click" , moveObject );
btnfullscrn.addEventListener( "click" , toggleFullScreen );
cameraReset.addEventListener( "click" , setCamera );
btnTemp.addEventListener( "click" , showCameraParam );
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);
// overlayStl.style.left = 100 + 'px';

var matLine = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1 } );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -100, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 100, 0, 0) );
// geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
var line = new THREE.Line( geometry, matLine );
scene.add( line );
