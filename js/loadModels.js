// models
var sx_43 = new THREE.Object3D();
var sx_32_vert = new THREE.Object3D();
var sx_32 = new THREE.Object3D();
var sx_19_vert = new THREE.Object3D();
var rama = new THREE.Object3D();
var krisha = new THREE.Object3D();
var ustanovka = new THREE.Group();
// loadFBXModel(modelTarget, scaleImport, _material, url)
loadFBXModel( sx_43, 0.5, materials, 'models/fbx/SX_43_LOW.fbx' );
loadFBXModel( sx_32, 0.5, materials, 'models/fbx/SX_32_low.fbx' );
loadFBXModel( sx_32_vert, 0.5, materials2, 'models/fbx/SX_32_vert_low.fbx' );
loadFBXModel( sx_19_vert, 0.5, materials2, 'models/fbx/SX_19_vert_LOW.fbx' );

loadFBXModel( rama, 0.5, materials, 'models/fbx/rama1.fbx' );
loadFBXModel( krisha, 0.5, matKrisha, 'models/fbx/_Krisha.fbx' );

ustanovka.add( rama );
ustanovka.add( krisha );
// rama.position.x = 1000;
// krisha.position.x = 0;
ustanovka.children[0].position.x = 1000;
ustanovka.children[0].position.y = -400;
ustanovka.children[1].position.x = 1000;
ustanovka.children[1].rotation.y = THREE.Math.degToRad( 45 );
ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
ustanovka.position.set( 500, 0, 0 );
ustanovka.children[0].translateY( 400 );
ustanovka.visible = false;
// ustanovka.children[0].visible = false;

// SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float);
// var geometry = new THREE.SphereGeometry( 500, 32, 32 );
// mesh = new THREE.Mesh( geometry, matSteelClear );
// scene.add( mesh );
