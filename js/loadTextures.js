let managerLoadTextures = new THREE.LoadingManager();
// managerLoadTextures.onProgress = function ( url, itemsLoaded, itemsTotal ) {
// 	// console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
// };
managerLoadTextures.onLoad = function ( ) {
	console.log( 'Textures loading complete!');
}
let textureLoader = new THREE.TextureLoader(managerLoadTextures);

// let onepix = textureLoader.load( 'textures/Onepix.jpg' );
// loadTexture(StainlessGunMetal_albedo, 'textures/metals/StainlessGunMetal_albedo.png');
// loadTexture(StainlessGunMetal_roughness, 'textures/metals/StainlessGunMetal_roughness.png');
// StainlessGunMetal_albedo = textureLoader.load( 'textures/metals/StainlessGunMetal_albedo.png' );
// StainlessGunMetal_albedo.wrapS = THREE.RepeatWrapping;
// StainlessGunMetal_albedo.wrapT = THREE.RepeatWrapping;
// StainlessGunMetal_albedo.repeat.set( 1, 1 );
//


let StainlessGunMetal_albedo = textureLoader.load( 'textures/metals/StainlessGunMetal_albedo.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );
let StainlessGunMetal_roughness = textureLoader.load( 'textures/metals/StainlessGunMetal_roughness.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );
let RepolishedCopper_albedo = textureLoader.load( 'textures/metals/RepolishedCopper_albedo.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );
let RepolishedCopper_roughness = textureLoader.load( 'textures/metals/RepolishedCopper_roughness.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );
let matSteelTexture = textureLoader.load( 'textures/metals/SteelNerg.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );
let matSteelTexture2 = textureLoader.load( 'textures/metals/stainless-steel1.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 6, 1 );
} );
// let wood1 = textureLoader.load( 'textures/wood/wood1.jpg' );
let wood1 = textureLoader.load( 'textures/wood/wood1.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 7, 2 );
} );
let wood1rough = textureLoader.load( 'textures/wood/wood1rough.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 7, 2 );
} );

let filtr1_hight = textureLoader.load( 'textures/filtr1_hight.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );
let filtr2_hight = textureLoader.load( 'textures/filtr2_hight.jpg', function ( texture ) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  // globalLoad++;
} );

//cubemap
// var textureCube = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/pisa/' )
// .load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] );
//
// var textureCube = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/DallasW/' )
// .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
//
// var textureCube = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/Vasa/' )
// .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );

let textureCube = new THREE.CubeTextureLoader()
.setPath( 'textures/cube/station/' )
.load( [ 'as_0000.jpg', 'as_0001.jpg', 'as_0002.jpg', 'as_0003.jpg', 'as_0004.jpg', 'as_0005.jpg' ] );

// var textureCube = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/test/' )
// .load( [ 'bs_0000.png', 'bs_0001.png', 'bs_0002.png', 'bs_0003.png', 'bs_0004.png', 'bs_0005.png' ] );

// scene.background = textureCube;
