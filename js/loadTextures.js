var loader = new THREE.FBXLoader();
var textureLoader = new THREE.TextureLoader();
var maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
var matSteelTexture, vert_fon, vert_fonGor;
matSteelTexture = textureLoader.load( 'textures/metals/SteelNerg.jpg' );
matSteelTexture.anisotropy = maxAnisotropy;
vert_fon = textureLoader.load( 'textures/fon/surface-screen.jpg' );
vert_fon.anisotropy = maxAnisotropy;
vert_fonGor = textureLoader.load( 'textures/fon/surface-screen_TV.jpg' );
vert_fonGor.anisotropy = maxAnisotropy;

//cubemap
// var textureCube2 = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/pisa/' )
// .load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] );
//
// var textureCube5 = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/DallasW/' )
// .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
//
// var textureCube3 = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/Vasa/' )
// .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
var textureCube = new THREE.CubeTextureLoader()
.setPath( 'textures/cube/test/' )
.load( [ 'as_0000.png', 'as_0001.png', 'as_0002.png', 'as_0003.png', 'as_0004.png', 'as_0005.png' ] );

// var textureCube = new THREE.CubeTextureLoader()
// .setPath( 'textures/cube/test/' )
// .load( [ 'bs_0000.png', 'bs_0001.png', 'bs_0002.png', 'bs_0003.png', 'bs_0004.png', 'bs_0005.png' ] );

// scene.background = textureCube;
