let loader = new THREE.FBXLoader();
let matUstVent = [
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  })
];
let matUstVent2 = [
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  })
];
let matUstKrisha = [
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  })
];
let matOpora = [
  new THREE.MeshStandardMaterial({
    color : 0x020202,
    metalness: 0.9,
    roughness: 0.4
  })
];
// models
let rama1 = new THREE.Object3D();
let rama2 = new THREE.Object3D();
let opora = new THREE.Object3D();
let krisha = new THREE.Object3D();
let ustanovka = new THREE.Group();
let ustVent1 = new THREE.Group();
let ustVent2 = new THREE.Group();
let vent_nasos_korp = new THREE.Object3D();
let vent_nasos_ventil = new THREE.Object3D();
let vent_nasos_korp2 = new THREE.Object3D();
let vent_nasos_ventil2 = new THREE.Object3D();

loadFBXModel( rama1, 0.5, matUstVent, 'models/fbx/ustanovka/rama1.fbx' );
loadFBXModel( rama2, 0.5, matUstVent, 'models/fbx/ustanovka/rama2.fbx' );
loadFBXModel( opora, 0.5, matOpora, 'models/fbx/ustanovka/opora.fbx' );
loadFBXModel( krisha, 0.5, matUstKrisha, 'models/fbx/ustanovka/_Krisha.fbx' );
loadFBXModel( vent_nasos_korp, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil, 0.5, matUstVent2, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
loadFBXModel( vent_nasos_korp2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil2, 0.5, matUstVent2, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
rama1.rotation.y = THREE.Math.degToRad( -90 );
rama2.rotation.y = THREE.Math.degToRad( -90 );
krisha.rotation.y = THREE.Math.degToRad( -90 );
opora.rotation.y = THREE.Math.degToRad( -90 );

ustVent1.add( vent_nasos_korp );
ustVent1.add( vent_nasos_ventil );
ustVent2.add( vent_nasos_korp2 );
ustVent2.add( vent_nasos_ventil2 );

ustVent1.children[1].position.y = 128.626;
ustVent2.children[1].position.y = 128.626;
// ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
ustVent1.rotation.y = THREE.Math.degToRad( -90 );
ustVent1.position.set( 299.444/2, 458.927/2, 0 );
ustVent2.rotation.y = THREE.Math.degToRad( 90 );
ustVent2.position.set( 299.294/2, 1011.533/2, 0 );


ustanovka.add( ustVent1 );
ustanovka.add( ustVent2 );
ustanovka.add( rama1 );
ustanovka.add( rama2 );
ustanovka.add( opora );
ustanovka.add( krisha );
