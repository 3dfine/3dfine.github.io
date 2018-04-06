let loader = new THREE.FBXLoader();
let matUstRama = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matLopasti = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstVent = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstVent2 = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstKrisha = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];

let matOpora = [ new THREE.MeshStandardMaterial({ color : 0x020202, metalness: 0.9, roughness: 0.4 }) ];
// models
let ustanovka = new THREE.Group();
let ustVent1 = new THREE.Group();
let ustVent2 = new THREE.Group();
let zaslonkaSborka1 = new THREE.Group();
let zaslonkaSborka2 = new THREE.Group();
let rekuperator = new THREE.Group();
let ventilatorOutSide = new THREE.Group();

let rama = new THREE.Object3D();
loadFBXModel( rama, 0.5, matUstRama, 'models/fbx/ustanovka/rama.FBX' );
rama.castShadow = true;
rama.receiveShadow = true;

let krisha = new THREE.Object3D();
loadFBXModel( krisha, 0.5, matUstKrisha, 'models/fbx/ustanovka/Krisha.FBX' );
// krisha.children[0].children[1].visible = false;
let vent_nasos_korp = new THREE.Object3D();
loadFBXModel( vent_nasos_korp, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
let vent_nasos_ventil = new THREE.Object3D();
loadFBXModel( vent_nasos_ventil, 0.5, matUstVent2, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
let vent_nasos_korp2 = new THREE.Object3D();
loadFBXModel( vent_nasos_korp2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
let vent_nasos_ventil2 = new THREE.Object3D();
loadFBXModel( vent_nasos_ventil2, 0.5, matUstVent2, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );

let rekuperatorKorp = new THREE.Object3D();
loadFBXModel( rekuperatorKorp, 0.5, matUstVent2, 'models/fbx/ustanovka/rekuperatorKorp.FBX' );
let rekuperatorZaslon1 = new THREE.Object3D();
loadFBXModel( rekuperatorZaslon1, 0.5, matUstVent2, 'models/fbx/ustanovka/rekuperatorZaslon1.FBX' );
let rekuperatorZaslon2 = new THREE.Object3D();
loadFBXModel( rekuperatorZaslon2, 0.5, matUstVent2, 'models/fbx/ustanovka/rekuperatorZaslon1.FBX' );
let rekuperatorZaslon3 = new THREE.Object3D();
loadFBXModel( rekuperatorZaslon3, 0.5, matUstVent2, 'models/fbx/ustanovka/rekuperatorZaslon3.FBX' );

let filtrKasetni1 = new THREE.Object3D();
loadFBXModel( filtrKasetni1, 0.5, matUstVent, 'models/fbx/ustanovka/filtrKasetni.FBX' );
let filtrKasetni2 = new THREE.Object3D();
loadFBXModel( filtrKasetni2, 0.5, matUstVent, 'models/fbx/ustanovka/filtrKasetni.FBX' );
let ventilatorOutSide_korp = new THREE.Object3D();
loadFBXModel( ventilatorOutSide_korp, 0.5, matUstVent, 'models/fbx/ustanovka/ventilatorOutSide_korp.FBX' );
let ventilatorOutSide_lopasti = new THREE.Object3D();
loadFBXModel(ventilatorOutSide_lopasti, 0.5, matLopasti, 'models/fbx/ustanovka/ventilatorOutSide_lopasti.FBX' );
ventilatorOutSide_lopasti.position.set( 219.752/2, 1266.646/2, 2160.0/2 );
ventilatorOutSide_lopasti.rotation.y = THREE.Math.degToRad( 90 );

let zaslonka1_Rama = new THREE.Object3D();
loadFBXModel( zaslonka1_Rama, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka1_Rama.FBX' );
let zaslonka2_Rama = new THREE.Object3D();
loadFBXModel( zaslonka2_Rama, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka2_Rama.FBX' );
// zaslonka1_Rama.position.set( 0/2, 461.535/2, -1150.785/2 );
let zaslonka1 = new THREE.Object3D();
loadFBXModel( zaslonka1, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka1Close.FBX' );
zaslonka1.position.set( 0/2, 176.679/2, 0/2 );

let zaslonka2 = new THREE.Object3D();
loadFBXModel( zaslonka2, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka2Close.FBX' );
zaslonka2.position.set( 0/2, 0/2, 0/2);
zaslonka2.rotation.y = THREE.Math.degToRad( -90 );

ustVent1.add( vent_nasos_korp );
ustVent1.add( vent_nasos_ventil );
vent_nasos_ventil.rotSpeed = 0.0;
ustVent2.add( vent_nasos_korp2 );
ustVent2.add( vent_nasos_ventil2 );
vent_nasos_ventil2.rotSpeed = 0.0;
zaslonkaSborka1.add( zaslonka1_Rama );
zaslonkaSborka1.add( zaslonka1 );
zaslonkaSborka1.position.set( 393.977/2, 710.824/2, -2001.979/2);
zaslonkaSborka2.add( zaslonka2_Rama );
zaslonkaSborka2.add( zaslonka2 );
zaslonkaSborka2.position.set( 0/2, 1264.692/2, -2195.049/2);
// zaslonkaSborka.add( zaslonka2 );
// zaslonkaSborka.children[1].position.set( 0/2, 171.564/2, 219.614/2 );
ventilatorOutSide.add( ventilatorOutSide_korp );
ventilatorOutSide.add( ventilatorOutSide_lopasti );
//Рекуператор
rekuperator.add( rekuperatorKorp );
rekuperatorZaslon1.position.set( -269.554/2, 950.514/2, 112.29/2);
rekuperatorZaslon1.rotation.x = THREE.Math.degToRad( -45 );
rekuperator.add( rekuperatorZaslon1 );
rekuperatorZaslon2.position.set( -269.554/2, 950.514/2, -112.29/2);
rekuperatorZaslon2.rotation.x = THREE.Math.degToRad( 45 );
rekuperator.add( rekuperatorZaslon2 );
rekuperatorZaslon3.position.set( 179.746/2, 950.514/2, -112.29/2);
rekuperatorZaslon3.rotation.x = THREE.Math.degToRad( 45 );
rekuperator.add( rekuperatorZaslon3 );
rekuperator.position.set( 0/2, 461.535/2, -1150.785/2 );

ustVent1.children[1].position.y = 128.626;
ustVent2.children[1].position.y = 128.626;
// ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
// ustVent1.rotation.y = THREE.Math.degToRad( 180 );
ustVent1.position.set( 0, 458.927/2, -300.059/2 );
ustVent2.rotation.y = THREE.Math.degToRad( 180 );
ustVent2.position.set( 0, 1011.533/2, -300.059/2 );

filtrKasetni1.position.set( 0/2, 1264.329/2, 581.448/2);
filtrKasetni1.rotation.y = THREE.Math.degToRad( 180 );
filtrKasetni2.position.set( 0/2, 1264.329/2, -2139.475/2);
// filtrKasetni2.rotation.y = THREE.Math.degToRad( 180 );

ustanovka.add( ustVent1 );
ustanovka.add( ustVent2 );
ustanovka.add( rama );
ustanovka.add( krisha );
ustanovka.add( zaslonkaSborka1 );
ustanovka.add( zaslonkaSborka2 );
ustanovka.add( rekuperator );
ustanovka.add( filtrKasetni1 );
ustanovka.add( filtrKasetni2 );
ustanovka.add( ventilatorOutSide );
ustanovka.rotation.y = THREE.Math.degToRad( -90 );
// console.log( 'ustanovka', ustanovka.children );
// console.log( 'ventilatorOutSide', ventilatorOutSide.children );
