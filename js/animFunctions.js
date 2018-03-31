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
