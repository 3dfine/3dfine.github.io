// models
let sx_43 = new THREE.Object3D();
let sx_32_vert = new THREE.Object3D();
let sx_32 = new THREE.Object3D();
let sx_19_vert = new THREE.Object3D();

let stoikiGroup = new THREE.Group();

// loadFBXModel(modelTarget, scaleImport, _material, url)
loadFBXModel( sx_43, 0.5, matStoikaGoriz, 'models/fbx/SX_43_LOW.fbx' );
loadFBXModel( sx_32, 0.5, matStoikaGoriz, 'models/fbx/SX_32_low.fbx' );
loadFBXModel( sx_32_vert, 0.5, matStoikaVert, 'models/fbx/SX_32_vert_low.fbx' );
loadFBXModel( sx_19_vert, 0.5, matStoikaVert, 'models/fbx/SX_19_vert_LOW.fbx' );

sx_43.position.set( 0, 0, 0 );
sx_32_vert.position.set( -510, 0, 0 );
sx_19_vert.position.set( 500, 0, 0 );
sx_32.position.set( -950, 0, 0 );

stoikiGroup.add(sx_43);
stoikiGroup.add(sx_32_vert);
stoikiGroup.add(sx_19_vert);
stoikiGroup.add(sx_32);
