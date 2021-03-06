window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize( event ) {
  width = window.innerWidth - 00;
  height =  window.innerHeight - 00;
  widthHalf = width / 2;
  heightHalf = height / 2;
  aspect = width/height;
  renderer.setSize( width, height );
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  if(height > width) {
    controls.rotateSpeed = height / 1920;
    camera.zoom = width / height;
  } else {
    controls.rotateSpeed = width / 1920;
    camera.zoom = 1.0;
  }
  camera.updateProjectionMatrix();
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
      if( ( intersects[ 0 ].object.material == matGhost ) && ( intersects[ 0 ].object.description ) ) {
      // if(  intersects[ 0 ].object.material == matGhost ) {
        $('#descriptionblock').fadeIn(600);
        $('#descriptionblock').text( intersects[ 0 ].object.description );
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
if( urlHash === '2' ) showHolodUst();
if( ( urlHash === '1' ) || ( !urlHash ) ) showUsadba();
if( urlHash === '3' ) showProfilRehau();
if( urlHash === '4' ) showStoiki();

let windLoaded = false;
window.onload = function () {
  startCameraAnim(CameraKeyTrckDefPos);
  onCameraRotate();
  showGUI();
  windLoaded = true;

  fetch('/json/data1.json')
    .then(function(response) {
      return response.json();
     })
    .then(function(data) {
      header3.innerHTML = data[0].name;
    });
}

let animate = function () {
  requestAnimationFrame( animate );
  tick += 0.075;
  //здесь выполняется после загрузки 3д моделей
  if( globalToTuLoaded ) {
    showUsadbaDescr();
    showGUI1();
    animateCamera1( CameraKeyTrck );
    animHolodUst1( tick );
    controls.update();
    renderer.render( scene, camera );
  }
};
animate();
