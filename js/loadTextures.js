let textureLoader = new THREE.TextureLoader();
let textureLoader2 = new THREE.TextureLoader();
let matSteelTexture, vert_fon, vert_fonGor;
let filtr1_hight, filtr2_hight;
let StainlessGunMetal_albedo, StainlessGunMetal_roughness;
let onepix;
onepix = textureLoader.load( 'textures/Onepix.jpg' );
StainlessGunMetal_albedo = textureLoader2.load( 'textures/metals/StainlessGunMetal_albedo.png' );
StainlessGunMetal_roughness = textureLoader2.load( 'textures/metals/StainlessGunMetal_roughness.png' );
matSteelTexture = textureLoader.load( 'textures/metals/SteelNerg.jpg' );
vert_fon = textureLoader.load( 'textures/fon/surface-screen.jpg' );
vert_fonGor = textureLoader.load( 'textures/fon/surface-screen_TV.jpg' );
filtr1_hight = textureLoader.load( 'textures/filtr1_hight.jpg' );
filtr2_hight = textureLoader.load( 'textures/filtr2_hight.jpg' );

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
.setPath( 'textures/cube/test/' )
.load( [ 'as_0000.png', 'as_0001.png', 'as_0002.png', 'as_0003.png', 'as_0004.png', 'as_0005.png' ] );

// var textureCube = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/test/' )
// .load( [ 'bs_0000.png', 'bs_0001.png', 'bs_0002.png', 'bs_0003.png', 'bs_0004.png', 'bs_0005.png' ] );

// scene.background = textureCube;
