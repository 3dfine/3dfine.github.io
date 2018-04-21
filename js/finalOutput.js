window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize( event ) {
  width = window.innerWidth - 00;
  height =  window.innerHeight - 00;
  aspect = width/height;
  renderer.setSize( width, height );
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  controls.rotateSpeed = width / 1920;
}

//---------------------Выбор объектов-------------------
let mouseDownState = true;  //если нажата кнопка выбора объекта не происходит
renderer.domElement.addEventListener( 'mousedown', function () {mouseDownState = false;}, false );
renderer.domElement.addEventListener( 'mouseup', function () {mouseDownState = true;}, false );
let selectedObject = {
  object: new THREE.Object3D( ),
  material: new THREE.MeshPhongMaterial(),
}
let raycaster = new THREE.Raycaster();
function onDocumentMouseMove( event ) {
  if(selectedObjectMode) {
    let mouse = new THREE.Vector2();
  	let intersects;
  	event.preventDefault();
  	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  	raycaster.setFromCamera( mouse, camera );
    intersects = raycaster.intersectObjects( [ ustanovka ], true );
    if( ( intersects.length > 0 ) && intersects[ 0 ].object.description ) {
        document.body.style.cursor = 'pointer';
        // if(intersects[ 0 ].object.description) {
          $('#descriptionblock').fadeIn(200);
          $('#descriptionblock').text( intersects[ 0 ].object.description );
        // }
      // if( ( intersects[ 0 ].object.material == matGhost ) && ( intersects[ 0 ].object.selectYes ) ) {
      if(  intersects[ 0 ].object.material == matGhost ) {
        selectedObject.object.material = matGhost;
        selectedObject.object = intersects[ 0 ].object;
        intersects[ 0 ].object.material = intersects[ 0 ].object.materialDefult;
      }
    } else {
      if( intersects ) {
        $('#descriptionblock').hide().empty();
        selectedObject.object.material = matGhost;
        setCursorGrab();
        intersects = null;
      }
    }
  }
}
renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
//------------------------------------------------------------

window.onload = function () {
  matHolodSetup();
  matStoikiSetup();
  startCameraAnim(CameraKeyTrckDefPos);
  onCameraRotate();
  $("#controlPanel").css("display", "flex")
    .hide()
    .delay(4000)
    .fadeIn(600);
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
}

let animateCamera1 = animateCamera();
// let clock = new THREE.Clock();
let tick = 0;
let CameraKeyTrck = { playOn: false };
let animate = function () {
  requestAnimationFrame( animate );
  tick += 0.075;
  //здесь выполняется после загрузки 3д моделей
  if( globalLoad > 32 ) {
    blockLoad.style.display='none';
    animateCamera1( CameraKeyTrck );
    animHolodUst1(tick);
    controls.update();
    renderer.render( scene, camera );
  }
  // else {
  //   // blockLoadProgress.style.width = 50 * ( globalLoad + 0.9 ) / 36 + 'vmax';
  //   console.log(globalLoad);
  // }
};
animate();
