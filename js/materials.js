var matAluminuim = new THREE.MeshStandardMaterial({
  color: 0x555555,
  metalness:1,
  roughness: 0.3,
  //combine: THREE.MultiplyOperation,
});
var matSteel = new THREE.MeshStandardMaterial({
  color: 0x28343b,    //0x28343b
  metalness: 1.0,
  roughness: 0.8 ,
  // combine: THREE.MultiplyOperation,
});
var matSteelClear = new THREE.MeshStandardMaterial({
  color: 0x28343b,    //0x28343b
  metalness: 1.0,
  roughness: 0.1 ,
  // combine: THREE.MultiplyOperation,
});
var matGold = new THREE.MeshStandardMaterial({
  color: 0xffc355,    //Gold	(1.000, 0.766, 0.336) or [255, 195, 86]
  metalness: 1,
  roughness: 0.22 ,
  // combine: THREE.MultiplyOperation,
});
var matSilver = new THREE.MeshStandardMaterial({
  color: 0xf8f5e9,    //Silver	(0.972, 0.960, 0.915) or [248, 245, 233]
  metalness: 1,
  roughness: 0.2 ,
  // combine: THREE.MultiplyOperation,
});
var matCopper = new THREE.MeshStandardMaterial({
  color: 0xe28241,
  metalness: 1.0,
  roughness: 0.5 ,
  // combine: THREE.MultiplyOperation,
});
var matPlastic = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:0.2,
  roughness: 0.1,
  // combine: THREE.MultiplyOperation,
  // opacity: 0
});
var matPlasticBlack = new THREE.MeshLambertMaterial({
  color: 0x000000
});
var matPlasticMatte = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:0.2,
  roughness: 0.7,
  // combine: THREE.MultiplyOperation,
  // opacity: 0
});
var matPlasticWhite = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:0.5,
  roughness: 0.4,
  // combine: THREE.MultiplyOperation,
  // opacity: 0
});
var matEkran = new THREE.MeshLambertMaterial({
  //  color: 0xffffff,
  map: vert_fon
});
var matEkranGorizont = new THREE.MeshLambertMaterial({
  //  color: 0xffffff,
  map: vert_fonGor
});
var matGlass2 = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:1.0,
  roughness: 0.15,
  transparent: true,
  //combine: THREE.MultiplyOperation,
  opacity: 1
});
var matGhost = new THREE.MeshPhongMaterial({
  color: 0xaaaaaa,
  transparent: true,
  //combine: THREE.MultiplyOperation,
  opacity: 0.8
});

var shader = THREE.FresnelShader;
var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
uniforms[ "tCube" ].value = textureCube;

var matGlass = new THREE.ShaderMaterial( {
uniforms: uniforms,
// vertexShader: myVertexShader,
vertexShader: shader.vertexShader,
fragmentShader: shader.fragmentShader,
transparent: true
} );

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
matSteel.bumpScale = 0.5;
matGold.envMap = textureCube;
matGold.needsUpdate = true;
matPlastic.envMap = textureCube;
matPlastic.needsUpdate = true;
matSteelClear.envMap = textureCube;
matSteelClear.needsUpdate = true;
matPlasticWhite.envMap = textureCube;
matPlasticWhite.needsUpdate = true;

var materials = [
matGold,     //0 matGold
matPlasticBlack,   //1 matSteel
matEkranGorizont,     //2 matEkran
matGlass,     //3
matPlastic,   //4
matSteelClear,     //5
new THREE.MeshBasicMaterial({
  color : 0xff0000
})];
var materials2 = [
matGold,     //0 matGold
matPlasticBlack,   //1 matSteel
matEkran,     //2 matEkran
matGlass,     //3
matPlastic,   //4
matSteelClear,     //5
new THREE.MeshStandardMaterial({
  color : 0xff0000
})];

var matKrisha = [
new THREE.MeshStandardMaterial({
  color : 0x030303
}),
new THREE.MeshStandardMaterial({
  color : 0xffff4d
}),
new THREE.MeshStandardMaterial({
  color : 0xbfbfbf
}),
];

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
