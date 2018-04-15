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

let CameraKeyTrckDefPos = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 60],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [0, 0],
  camLookAtx: [0, -25], //-25
  camLookAty: [0, -80], //-80
  camLookAtz: [0, 0],
  distance: [0, 4500],
  angelPlaneXZ: [0, -20],
  angelOy: [0, 320],
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
//ключи анимации показа общей информации
let CameraKeyTrckAllPos = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 50, 100, 150, 200, 250, 300, 350],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [240, 240, 240, 240,240,240,240,240],
  camLookAtx: [0, 0, 0, 0,0,0,0,-25],
  camLookAty: [0, -100, -100, -200, -100, +50, -100, -80],
  camLookAtz: [0, 0, 0, 0, 0, 0, 0, 0],
  distance: [0, 4000, 4500, 4000, 4000, 4000, 4000, 4500],
  angelPlaneXZ: [0, 0, 0,  40, -40, 0, 0, -20],
  angelOy:      [0, 0, -90, 0,  0, 90, 180, 320],
  divID: '#textblock1',  //ID блока, куда выводится информация
  divColor: "#BF360C",
  divFontSize: "1.7vmax",
  divLeft:[45, 6, 45, 45, 58, 15, 50],
  divTop:[55, 55, 60, 60, 60, 55, 60],
  textIDResource: [ "#ust1_1LevellInfo1",
                    "#ust1_1LevellInfo2",
                    "#ust1_1LevellInfo3",
                    "#ust1_1LevellInfo4",
                    "#ust1_1LevellInfo5",
                    "#ust1_1LevellInfo6",
                    "#ust1_1LevellInfo7"],
  autoRotSpeed: [-3]
};
//ключи анимации показа компонентов
let CameraKeyTrck1 = {
  playOn: false,
  loop: false,
  timeScale: 1,
  times:      [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
  // deltaTimes: [20, 20, 20, 20, 20, 20, 20],
  pause: [240, 240, 240, 240, 240, 240, 240, 240,240, 240, 240, 0, 0, 0],
  camLookAtx:   [0, -1186, -1238, -444, -339,   -128,  241,   847,  869, 777,    -689, -711,     0],
  camLookAty:   [0, 474,    524,   648,   398,    507,  586,  632,  611, 345,    -745, -1122,   -100],
  camLookAtz:   [0, -141,   95,    72,    113,     182,  138, 15,   81,  138,    54,   241,      0],
  distance:     [0, 1426,   1433,  807,   807,    1120, 1433, 908, 1070,908,      871,  605,    4000],
  angelPlaneXZ: [0, 0,      0,      0,     0,      0,   -39,  0,    0,   0,    -36, 45,        0],
  angelOy:      [0, -41,    50,    -22,   -22,     0,    10,  -7,   49,  37,     37,  10,        0],
  autoRotSpeed: [-3],
  divID: '#textblock1',  //ID блока, куда выводится информация
  divColor: "#6A1B9A",
  divFontSize: "2.5vmax",
  divLeft:[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  divTop:[30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
  textIDResource: [ "#ust1_component1",
                    "#ust1_component3",
                    "#ust1_component4",
                    "#ust1_component5",
                    "#ust1_component6",
                    "#ust1_component7",
                    "#ust1_component8",
                    "#ust1_component9",
                    "#ust1_component10",
                    "#ust1_component11",
                    "#ust1_component12"  ]

};
//------------------------------------------Расчёт параметров камеры---------------------
function calcOYangel(vectorCamera) {
  let axisX = new THREE.Vector3( -1, 0, 0 );
  vectorCamera.y = 0;
  if( (vectorCamera.x > 0 ) && (vectorCamera.z > 0) ) {
    return THREE.Math.radToDeg(vectorCamera.angleTo(axisX)) - 90;
  }
  if( (vectorCamera.x > 0 ) && (vectorCamera.z < 0) ) {
    return 90 + 90 - (THREE.Math.radToDeg(vectorCamera.angleTo(axisX)) - 90);
  }
  if( (vectorCamera.x < 0 ) && (vectorCamera.z < 0) ) {
    return 180 - (THREE.Math.radToDeg(vectorCamera.angleTo(axisX)) - 90);
  }
  if( (vectorCamera.x < 0 ) && (vectorCamera.z > 0) ) {
    return 270 + 90 + (THREE.Math.radToDeg(vectorCamera.angleTo(axisX)) - 90);
  }
  return 0;
}
//------------------------------------------Функция анимации камеры-----------------------------------
function animateCamera() {
  let currentKey = 0;
  let localTime = 0;
  let cameraPosSetup = { camLookAt: new THREE.Vector3( 0, 0, 0 ), distance: 0, angelPlaneXZ: 0, angelOy: 0, autoRotSpeed: 0 };
  let deltaT = 0;
  let sigma;
  let delayShowText = 900;
  return function(keyTrack) {
    if(!keyTrack.playOn) {
      currentKey = 0;
      localTime = 0;
      if(keyTrack.divID) $(keyTrack.divID).hide().empty();
      plyRed.style.display = "none";
      return;
    }
    if(keyTrack.playOn) {
      // controls.autoRotate = false;
      //если входим в первый раз, записываем в нулевой индекс текущее положение камеры, для плавного перехода
      if((currentKey == 0) && (localTime == 0)) {
        console.log('%cAnim begin...', 'color: green;');
        let vectorCam = new THREE.Vector3( 0, 0, 0 );
        let axisY = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
        let axisZ = new THREE.Vector3( -1, 0, 0 );
        keyTrack.camLookAtx[0] = controls.target.x;
        keyTrack.camLookAty[0] = controls.target.y;
        keyTrack.camLookAtz[0] = controls.target.z;
        keyTrack.distance[0] = camera.position.distanceTo(controls.target);
        vectorCam.subVectors(camera.position, controls.target);
        keyTrack.angelPlaneXZ[0] = THREE.Math.radToDeg(vectorCam.angleTo(axisY)) - 90;
        keyTrack.angelOy[0] = calcOYangel(vectorCam);
        keyTrack.autoRotSpeed[0] = controls.autoRotateSpeed;
        //--Вывод текстовой информации в диве
        if(keyTrack.textIDResource != null ) {
          $(keyTrack.divID).hide().empty();          
          $(keyTrack.divID).css('top', function(index, value) {
          let newTop = keyTrack.divTop[ 0 ] + "%";
          return newTop;
          });
          $(keyTrack.divID).css('left', function(index, value) {
          let newTop = keyTrack.divLeft[ 0 ] + "%";
          return newTop;
          });
          $(keyTrack.divID).css('background-color', keyTrack.divColor);
          $(keyTrack.divID).css('font-size', keyTrack.divFontSize);
          $(keyTrack.divID).text( $( keyTrack.textIDResource[ currentKey ] ).text() );
          $(keyTrack.divID).delay(delayShowText).fadeIn(600).delay(keyTrack.pause[currentKey]*100/6 - delayShowText - 000).fadeOut(300);
        }

        deltaT = (keyTrack.times[currentKey + 1] - keyTrack.times[currentKey]) * keyTrack.timeScale;
      }
      // deltaT = (keyTrack.times[currentKey + 1] - keyTrack.times[currentKey]) * keyTrack.timeScale;
      if(localTime < deltaT + 1) {
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
        console.log(currentKey);
        $(keyTrack.divID).hide().empty();
        currentKey++;
        deltaT = (keyTrack.times[currentKey + 1] - keyTrack.times[currentKey]) * keyTrack.timeScale;
        //--Вывод текстовой информации в диве
        if(keyTrack.textIDResource != null ) {
          $(keyTrack.divID).css('top', function(index, value) {
            let newTop = keyTrack.divTop[ currentKey ] + "%";
            return newTop;
          });
          $(keyTrack.divID).css('left', function(index, value) {
            let newTop = keyTrack.divLeft[ currentKey ] + "%";
            return newTop;
          });
          $(keyTrack.divID).hide().empty();
          // $(keyTrack.divID).css('font-size', keyTrack.divFontSize);
          $(keyTrack.divID).html( $( keyTrack.textIDResource[ currentKey ] ).html() );
          $(keyTrack.divID).delay(delayShowText).fadeIn(600).delay(keyTrack.pause[currentKey] *100/6 - delayShowText - 000).fadeOut(300);
        }

        if(currentKey > keyTrack.times.length - 2) {
          if(!keyTrack.loop) {
            keyTrack.playOn = false;
            // if(keyTrack.divID) $(keyTrack.divID).hide().empty();
            // console.log('%c...anim complete', 'color: red;');
            // console.log(CameraKeyTrck.playOn);
          }
          currentKey = 0;
          console.log('%c...anim complete', 'color: red;');
          localTime = 0;
          if(keyTrack.divID) $(keyTrack.divID).hide().empty();
          plyRed.style.display = "none";
        }
      }
    }
  }
}

//-------------------------------Вывод параметров камеры-----------------------------
function showCameraParam() {
  let vectorCam = new THREE.Vector3( 0, 0, 0 );
  let axisY = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
  let axisZ = new THREE.Vector3( -1, 0, 0 );
  let angelOy = 0;
  let camLookAtx = controls.target.x;
  let camLookAty = controls.target.y;
  let camLookAtz = controls.target.z;
  let distance = camera.position.distanceTo(controls.target);
  vectorCam.subVectors(camera.position, controls.target);
  let angelPlaneXZ = THREE.Math.radToDeg(vectorCam.angleTo(axisY)) - 90;
  angelOy = calcOYangel(vectorCam);

  console.log( 'CamX=%d CamY=%d CamZ=%d', camera.position.x, camera.position.y, camera.position.z);
  console.log( 'TarX=%d TarY=%d TarZ=%d', controls.target.x, controls.target.y, controls.target.z);
  console.log( 'dist=%d', distance);
  console.log( 'angelPlaneXZ=%d', angelPlaneXZ);
  console.log( 'angelOy=%d', angelOy);
  console.log( '----------------------------');
}
btnTemp.addEventListener( "click" , showCameraParam );
