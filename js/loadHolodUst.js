let loader = new THREE.FBXLoader();
let matUstRama = [
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  })
];
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
    roughness: 0.3
  })
];
// models
let ustanovka = new THREE.Group();
let ustVent1 = new THREE.Group();
let ustVent2 = new THREE.Group();
let zaslonkaSborka = new THREE.Group();
let rekuperator = new THREE.Group();

let rama1 = new THREE.Object3D();
let rama2 = new THREE.Object3D();
let opora = new THREE.Object3D();
let krisha = new THREE.Object3D();
let vent_nasos_korp = new THREE.Object3D();
let vent_nasos_ventil = new THREE.Object3D();
let vent_nasos_korp2 = new THREE.Object3D();
let vent_nasos_ventil2 = new THREE.Object3D();
let zaslonka_Rama1 = new THREE.Object3D();
let zaslonka1 = new THREE.Object3D();
let zaslonka2 = new THREE.Object3D();
let rekuperatorKorp = new THREE.Object3D();
let filtrKasetni1 = new THREE.Object3D();
let filtrKasetni2 = new THREE.Object3D();
loadFBXModel( rama1, 0.5, matUstRama, 'models/fbx/ustanovka/rama1.FBX' );
loadFBXModel( rama2, 0.5, matUstRama, 'models/fbx/ustanovka/rama2.FBX' );
loadFBXModel( opora, 0.5, matOpora, 'models/fbx/ustanovka/opora.FBX' );
loadFBXModel( krisha, 0.5, matUstKrisha, 'models/fbx/ustanovka/Krisha.FBX' );
loadFBXModel( vent_nasos_korp, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil, 0.5, matUstVent2, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
loadFBXModel( vent_nasos_korp2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil2, 0.5, matUstVent2, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
loadFBXModel( rekuperatorKorp, 0.5, matUstVent2, 'models/fbx/ustanovka/rekuperatorKorp.FBX' );
loadFBXModel( filtrKasetni1, 0.5, matUstVent, 'models/fbx/ustanovka/filtrKasetni.FBX' );
loadFBXModel( filtrKasetni2, 0.5, matUstVent, 'models/fbx/ustanovka/filtrKasetni.FBX' );

loadFBXModel( zaslonka_Rama1, 0.5, matUstVent, 'models/fbx/ustanovka/Zaslonka1_Rama.FBX' );
loadFBXModel( zaslonka1, 0.5, matUstVent, 'models/fbx/ustanovka/Zaslonka1Close.FBX' );

ustVent1.add( vent_nasos_korp );
ustVent1.add( vent_nasos_ventil );
ustVent2.add( vent_nasos_korp2 );
ustVent2.add( vent_nasos_ventil2 );
zaslonkaSborka.add( zaslonka_Rama1 );
// zaslonkaSborka.add( zaslonka1 );
// zaslonkaSborka.add( zaslonka2 );
// zaslonkaSborka.children[1].position.set( 0/2, 171.564/2, 219.614/2 );

rekuperator.add( rekuperatorKorp );
rekuperator.children[0].position.set( 0/2, 461.535/2, -1150.785/2 );

ustVent1.children[1].position.y = 128.626;
ustVent2.children[1].position.y = 128.626;
// ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
// ustVent1.rotation.y = THREE.Math.degToRad( 180 );
ustVent1.position.set( 0, 458.927/2, -300.059/2 );
ustVent2.rotation.y = THREE.Math.degToRad( 180 );
ustVent2.position.set( 0, 1011.533/2, -300.059/2 );
zaslonkaSborka.position.set( 393.977/2, 710.824/2, -2001.979/2);

filtrKasetni1.position.set( 0/2, 1264.329/2, 581.448/2);
filtrKasetni1.rotation.y = THREE.Math.degToRad( 180 );
filtrKasetni2.position.set( 0/2, 1264.329/2, -2139.475/2);
// filtrKasetni2.rotation.y = THREE.Math.degToRad( 180 );

ustanovka.add( ustVent1 );
ustanovka.add( ustVent2 );
ustanovka.add( rama1 );
ustanovka.add( rama2 );
ustanovka.add( opora );
ustanovka.add( krisha );
ustanovka.add( zaslonkaSborka );
ustanovka.add( rekuperator );
ustanovka.add( filtrKasetni1 );
ustanovka.add( filtrKasetni2 );
ustanovka.rotation.y = THREE.Math.degToRad( -90 );
