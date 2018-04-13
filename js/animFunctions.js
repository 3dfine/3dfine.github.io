let cameraPos = function (_camera, _controls, cameraKeyTrck ) {
  let vectorCam = new THREE.Vector3( 0, 0, 1 );
  let axisY = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
  let axisX = new THREE.Vector3( 1, 0, 0 );
  vectorCam.applyAxisAngle( axisX, THREE.Math.degToRad( cameraKeyTrck.angelPlaneXZ ) ).normalize();
  vectorCam.applyAxisAngle( axisY, THREE.Math.degToRad( cameraKeyTrck.angelOz ) ).normalize();
  _camera.position.addVectors( cameraKeyTrck.camLookAt, vectorCam.multiplyScalar( cameraKeyTrck.distance ) );
  _controls.target.x = cameraKeyTrck.camLookAt.x;
  _controls.target.y = cameraKeyTrck.camLookAt.y;
  _controls.target.z = cameraKeyTrck.camLookAt.z;
  _controls.autoRotateSpeed = cameraKeyTrck.autoRotSpeed;
}
let globalCameraPos = function (cameraPosSetup ) {
  let vectorCam = new THREE.Vector3( 0, 0, 1 );
  let axisY = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
  let axisX = new THREE.Vector3( 1, 0, 0 );
  vectorCam.applyAxisAngle( axisX, THREE.Math.degToRad( cameraPosSetup.angelPlaneXZ ) ).normalize();
  vectorCam.applyAxisAngle( axisY, THREE.Math.degToRad( cameraPosSetup.angelOy ) ).normalize();
  camera.position.addVectors( cameraPosSetup.camLookAt, vectorCam.multiplyScalar( cameraPosSetup.distance ) );
  controls.target.x = cameraPosSetup.camLookAt.x;
  controls.target.y = cameraPosSetup.camLookAt.y;
  controls.target.z = cameraPosSetup.camLookAt.z;
  controls.autoRotateSpeed = cameraPosSetup.autoRotSpeed;
  // console.log(cameraPosGlobal);
}

let animateTemp = function ( objGroup, animKeyFrames, interpolation ) {
  if( VecKeyfrTrck1.play ) {  //если тру, начинаем анимацию
    if(frame1 == 0) {         //если входим в первый раз, в первый элемент массива ключей записываем текущее положение объекта
      frame1 = 1;
      animKeyFrames.x[0] = objGroup.position.x;
      animKeyFrames.y[0] = objGroup.position.y;
      animKeyFrames.z[0] = objGroup.position.z;
      globalTime = 0;
    }
    let sigma = 0;
    if( VecKeyfrTrck1.deltaTimes.length > frame1 ) {
        sigma = easeInQuint(globalTime / animKeyFrames.deltaTimes[frame1], interpolation);
        objGroup.position.x = animKeyFrames.x[0] + animKeyFrames.x[frame1] * sigma;
        objGroup.position.y = animKeyFrames.y[0] + animKeyFrames.y[frame1] * sigma;
        objGroup.position.z = animKeyFrames.z[0] + animKeyFrames.z[frame1] * sigma;
        globalTime += 1;
      }
    else {
        VecKeyfrTrck1.play = false;
        frame1 = 0;
      }
    console.log('frame=',frame1, 'T=',globalTime, sigma );
    if( globalTime > animKeyFrames.deltaTimes[frame1])
    {
      // console.log('i=', iq );
      animKeyFrames.x[0] += animKeyFrames.x[frame1];
      animKeyFrames.y[0] += animKeyFrames.y[frame1];
      animKeyFrames.z[0] += animKeyFrames.z[frame1];
      frame1++;
      globalTime = 0;
    }
  }
}
let CameraKeyTrckDefPos = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 60],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [0, 0],
  camLookAtx: [0, -164],
  camLookAty: [0, -80],
  camLookAtz: [0, 0],
  distance: [0, 4500],
  angelPlaneXZ: [0, -25],
  angelOy: [0, -40],
  autoRotSpeed: [-3]
};
let CameraKeyTrckFrontPos = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 40],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [0, 0],
  camLookAtx: [0, 0],
  camLookAty: [0, -100],
  camLookAtz: [0, 0],
  distance: [0, 4000],
  angelPlaneXZ: [0, 0],
  angelOy: [0, 0],
  autoRotSpeed: [-3]
};
let CameraKeyTrckAllPos = {
  playOn: false,
  loop: false,
  timeScale: 0.6,
  times:      [0, 50, 100, 150, 200, 250, 300, 350],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [60, 60, 60, 60,60,60,60,60],
  camLookAtx: [0, 0, 0, 0,0,0,0,-164],
  camLookAty: [0, -100, -100, -100, -100, +50, -100, -80],
  camLookAtz: [0, 0, 0, 0, 0, 0, 0, 0],
  distance: [0, 4000, 4500, 4000, 4000, 4000, 4000, 4500],
  angelPlaneXZ: [0, 0, 0,  40, -40, 0, 0, -25],
  angelOy:      [0, 0, -90, 0,  0, 90, 180, 320],
  autoRotSpeed: [-3]
};
let CameraKeyTrck1 = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [120, 120, 120, 120, 120, 120, 120, 120,120, 120, 120, 120, 120],
  camLookAtx:   [0, -1186, -1238, -444, -339,   -128,  241,   847,  869, 777,    -689, -711,     0],
  camLookAty:   [0, 474,    524,   648,   398,    507,  586,  632,  611, 345,    -745, -1122,   -100],
  camLookAtz:   [0, -141,   95,    72,    113,     182,  138, 15,   81,  138,    54,   241,      0],
  distance:     [0, 1426,   1433,  807,   807,    1120, 1433, 908, 1070,908,      871,  605,    4000],
  angelPlaneXZ: [0, 0,      0,      0,     0,      0,   -39,  -36,    0,   0,    -36, 45,        0],
  angelOy:      [0, -41,    50,    -22,   -22,     0,    10,  -7,   49,  37,     37,  10,        0],
  autoRotSpeed: [-3]
};
function animateCamera() {
  let currentKey = 0;
  let localTime = 0;
  let cameraPosSetup = { camLookAt: new THREE.Vector3( 0, 0, 0 ), distance: 0, angelPlaneXZ: 0, angelOy: 0, autoRotSpeed: 0 };
  return function(keyTrack) {
    if(!keyTrack.playOn) {
      currentKey = 0;
      localTime = 0;
      return;
    }
    if(keyTrack.playOn) {
      // controls.autoRotate = false;
      //если входим в первый раз, записываем в нулевой индекс текущее положение камеры, для плавного перехода
      if((currentKey == 0) && (localTime == 0)) {
        console.log('%cAnim begin...', 'color: green;');
        let vectorCam = new THREE.Vector3( 0, 0, 0 );
        let axisY = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
        let axisX = new THREE.Vector3( 1, 0, 0 );
        keyTrack.camLookAtx[0] = controls.target.x;
        keyTrack.camLookAty[0] = controls.target.y;
        keyTrack.camLookAtz[0] = controls.target.z;
        keyTrack.distance[0] = camera.position.distanceTo(controls.target);
        vectorCam.subVectors(camera.position, controls.target);
        keyTrack.angelPlaneXZ[0] = THREE.Math.radToDeg(vectorCam.angleTo(axisY)) - 90;
        vectorCam.y = 0;
        keyTrack.angelOy[0] = 90 - THREE.Math.radToDeg(vectorCam.angleTo(axisX));
        keyTrack.autoRotSpeed[0] = controls.autoRotateSpeed;
      }
      let deltaT = (keyTrack.times[currentKey + 1] - keyTrack.times[currentKey]) * keyTrack.timeScale;
      if(localTime < deltaT + 1) {
        let sigma;
        if(deltaT > 0) {
          sigma = easeOutCubic(localTime / deltaT);
        } else {
          console.log('Некорректное deltaT в animateCamera()');
          sigma = 1;
        }
        cameraPosSetup.camLookAt.x = keyTrack.camLookAtx[currentKey] + (keyTrack.camLookAtx[currentKey + 1] - keyTrack.camLookAtx[currentKey]) * sigma;
        cameraPosSetup.camLookAt.y = keyTrack.camLookAty[currentKey] + (keyTrack.camLookAty[currentKey + 1] - keyTrack.camLookAty[currentKey]) * sigma;
        cameraPosSetup.camLookAt.z = keyTrack.camLookAtz[currentKey] + (keyTrack.camLookAtz[currentKey + 1] - keyTrack.camLookAtz[currentKey]) * sigma;
        cameraPosSetup.distance = keyTrack.distance[currentKey] + (keyTrack.distance[currentKey + 1] - keyTrack.distance[currentKey]) * sigma;
        cameraPosSetup.angelOy = keyTrack.angelOy[currentKey] + (keyTrack.angelOy[currentKey + 1] - keyTrack.angelOy[currentKey]) * sigma;
        cameraPosSetup.angelPlaneXZ = keyTrack.angelPlaneXZ[currentKey] + (keyTrack.angelPlaneXZ[currentKey + 1] - keyTrack.angelPlaneXZ[currentKey]) * sigma;
        cameraPosSetup.autoRotSpeed = keyTrack.autoRotSpeed[0];
        globalCameraPos( cameraPosSetup );
      }
      localTime++;
      if(localTime > deltaT + keyTrack.pause[currentKey] ) {
        localTime = 0;
        currentKey++;
        if(currentKey > keyTrack.times.length - 2) {
          if(!keyTrack.loop) {
            keyTrack.playOn = false;
            console.log('%c...anim complete', 'color: red;');
            // console.log(CameraKeyTrck.playOn);
          }
          currentKey = 0;
        }
      }
    }
  }
}
let CameraKeyTrck = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 40],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [0, 0],
  camLookAtx: [0, -164],
  camLookAty: [0, -80],
  camLookAtz: [0, 0],
  distance: [0, 4500],
  angelPlaneXZ: [0, -25],
  angelOy: [0, -40],
  autoRotSpeed: [3]
};
//-------------------------------Расчёт и вывод параметров камеры-----------------------------
function showCameraParam() {
  let vectorCam = new THREE.Vector3( 0, 0, 0 );
  let axisY = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
  let axisX = new THREE.Vector3( 1, 0, 0 );
  let camLookAtx = controls.target.x;
  let camLookAty = controls.target.y;
  let camLookAtz = controls.target.z;
  let distance = camera.position.distanceTo(controls.target);
  vectorCam.subVectors(camera.position, controls.target);
  let angelPlaneXZ = THREE.Math.radToDeg(vectorCam.angleTo(axisY)) - 90;
  vectorCam.y = 0;
  let angelOy = 90 - THREE.Math.radToDeg(vectorCam.angleTo(axisX));

  console.log( 'x=%d y=%d z=%d', controls.target.x, controls.target.y, controls.target.z);
  console.log( 'dist=%d', distance);
  console.log( 'angelPlaneXZ=%d', angelPlaneXZ);
  console.log( 'angelOy=%d', angelOy);
  console.log( '----------------------------');
}
btnTemp.addEventListener( "click" , showCameraParam );
