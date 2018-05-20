let width = 640;
let height = 640;
let aspect = 1.0;
width = window.innerWidth - 00;
height =  window.innerHeight - 00;
aspect = width/height;
let widthHalf = width / 2.0;
let heightHalf = height / 2.0;

let scene = new THREE.Scene();
// scene.background = new THREE.Color(0x0c151b);
scene.background = new THREE.Color( 0xffffff );
// Fog( color : Integer, near : Float, far : Float )
scene.fog = new THREE.Fog( scene.background, 5000, 9000 );
scene.fog.color = scene.background;

//Camera and camera control
let camera = new THREE.PerspectiveCamera(35, aspect, 100, 9000);
let controls = new THREE.OrbitControls( camera );
let cameraPosSetupDef = {
  camLookAt: new THREE.Vector3( 0, 0, 0 ),  //точка, куда смотрит камера
  distance: 10000,   //дистация до камеры
  angelPlaneXZ: 0,
  angelOy: 0,
  autoRotSpeed: -3
};
if(height > width) {
  controls.rotateSpeed = height / 1920;
  camera.zoom = 0.5;
} else {
  controls.rotateSpeed = width / 1920;
  camera.zoom = 1.0;
}
camera.updateProjectionMatrix();

globalCameraPos(cameraPosSetupDef);
controls.maxPolarAngle = Math.PI * 0.75;
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

dirLight = new THREE.DirectionalLight( 0xffffff, 0.2 );
dirLight.position.set( 2, 1.5, 1.4 );
dirLight.position.multiplyScalar( 1000 );
// var helper = new THREE.DirectionalLightHelper( dirLight, 500 );
// scene.add( helper );
scene.add( dirLight );
//HemisphereLight( skyColor : Integer, groundColor : Integer, intensity : Float )
hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1.0 );
hemiLight.color.setHSL( 0.6, 1, 0.4 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 10, 0 );
scene.add( hemiLight );
// hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 100 );
// scene.add( hemiLightHelper );
//scene.add( new THREE.AmbientLight( 0xffffff ) );
//PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
let light = new THREE.PointLight( 0xffffff, 1.0, 20000, 1 );
light.position.set( 1500, 1600, 1000 );
let sphereSize = 100;
let pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
// scene.add( pointLightHelper );
scene.add( light );
let light2 = new THREE.PointLight( 0xffffff, 0.4, 20000, 1 );
light2.position.set( -1500, 1800, -1000 );
// var pointLightHelper2 = new THREE.PointLightHelper( light2, sphereSize );
// scene.add( pointLightHelper2 );
scene.add( light2 );

let canvas = document.getElementById( 'canvas-exemple' );
// canvas.setAttribute('width', 600);
// canvas.setAttribute('Height', 600);
let renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
//renderer.setClearColor(0x000000);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setSize( width, height );
//document.body.appendChild( renderer.domElement );
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.sortObjects = true;
// renderer.toneMapping = THREE.ReinhardToneMapping;
// renderer.toneMappingExposure = 1.5;

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.BasicShadowMap;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
//document.body.appendChild( renderer.domElement );
const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
renderer.render( scene, camera );
