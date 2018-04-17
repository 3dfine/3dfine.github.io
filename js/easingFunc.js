let easeInOutExpo = function ( t, koef ) {
  let sigma0 = 1.0 / ( 1.0 + Math.exp( koef * ( 0.5 ) ) );
  let sigma = 1.0 / ( 1.0 + Math.exp( koef * ( -t + 0.5 ) ) );
  return ( sigma - sigma0 ) / ( 1.0 - 2.0 * sigma0 );  //приводящая формула для сигмоиды, чтобы сигмоида проходила через (0, 0) и (1, 1)
  // return 1.0 / ( 1.0 + Math.exp( koef * ( -t + 0.5 ) ) );
}
let easeInExpo = function (t, koef) {
  if(koef > 5) return Math.exp( koef * ( t - 1 ) );

  let sigma0 = Math.exp( -koef );
  return ( Math.exp( koef * ( t - 1 ) ) - sigma0 ) / ( 1 - sigma0 );
}
let easeInCirc = function (t) {
  if (t >= 1) return t;
  return -1 * (Math.sqrt(1 - t * t) - 1);
}
let easeOutCubic = function (t) {
  return (--t)*t*t+1;
}
let easeOutCirc = function (t) {
  return 1 * Math.sqrt(1 - (t = t - 1) * t);
}
let easeOutQuint = function (t) {
  return 1+(--t)*t*t*t*t;
}
let easeOutElastic = function (t) {
  let s = 1.70158;
  let p = 0.0;
  let a = 1.0;
  if (t == 0) return 0.0;
  if (t == 1) return 1.0;
  if (p == 0) p = 1 * .3;
  if (a < 1) {
    a = 0.5;
    let s = p / 4;
  } else s = p / (2 * Math.PI) * Math.asin(1 / a);
  return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
}
let easeOutBounce = function (t) {
  if (t < (1 / 2.75)) {
    return 1 * (7.5625 * t * t);
  } else if (t < (2 / 2.75)) {
    return 1 * (7.5625 * (t = t - (1.5 / 2.75)) * t + .75);
  } else if (t < (2.5 / 2.75)) {
    return 1 * (7.5625 * (t = t - (2.25 / 2.75)) * t + .9375);
  } else {
    return 1 * (7.5625 * (t = t - (2.625 / 2.75)) * t + .984375);
  }
}
let easeInQuint = function (t) {
  return t * t * t * t * t;
}
let easeInOutCirc = function (t) {
  if ((t = t / 0.5) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
  return 1 / 2 * (Math.sqrt(1 - (t = t - 2) * t) + 1);
}
