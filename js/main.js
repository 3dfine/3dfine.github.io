//Add models in scene
// SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float);
// let geometry24 = new THREE.SphereGeometry( 500, 32, 32 );
// let sphereG = new THREE.Mesh( geometry24, matSteelClear );
// scene.add(sphereG);
let selectedObjectMode = false;

stoikiGroup.position.x = 2600;
// scene.add( stoikiGroup );

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

function selectObject() {
  selectedObjectMode = !selectedObjectMode;
  if(selectedObjectMode) {
    btnSelectObject.style.opacity = 1.0;
  } else {
    btnSelectObject.style.removeProperty( 'opacity');
  }
}
function showGeneralInfo() {
  rama.children[0].children[0].material = matUstRama;
  controls.autoRotate = false;
  startCameraAnim(CameraKeyTrckAllPos);

  $("#textblock1").html( $("#text11").eq(0).html() );
  $("#textblock1").fadeIn(500).delay(3000).fadeOut(500);
}
function showDetailInfo() {
  controls.autoRotate = false;
  barashki.children[0].visible = false;
  rama.children[0].children[0].material = matGhost;
  rama.children[0].children[1].visible = false;
  startCameraAnim(CameraKeyTrck1);
  // let textPlayList1 = [ "#ust1_component1",
  //                       "#ust1_component3",
  //                       "#ust1_component4",
  //                       "#ust1_component5",
  //                       "#ust1_component6",
  //                       "#ust1_component7",
  //                       "#ust1_component8",
  //                       "#ust1_component9",
  //                       "#ust1_component10",
  //                       "#ust1_component11",
  //                       "#ust1_component12"
  //
  // ];
  // let delayShowText = 1200;
 //  $("#ust1_component1").delay(delayShowText).delay(CameraKeyTrck.times[1]*100/6).fadeIn(600).delay(CameraKeyTrck.pause[2]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component3").delay(delayShowText).delay((CameraKeyTrck.times[2] + CameraKeyTrck.pause[2])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[3]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component4").delay(delayShowText).delay((CameraKeyTrck.times[3] + 2*CameraKeyTrck.pause[3])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[4]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component5").delay(delayShowText).delay((CameraKeyTrck.times[4] + 3*CameraKeyTrck.pause[4])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[5]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component6").delay(delayShowText).delay((CameraKeyTrck.times[5] + 4*CameraKeyTrck.pause[5])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[6]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component7").delay(delayShowText).delay((CameraKeyTrck.times[6] + 5*CameraKeyTrck.pause[6])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[7]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component8").delay(delayShowText).delay((CameraKeyTrck.times[7] + 6*CameraKeyTrck.pause[7])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[8]*100/6 - 600 - delayShowText).fadeOut(200);
 //  $("#ust1_component9").delay(delayShowText).delay((CameraKeyTrck.times[8] + 7*CameraKeyTrck.pause[8])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[9]*100/6 - 600 - delayShowText).fadeOut(200);
 // $("#ust1_component10").delay(delayShowText).delay((CameraKeyTrck.times[9] + 8*CameraKeyTrck.pause[9])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[10]*100/6 - 600 - delayShowText).fadeOut(200);
 // $("#ust1_component11").delay(delayShowText).delay((CameraKeyTrck.times[10] + 9*CameraKeyTrck.pause[10])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[11]*100/6 - 600 - delayShowText).fadeOut(200);
 // $("#ust1_component12").delay(delayShowText).delay((CameraKeyTrck.times[11] + 10*CameraKeyTrck.pause[11])*100/6).fadeIn(600).delay(CameraKeyTrck.pause[12]*100/6 - 600 - delayShowText).fadeOut(200);

  // materials[0] = matAluminuim;
  // materials2[0] = matAluminuim;
}
btnRotateCamera.style.opacity = 1.0;
function setRotate() {
  controls.autoRotate = !controls.autoRotate;
  if(controls.autoRotate) {
    btnRotateCamera.style.opacity = 1.0;
  } else {
    btnRotateCamera.style.removeProperty( 'opacity');
  }
}
function setCamera() {
  rama.children[0].children[0].material = matUstRama;
  startCameraAnim(CameraKeyTrckDefPos);
}
function startCameraAnim(keyFrTrack) {
  if(!CameraKeyTrck.playOn) {
    CameraKeyTrck = keyFrTrack;
    CameraKeyTrck.playOn = true;
  }
}
function stopCameraAnim() {
  if(CameraKeyTrck.playOn) {
    CameraKeyTrck.playOn = false;
    console.log('Anim stop');
  }
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
function showHowItWork() {

  startCameraAnim(CameraKeyTrckFrontPos);
  setTimeout(holodUstMode_1, 400);
  // holodUstMode_1();
}
function showHideBronya() {
  rama.children[0].children[1].visible = !rama.children[0].children[1].visible;
  barashki.children[0].visible = !barashki.children[0].visible;
}

btnSelectObject.addEventListener( "click" , selectObject );
btnShow2LevellInfo.addEventListener( "click" , showDetailInfo );
btnShow1LevellInfo.addEventListener( "click" , showGeneralInfo );
btnShowHideBronya.addEventListener( "click" , showHideBronya );
btnRotateCamera.addEventListener( "click" , setRotate );
btnShowHowItWork.addEventListener( "click" , showHowItWork );
btnResetCemera.addEventListener( "click" , setCamera );
btnStopAnim.addEventListener( "click" , stopCameraAnim );
//во весь экран
btnFullscrn.addEventListener( "click" , toggleFullScreen );
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
