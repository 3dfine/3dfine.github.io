var loader = new THREE.FBXLoader();
var matUstVent = [
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),     //0 matGold
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),   //1 matSteel
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),     //2 matEkran
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),     //3
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),   //4
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),     //5
new THREE.MeshStandardMaterial({
  color : 0xff0000
})
];

// models
var rama = new THREE.Object3D();
var krisha = new THREE.Object3D();
var ustanovka = new THREE.Group();
var ustVent1 = new THREE.Group();
var ustVent2 = new THREE.Group();
var vent_nasos_korp = new THREE.Object3D();
var vent_nasos_ventil = new THREE.Object3D();
var vent_nasos_korp2 = new THREE.Object3D();
var vent_nasos_ventil2 = new THREE.Object3D();

loadFBXModel( rama, 0.5, matUstVent, 'models/fbx/rama1.fbx' );
loadFBXModel( krisha, 0.5, matUstVent, 'models/fbx/_Krisha.fbx' );
loadFBXModel( vent_nasos_korp, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
loadFBXModel( vent_nasos_korp2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );

ustVent1.add( vent_nasos_korp );
ustVent1.add( vent_nasos_ventil );
ustVent2.add( vent_nasos_korp2 );
ustVent2.add( vent_nasos_ventil2 );

ustVent1.children[1].position.y = 128.626;
ustVent2.children[1].position.y = 128.626;
// ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
ustVent1.rotation.y = THREE.Math.degToRad( 90 );
ustVent1.position.set( 0, 300, 0 );
ustVent2.rotation.y = THREE.Math.degToRad( -90 );
ustVent2.position.set( 0, 0, 0 );


ustanovka.add( ustVent1 );
ustanovka.add( ustVent2 );
// ustanovka.add( rama );
// ustanovka.add( krisha );
