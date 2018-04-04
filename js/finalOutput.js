

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize( event ) {
  width = window.innerWidth - 20;
height =  window.innerHeight - 20;
  aspect = width/height;
  renderer.setSize( width, height );
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  controls.rotateSpeed = width / 1920;
}

let animateCamera1 = animateCamera(camera, controls);

let animate = function () {
  requestAnimationFrame( animate );

	let delta = clock.getDelta();
	if ( mixer && !clipAction.paused) {
		mixer.update( delta * 1 );
    // console.log(clipAction.paused);
    if(clipAction.time > clipAction._clip.duration - 1) {
       clipAction.paused = true;
       clipAction.stop();
       // console.log(clipAction.time);
    }
	}
    console.log(clipAction.paused);

  // console.log(clipAction.time);
  // animateTemp(sx_19_vert, VecKeyfrTrck1, 6); //анимация

  // animateCamera1(CameraKeyTrck1);

  ustanovka.children[0].children[1].rotation.z += 0.02;
  ustanovka.children[1].children[1].rotation.z += 0.02;

  controls.update();
  renderer.render( scene, camera );
  // globalTime += 1;
};
animate();
