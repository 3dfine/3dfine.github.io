// models
var sx_43 = new THREE.Object3D();
var sx_32_vert = new THREE.Object3D();
var sx_32 = new THREE.Object3D();
var sx_19_vert = new THREE.Object3D();
var rama = new THREE.Object3D();
var krisha = new THREE.Object3D();
var ustanovka = new THREE.Group();
var vent_nasos_korp = new THREE.Group();
var vent_nasos_ventil = new THREE.Group();
// loadFBXModel(modelTarget, scaleImport, _material, url)
loadFBXModel( sx_43, 0.5, materials, 'models/fbx/SX_43_LOW.fbx' );
loadFBXModel( sx_32, 0.5, materials, 'models/fbx/SX_32_low.fbx' );
loadFBXModel( sx_32_vert, 0.5, materials2, 'models/fbx/SX_32_vert_low.fbx' );
loadFBXModel( sx_19_vert, 0.5, materials2, 'models/fbx/SX_19_vert_LOW.fbx' );

loadFBXModel( rama, 0.5, materials, 'models/fbx/rama1.fbx' );
loadFBXModel( krisha, 0.5, matKrisha, 'models/fbx/_Krisha.fbx' );
loadFBXModel( vent_nasos_korp, 0.5, matPlasticWhite, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
loadFBXModel( vent_nasos_ventil, 0.5, matPlasticWhite, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
// ustanovka.add( rama );
// ustanovka.add( krisha );
ustanovka.add( vent_nasos_korp );
ustanovka.add( vent_nasos_ventil );
// rama.position.x = 1000;
// krisha.position.x = 0;
// ustanovka.children[0].position.x = 1000;
// ustanovka.children[0].position.y = 0;
ustanovka.children[1].position.y = 128.626;
// ustanovka.children[1].rotation.y = THREE.Math.degToRad( 45 );
// ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
ustanovka.rotation.y = THREE.Math.degToRad( 90 );
ustanovka.position.set( 900, 0, 500 );
// ustanovka.children[0].translateY( 400 );
// ustanovka.visible = false;
// ustanovka.children[0].visible = false;

// SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float);
// var geometry = new THREE.SphereGeometry( 500, 32, 32 );
// mesh = new THREE.Mesh( geometry, matSteelClear );
// scene.add( mesh );
