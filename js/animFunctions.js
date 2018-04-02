let cameraKeyTrck0 = {
  camLookAt: new THREE.Vector3( 20, 350, 0  ),  //точка, куда смотрит камера
  distance: 2200,   //дистация до камеры
  angelPlanexz: 0,
  angelOz: 30,
  autoRotSpeed: 5
};
let cameraPos = function (_camera, _controls, cameraKeyTrck ) {
  let vectorCam = new THREE.Vector3( 0, 0, 0 );
  let axis = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
  let axisDop = new THREE.Vector3( 0, 0, 0 ); //вектор ортогональный вектору-вверх (ось Y) и радиус-вектору
  vectorCam.subVectors( camera.position, cameraKeyTrck.camLookAt ).normalize(); //вектор от камеры до таргета - радиус-вектор
  vectorCam.applyAxisAngle( axis, THREE.Math.degToRad( cameraKeyTrck.angelOz ) );
  axisDop.crossVectors( vectorCam, axis ).normalize();  //вектор ортогональный вектору-вверх (ось Y) и радиус-вектору
  vectorCam.applyAxisAngle( axisDop, THREE.Math.degToRad( cameraKeyTrck.angelPlanexz ) ).multiplyScalar( cameraKeyTrck.distance );
  _camera.position.addVectors( cameraKeyTrck.camLookAt, vectorCam );
  _controls.target = cameraKeyTrck.camLookAt;
  _controls.autoRotateSpeed = cameraKeyTrck.autoRotSpeed;
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

let CameraKeyTrck1 = {
  duration: false,
  times: [0, 50, 100, 110, 200, 250, 300],
  // deltaTimes: [100, 20, 40, 60, 80, 100, 120],
  camLookAt: new THREE.Vector3( -250, 350, 0  ),
  distance: 1500,
  angelPlanexz: 0,
  angelOz: 0,
  autoRotSpeed: 90
};
function animateCamera(_camera, _controls) {
  let currentCount = 0;
  return function(keyTrack) {
    // keyTrack.distance = 4000 + 2500 * Math.sin( currentCount/40 );
    // cameraPos( _camera, _controls, keyTrack );
    // console.log( currentCount );
    currentCount++;
  };
}
