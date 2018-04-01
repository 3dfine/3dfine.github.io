let animateTemp = function ( objGroup, animKeyFrames, interpolation ) {
  if( VecKeyfrTrck1.play ) {
    if(frame1 == 0) {
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
};

let cameraPos = function ( targetVec3, camDistance, camAngelOxz ) {
  let vectorCam = new THREE.Vector3( 0, 0, 0 );
  let axis = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
  let axisDop = new THREE.Vector3( 0, 0, 0 ); //вектор ортогональный вектору-вверх (ось Y) и радиус-вектору
  vectorCam.subVectors( camera.position, targetVec3 ).normalize(); //вектор от камеры до таргета - радиус-вектор
  axisDop.crossVectors( vectorCam, axis ).normalize();
  vectorCam.applyAxisAngle( axisDop, THREE.Math.degToRad( camAngelOxz ) ).multiplyScalar( camDistance );
  camera.position.addVectors( targetVec3, vectorCam );
  controls.target = targetVec3;
};
