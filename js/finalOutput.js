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

let animate = function () {
  requestAnimationFrame( animate );
  // console.log('T=', globalTime );

  // sx_19_vert.rotateY( -0.002 );
  // sx_32_vert.rotation.y -= 0.002;
  // sx_43.rotation.y -= 0.002;
  // sx_32.rotation.y -= 0.002;
  // camera.position.z += 1.0;

  animateTemp(sx_19_vert, VecKeyfrTrck1, 6); //анимация

  controls.update();
  renderer.render( scene, camera );
  // globalTime += 1;
};
animate();
