let urlHash = window.location.hash.substring(1);
let urlSearch = window.location.search.substring(1);
// console.log('urlHash# =', urlHash);
// console.log('urlSearch? =', urlSearch);

scene.add( ustanovka );
scene.add( potok1 );
scene.add( potok2 );

function compareName(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function setCamera() {
  // rama.children[0].children[0].material = matUstRama;
  startCameraAnim(CameraKeyTrckDefPos);
}
btnRotateCamera.style.opacity = 1.0;
function toggleRotate() {
  controls.autoRotate = !controls.autoRotate;
  if(controls.autoRotate) {
    btnRotateCamera.style.opacity = 1.0;
  } else {
    //убираем свойство 'opacity' кнопки, чтобы востановить возможность изменения прозрачности при наведене мыши
    btnRotateCamera.style.removeProperty( 'opacity');
  }
}
function onCameraRotate() {
  controls.autoRotate = true;
  btnRotateCamera.style.opacity = 1.0;
}
function offCameraRotate() {
  controls.autoRotate = false;
  //убираем свойство 'opacity' кнопки, чтобы востановить возможность изменения прозрачности при наведене мыши
  btnRotateCamera.style.removeProperty( 'opacity');
}
function stopCameraAnim() {
  selectedObjectMode = false;
  replaceMaterial3DObj(ustanovka, false, matGhost);
  rama.children[0].visible = true;
  rama.children[0].children[0].visible = true;
  rama.children[0].children[1].visible = false;
  barashki.children[0].visible = false;
  krisha.children[0].visible = true;

  offCameraRotate();
  $("#textblock1").hide().empty();
  CameraKeyTrck.playOn = false;
  console.log('Anim stop');
  plyRed.style.display = "none";
  potok1.visible = false;
  potok2.visible = false;

  $("#help1")
    .hide();
  setCursorGrab();
}

function startCameraAnim(keyFrTrack) {
  if(!CameraKeyTrck.playOn) {
    // $(keyTrack.divID).hide().empty();
    offCameraRotate();
    CameraKeyTrck = keyFrTrack;
    CameraKeyTrck.playOn = true;
    return true;
    }
}
//функция заменяет материалы группы 3д объектов при 'replaceReset == true' на materailReplace
//при 'replaceReset == false' сбрасываеи маиериалы на дефолтные
function replaceMaterial3DObj(group3DObj, replaceReset, materailReplace) {
  for( let i = 0; i < group3DObj.children.length; i++ ) {
    if( group3DObj.children[0].children.length == 1 ) {
      if(replaceReset) {
        group3DObj.children[0].children[0].material = materailReplace;
      } else {
        group3DObj.children[0].children[0].material = group3DObj.children[0].children[0].materialDefult;
      }
      // return ;
    }
    if( group3DObj.children[i].children.length == 1 ) {
      for( let ii = 0; ii < group3DObj.children[i].children[0].children.length; ii++ ) {
        if(replaceReset) {
          group3DObj.children[i].children[0].children[ii].material = materailReplace;
        } else {
          group3DObj.children[i].children[0].children[ii].material = group3DObj.children[i].children[0].children[ii].materialDefult;
        }
      }
    } else {
      for( let ii = 0; ii < group3DObj.children[i].children.length; ii++ ) {
        for( let iii = 0; iii < group3DObj.children[i].children[ii].children[0].children.length; iii++ ) {
          if(replaceReset) {
            group3DObj.children[i].children[ii].children[0].children[iii].material = materailReplace;
          } else {
            group3DObj.children[i].children[ii].children[0].children[iii].material = group3DObj.children[i].children[ii].children[0].children[iii].materialDefult;
          }
        }
      }
    }
  }
}
let selectedObjectMode = false;
function selectObject() {
  selectedObjectMode = !selectedObjectMode;
  if( selectedObjectMode ) {
    rama.children[0].children[1].visible = false;
    barashki.children[0].visible = false;
    // krisha.children[0].visible = false;
    btnSelectObject.style.opacity = 1.0;
    replaceMaterial3DObj(ustanovka, true, matGhost);
  } else {
    replaceMaterial3DObj(ustanovka, false, matGhost);
    // rama.children[0].visible = true;
    // krisha.children[0].visible = true;
    btnSelectObject.style.removeProperty( 'opacity');
    setCursorGrab();
  }
}
function showGeneralInfo() {
  if( startCameraAnim( CameraKeyTrckAllPos ) ) {
    selectedObjectMode = false;
    replaceMaterial3DObj(ustanovka, false, matGhost);
    //показ красного треуголька - ознаачет, что воспроизводится анимация
    // let coord = btnShow1LevellInfo.getBoundingClientRect();
    // plyRed.style.left = ( coord.x + 1 * coord.width / 2 ) + "px";
    // plyRed.style.top = ( coord.y + 0 * coord.height / 2 ) + "px";
    plyRed.style.display = "block";

    if(!potok1.visible) { //если показывается режим работы - поток виден, материал рамы не меняем
      rama.children[0].children[0].material = matUstRama;
    }
  }
}
function showDetailInfo() {
  if( startCameraAnim( CameraKeyTrck1 ) ) {
    selectedObjectMode = false;
    replaceMaterial3DObj(ustanovka, false, matGhost);
    //показ красного треуголька - ознаачет, что воспроизводится анимация
    // let coord = btnShow2LevellInfo.getBoundingClientRect();
    // plyRed.style.left = ( coord.x + 1 * coord.width / 2 ) + "px";
    // plyRed.style.top = ( coord.y + 0 * coord.height / 2 ) + "px";
    plyRed.style.display = "block";

    barashki.children[0].visible = false;
    rama.children[0].children[0].material = matGhost;
    rama.children[0].children[1].visible = false;
    vent_nasos_ventil.rotSpeed = 0.1;
    vent_nasos_ventil2.rotSpeed = 0.1;
  }
}
function showHowItWork() {
  potok2.visible = false;
  offCameraRotate();
  startCameraAnim(CameraKeyTrckFrontPos);
  setTimeout(holodUst1Mode_1, 400);
  // holodUstMode_1();
}
function showHowItWork2() {
  potok1.visible = false;
  offCameraRotate();
  startCameraAnim(CameraKeyTrckFrontPos);
  setTimeout(holodUst1Mode_2, 400);
  // holodUstMode_1();
}
function showHideBronya() {
  // rama.children[0].children[0].material = matUstRama;
  rama.children[0].children[1].visible = !rama.children[0].children[1].visible;
  if( rama.children[0].children[1].visible ) {
    barashki.children[0].visible = true;
  }
  else {
    barashki.children[0].visible = false;
  }
}
function showHolodUst() {
  profil_rehau.visible = false;
  stoikiGroup.visible = false;
  ustanovka.visible = true;
  setCamera();
  $("#controlPanel").css("display", "flex")
    .hide()
    .fadeIn(100);
  controlColor.style.display='none';
  controls.maxPolarAngle = Math.PI * 0.75;

}
function showStoiki() {
  if(!stoikiGroup.onLoaded) {
    stopCameraAnim();
    setCamera();
    onCameraRotate();
  } else {
      stopCameraAnim();
      setCamera();
      offCameraRotate();
    }
  loadStoiki();
  profil_rehau.visible = false;
  ustanovka.visible = false;
  potok1.visible = false;
  potok2.visible = false;
  controlPanel.style.display='none';
  controlColor.style.display='none';
  controls.maxPolarAngle = Math.PI * 0.5;
  stoikiGroup.visible = true;
}
function showProfilRehau() {
  if(!profil_rehau.onLoaded) {
    stopCameraAnim();
    setCamera();
    onCameraRotate();
  } else {
      stopCameraAnim();
      setCamera();
      offCameraRotate();
    }
  loadProfil();
  stoikiGroup.visible = false;
  ustanovka.visible = false;
  potok1.visible = false;
  potok2.visible = false;
  $("#controlColor").css("display", "flex")
    .hide()
    .fadeIn(100);
  controlPanel.style.display='none';
  controls.maxPolarAngle = Math.PI * 0.9;
  profil_rehau.visible = true;
  // stopCameraAnim();
  setCamera();
}
btnSelectObject.addEventListener( "click" , selectObject );
btnShow2LevellInfo.addEventListener( "click" , showDetailInfo );
btnShow1LevellInfo.addEventListener( "click" , showGeneralInfo );
btnShowHideBronya.addEventListener( "click" , showHideBronya );
btnRotateCamera.addEventListener( "click" , toggleRotate );
btnShowHowItWork.addEventListener( "click" , showHowItWork );
btnShowHowItWork2.addEventListener( "click" , showHowItWork2 );
btnResetCemera.addEventListener( "click" , setCamera );
btnStopAnim.addEventListener( "click" , stopCameraAnim );
//во весь экран
btnFullscrn.addEventListener( "click" , toggleFullScreen );
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);
btnModelsSelect1.addEventListener( "click" , showHolodUst );
btnModelsSelect2.addEventListener( "click" , showProfilRehau );
btnModelsSelect3.addEventListener( "click" , showStoiki );

btnColor1.addEventListener( "click" , profilColor1 );
btnColor2.addEventListener( "click" , profilColor2 );
btnColor3.addEventListener( "click" , profilColor3 );
function showWebGLInfo() {
  $("#WebGLInfo")
    .hide()
    .fadeIn(600)
    .delay(7000)
    .fadeOut(300);
}
header1.addEventListener( "click" , showWebGLInfo );
// overlayStl.style.left = 100 + 'px';

//Add models in scene
// SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float);
// let geometry24 = new THREE.SphereGeometry( 500, 32, 32 );
// let sphereG = new THREE.Mesh( geometry24, matSteelClear );
// scene.add(sphereG);

// var matLine = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1 } );
// var geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3( -100, 0, 0) );
// geometry.vertices.push(new THREE.Vector3( 100, 0, 0) );
// // geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
// var line = new THREE.Line( geometry, matLine );
// scene.add( line );

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
