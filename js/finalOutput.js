window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize( event ) {
  width = window.innerWidth - 20;
  height =  window.innerHeight - 20;
  aspect = width/height;
  renderer.setSize( width, height );
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  controls.rotateSpeed = width / 1920;

  composer.setSize( width, height );
}

let animateCamera1 = animateCamera(camera, controls);
let clock = new THREE.Clock();
let animate = function () {
  requestAnimationFrame( animate );

  // console.log(clipAction.time);
  // animateTemp(sx_19_vert, VecKeyfrTrck1, 6); //анимация

  // animateCamera1(CameraKeyTrck1);
  if(vent_nasos_ventil2.rotSpeed !=0 ) {
    vent_nasos_ventil.rotation.z += vent_nasos_ventil.rotSpeed;
    vent_nasos_ventil2.rotation.z += vent_nasos_ventil2.rotSpeed;

    ventilatorOutSide_lopasti.children[0].children[0].rotation.x += 0.1;
    ventilatorOutSide_lopasti.children[0].children[1].rotation.x += 0.12;
    ventilatorOutSide_lopasti.children[0].children[2].rotation.x -= 0.11;
    ventilatorOutSide_lopasti.children[0].children[3].rotation.x -= 0.13;
  }

  controls.update();
  renderer.render( scene, camera );

  // globalTime += 1;
};
animate();
