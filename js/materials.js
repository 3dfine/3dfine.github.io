let maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
matSteelTexture.anisotropy = maxAnisotropy;
vert_fon.anisotropy = maxAnisotropy;
vert_fonGor.anisotropy = maxAnisotropy;

let matAluminuim = new THREE.MeshStandardMaterial({
  color: 0x555555,
  metalness: 0.6,
  roughness: 0.8,
  //combine: THREE.MultiplyOperation,
});
let matSteel = new THREE.MeshStandardMaterial({
  color: 0x28343b,    //0x28343b
  metalness: 0.9,
  roughness: 0.8 ,
  // combine: THREE.MultiplyOperation,
});
let matRAL7045 = new THREE.MeshStandardMaterial({
  color: 0x91969A,    //0x28343b
  metalness: 0.5,
  roughness: 0.5 ,
  // combine: THREE.MultiplyOperation,
});
let matSteelClear = new THREE.MeshStandardMaterial({
  color: 0x28343b,    //0x28343b
  metalness: 0.9,
  roughness: 0.1 ,
  // combine: THREE.MultiplyOperation,
});
let matGold = new THREE.MeshStandardMaterial({
  color: 0xffc355,    //Gold	(1.000, 0.766, 0.336) or [255, 195, 86]
  metalness: 1,
  roughness: 0.22 ,
  // combine: THREE.MultiplyOperation,
});
let matSilver = new THREE.MeshStandardMaterial({
  color: 0xf8f5e9,    //Silver	(0.972, 0.960, 0.915) or [248, 245, 233]
  metalness: 1,
  roughness: 0.2 ,
  // combine: THREE.MultiplyOperation,
});
let matCopper = new THREE.MeshStandardMaterial({
  color: 0xe28241,
  metalness: 1.0,
  roughness: 0.5 ,
  // combine: THREE.MultiplyOperation,
});
let matPlastic = new THREE.MeshStandardMaterial({
  color: 0x020202,
  metalness:0.2,
  roughness: 0.1,
  side: THREE.DoubleSide
});
let matRubber = new THREE.MeshStandardMaterial({
  color: 0x030303,
  metalness:0.2,
  roughness: 0.4,
  side: THREE.DoubleSide
});
let matPlasticBlack = new THREE.MeshLambertMaterial({
  color: 0x000000,
});
let matPlasticMatte = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:0.2,
  roughness: 0.7,
  // combine: THREE.MultiplyOperation,
  // opacity: 0
});
let matPlasticWhite = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness:0.5,
  roughness: 0.7,
  // combine: THREE.MultiplyOperation,
  // opacity: 0
});
let matEkran = new THREE.MeshLambertMaterial({
  //  color: 0xffffff,
  map: vert_fon
});
let matEkranGorizont = new THREE.MeshLambertMaterial({
  //  color: 0xffffff,
  map: vert_fonGor
});
let matGlass2 = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:1.0,
  roughness: 0.15,
  transparent: true,
  //combine: THREE.MultiplyOperation,
  opacity: 1
});
let matGhost = new THREE.MeshPhongMaterial({
  color: 0xaaaaaa,
  transparent: true,
  //combine: THREE.MultiplyOperation,
  opacity: 0.8
});

let shader = THREE.FresnelShader;
let uniforms = THREE.UniformsUtils.clone( shader.uniforms );
uniforms[ "tCube" ].value = textureCube;

let matGlass = new THREE.ShaderMaterial( {
uniforms: uniforms,
// vertexShader: myVertexShader,
vertexShader: shader.vertexShader,
fragmentShader: shader.fragmentShader,
transparent: true
} );

matOpora[0].envMap = textureCube;
matOpora[0].needsUpdate = true;
matRAL7045.envMap = textureCube;
matRAL7045.needsUpdate = true;
matAluminuim.envMap = textureCube;
matAluminuim.needsUpdate = true;
matSteel.envMap = textureCube;
matSteel.needsUpdate = true;
matSteel.roughnessMap = matSteelTexture;
matSteel.roughnessMap.wrapS = THREE.RepeatWrapping;
matSteel.roughnessMap.repeat.set( 2, 1 );
matSteel.bumpMap = matSteelTexture;
matSteel.bumpMap.wrapS = THREE.RepeatWrapping;
matSteel.bumpMap.repeat.set( 2, 1 );
matSteel.bumpScale = 0.2;
matGold.envMap = textureCube;
matGold.needsUpdate = true;
matPlastic.envMap = textureCube;
matPlastic.needsUpdate = true;
matSteelClear.envMap = textureCube;
matSteelClear.needsUpdate = true;
matPlasticWhite.envMap = textureCube;
matPlasticWhite.needsUpdate = true;

matStoikaGoriz[0] = matGold;
matStoikaGoriz[1] = matPlasticBlack;
matStoikaGoriz[2] = matEkranGorizont;
matStoikaGoriz[3] = matGlass;
matStoikaGoriz[4] = matPlastic;
matStoikaGoriz[5] = matSteelClear;

matStoikaVert[0] = matGold;
matStoikaVert[1] = matPlasticBlack;
matStoikaVert[2] = matEkran;
matStoikaVert[3] = matGlass;
matStoikaVert[4] = matPlastic;
matStoikaVert[5] = matSteelClear;

matUstKrisha[0] = new THREE.MeshStandardMaterial({
  color : 0x030303 });
matUstKrisha[1] = new THREE.MeshStandardMaterial({
  color : 0xffff4d
});
matUstKrisha[2] = new THREE.MeshStandardMaterial({
  color : 0xbfbfbf
});
matUstKrisha[3] = new THREE.MeshStandardMaterial({
  color : 0xbfbfbf
});

// var myVertexShader, myFragmentShader;
// loadTextResource('/js/myFresnel.c')
// .then(function(result) {
//   myVertexShader = result;
//   return loadTextResource('/js/myFresnel.c');
// })
// .then(function(result) {
//   myFragmentShader = "res23232ult";
//   return ;
// })
// .catch(function(error) {
//   alert('Error. See Console');
//   console.error(error);
// })

// var genCubeUrls = function( prefix, postfix ) {
//   return [
//     prefix + 'px' + postfix, prefix + 'nx' + postfix,
//     prefix + 'py' + postfix, prefix + 'ny' + postfix,
//     prefix + 'pz' + postfix, prefix + 'nz' + postfix
//   ];
// };
// var hdrUrls = genCubeUrls( './textures/cube/pisaHDR/', '.hdr' );
// new THREE.HDRCubeTextureLoader().load( THREE.UnsignedByteType, hdrUrls, function ( hdrCubeMap ) {
//   var pmremGenerator = new THREE.PMREMGenerator( hdrCubeMap );
//   pmremGenerator.update( renderer );
//   var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
//   pmremCubeUVPacker.update( renderer );
//   var hdrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;
//   materials[0].envMap = hdrCubeRenderTarget.texture;
//   materials[0].needsUpdate = true;
//   materials[1].envMap = hdrCubeRenderTarget.texture;
//   materials[1].needsUpdate = true;
//   //materials[2].envMap = hdrCubeRenderTarget.texture;
//   //materials[2].needsUpdate = true;
//   // materials[3].envMap = hdrCubeRenderTarget.texture;
//   // materials[3].needsUpdate = true;
//   // materials[5].envMap = hdrCubeRenderTarget.texture;
//   // materials[5].needsUpdate = true;
// } );
