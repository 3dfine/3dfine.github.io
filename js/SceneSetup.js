var width = 640;
var height = 640;
var aspect = 1.0;
width = window.innerWidth - 20;
// height =  0.97 * window.innerHeight;
height =  window.innerHeight - 20;
aspect = width/height;

var scene = new THREE.Scene();
// scene.background = new THREE.Color(0x0c151b);
scene.background = new THREE.Color( 0xffffff );
// Fog( color : Integer, near : Float, far : Float )
scene.fog = new THREE.Fog( scene.background, 5000, 9000 );

//Camera and camera control
var camera = new THREE.PerspectiveCamera(35, aspect, 100, 9000);
var camPosition = new THREE.Vector3( 0, 1400, 2000 );
var camLookAt = new THREE.Vector3( -0, 350, 0 );
var controls = new THREE.OrbitControls( camera );
var cameraDistance = 2000;

var vectorCam = new THREE.Vector3( 0, 0, 1000 );
// vectorCam.subVectors(camPosition, camLookAt).normalize(); //вектор от камеры до таргета - радиус-вектор
// console.log('vectorCam', vectorCam);
// var axis = new THREE.Vector3( 0, 1, 0 );  //вектор направление вверх - ось Y
// var axisDop = new THREE.Vector3( 0, 0, 0 ); //вектор ортогональный вектору-вверх (ось Y) и радиус-вектору
// axisDop.crossVectors(vectorCam, axis);
// var angle = THREE.Math.degToRad( 0 );
// console.log('axisDop', axisDop);
// vectorCam.applyAxisAngle( axisDop, angle ).normalize().multiplyScalar(cameraDistance);
// console.log('vectorCam', vectorCam);

camera.position.addVectors(camLookAt, vectorCam);
cameraPos(camera, controls, cameraKeyTrck0);

controls.maxPolarAngle = Math.PI * 0.55;
controls.noZoom = false;
controls.zoomSpeed = 0.8;
controls.autoRotate = false; //true
// controls.autoRotateSpeed = 1.5; // 30 seconds per round when fps is 60
controls.noRotate = false;
controls.rotateSpeed = 0.8;
controls.noPan = false;
controls.keyPanSpeed = 5.0;	// pixels moved per arrow key push
// controls.minDistance = 100;
// controls.maxDistance = 9000;

var light;
//HemisphereLight( skyColor : Integer, groundColor : Integer, intensity : Float )
hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.2 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 0, 0 );
scene.add( hemiLight );
//scene.add( new THREE.AmbientLight( 0xffffff ) );
//PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
var light = new THREE.PointLight( 0xffffff, 0.3, 20000, 2 );
light.position.set( 500, 600, 1000 );
scene.add( light );
var light2 = new THREE.PointLight( 0xffffff, 0.3, 20000, 2 );
light2.position.set( -500, 800, -1000 );
scene.add( light2 );

var canvas = document.getElementById( 'canvas-exemple' );
// canvas.setAttribute('width', 600);
// canvas.setAttribute('Height', 600);
var renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
//renderer.setClearColor(0x000000);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setSize( width, height );
//document.body.appendChild( renderer.domElement );
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 2.5;
//document.body.appendChild( renderer.domElement );
