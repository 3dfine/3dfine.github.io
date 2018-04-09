//Add models in scene
stoikiGroup.position.x = 2600;
// scene.add( stoikiGroup );
//


scene.add( ustanovka );

scene.add(potok1);

// получаем ссылки на элементы DOM
var eMailElement = document.getElementById("eMail");
// создаём текстовые узлы, чтобы сэкономить немного браузерного времени
var eMailNode = document.createTextNode("");
// добавляем текстовые узлы в нужные места
eMailElement.appendChild(eMailNode);
// задаём значения узлов
eMailNode.nodeValue = '3dfine@mail.ru';   // 2 десятичных знака


let block = document.getElementById("block_resize"); // Получаем основной блок
function setGold() {
  // materials[0] = matGold;
  // materials2[0] = matGold;
  block.style.width = 90 + 'px';
}
function setSteel() {
  materials[0] = matAluminuim;
  materials2[0] = matAluminuim;
}
function setRotate() {
  controls.autoRotate = !controls.autoRotate;
}
function setCamera() {
  cameraPos(camera, controls, cameraKeyTrck0);
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

  potok1.children[0].children.sort(compareName);
  rekuperatorKorp.children[0].children.sort(compareName);

  for(let i=0; i<diffuzorLopasti.children[0].children.length; i++) {
    diffuzorLopasti.children[0].children[i].rotation.x = THREE.Math.degToRad( 30 );;
  }

  for(let i=0; i<potok1.children[0].children.length; i++) {
    if(i < 81 )
      potok1.children[0].children[i].material = matPotokRed;
    if(i > 80 && i < 81 + 21 )
      potok1.children[0].children[i].material = matPotokPink;
    if(i > 101 && i < 101 + 26 )
      potok1.children[0].children[i].material = matPotokDarkBlue;
    if(i > 126 && i < 126 + 19 )
      potok1.children[0].children[i].material = matPotokBlue;
    if(i > 145 && i < 145 + 46 )
      potok1.children[0].children[i].material = matPotokPink;
    if(i > 190 )
      potok1.children[0].children[i].material = matPotokRed;
  }

  potok1.visible = !potok1.visible;
  rama.children[0].children[1].visible = !rama.children[0].children[1].visible;
  barashki.children[0].visible = !barashki.children[0].visible;
  if(rama.children[0].children[1].visible) {
      rama.children[0].children[0].material = matUstRama;
      filtrKorman1.children[0].children[0].material = matUstRama;
  }
  else {
      rama.children[0].children[0].material = matGhost;
      filtrKorman1.children[0].children[0].material = matGhost;
  }

  if(vent_nasos_ventil.rotSpeed == 0)
    vent_nasos_ventil.rotSpeed = 0.1;
    else
    vent_nasos_ventil.rotSpeed = 0;
  if(vent_nasos_ventil2.rotSpeed == 0)
    vent_nasos_ventil2.rotSpeed = 0.1;
    else
    vent_nasos_ventil2.rotSpeed = 0;

  for(let i=0; i<zaslonka2.children[0].children.length; i++) {
    if(zaslonka2.children[0].children[i].rotation.z == 0)
      zaslonka2.children[0].children[i].rotation.z = THREE.Math.degToRad( -90 );
      else
      zaslonka2.children[0].children[i].rotation.z = THREE.Math.degToRad( 0 );
  }
  for(let i=0; i<zaslonka1.children[0].children.length; i++) {
    if(zaslonka1.children[0].children[i].rotation.z == 0)
      zaslonka1.children[0].children[i].rotation.z = THREE.Math.degToRad( -90 );
      else
      zaslonka1.children[0].children[i].rotation.z = THREE.Math.degToRad( 0 );
  }
  // for(let i=0; i<rekuperatorZaslon1.children[0].children.length; i++) {
  //   if(rekuperatorZaslon1.children[0].children[i].rotation.x == 0)
  //     rekuperatorZaslon1.children[0].children[i].rotation.x = THREE.Math.degToRad( -90 );
  //     else
  //     rekuperatorZaslon1.children[0].children[i].rotation.x = THREE.Math.degToRad( 0 );
  // }
  // for(let i=0; i<rekuperatorZaslon2.children[0].children.length; i++) {
  //   if(rekuperatorZaslon2.children[0].children[i].rotation.x == 0)
  //     rekuperatorZaslon2.children[0].children[i].rotation.x = THREE.Math.degToRad( -90 );
  //     else
  //     rekuperatorZaslon2.children[0].children[i].rotation.x = THREE.Math.degToRad( 0 );
  // }
  for(let i=0; i<rekuperatorZaslon3.children[0].children.length; i++) {
    if(rekuperatorZaslon3.children[0].children[i].rotation.x == 0)
      rekuperatorZaslon3.children[0].children[i].rotation.x = THREE.Math.degToRad( -90 );
      else
      rekuperatorZaslon3.children[0].children[i].rotation.x = THREE.Math.degToRad( 0 );
  }
}
// timeElement.onclick = changeMaterial;
var overlayStl = document.getElementById( "overlaySteel" );
overlayStl.addEventListener( "click" , setSteel );
overlayGold.addEventListener( "click" , setGold );
rotateObj.addEventListener( "click" , setRotate );
btnPlay.addEventListener( "click" , moveObject );
btnfullscrn.addEventListener( "click" , toggleFullScreen );
cameraReset.addEventListener( "click" , setCamera );
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
