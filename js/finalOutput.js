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
window.onload = function () {
  matHolodSetup();
  btnPlay.style.display='block';
  btnfullscrn.style.display='block';
  rotateObj.style.display='block';
  cameraReset.style.display='block';
}

let animateCamera1 = animateCamera();
let clock = new THREE.Clock();
let tick = 0;
let animate = function () {
  requestAnimationFrame( animate );
  tick += 0.075;
  // animateTemp(sx_19_vert, VecKeyfrTrck1, 6); //анимация

  if(vent_nasos_ventil2.rotSpeed !=0 ) {
    vent_nasos_ventil.rotation.z += vent_nasos_ventil.rotSpeed;
    vent_nasos_ventil2.rotation.z += vent_nasos_ventil2.rotSpeed;

    ventilatorOutSide_lopasti.children[0].children[0].rotation.x += 0.1;
    ventilatorOutSide_lopasti.children[0].children[1].rotation.x += 0.12;
    ventilatorOutSide_lopasti.children[0].children[2].rotation.x -= 0.11;
    ventilatorOutSide_lopasti.children[0].children[3].rotation.x -= 0.13;

    if(potok1.visible) {
      for(let i=0; i<potok1.children[0].children.length; i++) {
        potok1.children[0].children[i].scale.y = potok1.children[0].children[i].scale.z = 1.0 - 0.99 * (Math.sin(i/5 - tick) + 1.0);
      }
    }
  }

  if( globalLoad > 35 ) {
    blockLoad.style.display='none';
    animateCamera1(CameraKeyTrck1);
    animateCamera1(CameraKeyTrckDefPos);
    animateCamera1(CameraKeyTrckFrontPos);     
    controls.update();
    renderer.render( scene, camera );
  }
  else {
    // console.log( globalLoad );
    blockLoadProgress.style.width = 31 * globalLoad / 36 + 'vmax';
  }

  // console.log("x=%.2d y=%.2d z=%.2d", controls.target.x, controls.target.y, controls.target.z,);
};
animate();
