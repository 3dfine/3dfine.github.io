let matOpora = [ new THREE.MeshStandardMaterial({ color : 0x020202, metalness: 0.9, roughness: 0.4 }) ];
let matUstRama = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matLopasti = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matFiltrKorman = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matRekuperator = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matPauk = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstVent = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstVent2 = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matKompressor = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];

// matUstRama.name = 'matUstRama777';

// let matBarashki = [ new THREE.MeshStandardMaterial( { color : 0x000000 } ) ];
let matBarashki = [new THREE.MeshPhongMaterial( {
  color: 0x000000,
  specular: 0x222222,
  shininess: 35,
  normalMap: textureLoader.load( 'textures/barashka.png' ),
  normalScale: new THREE.Vector2( 1.0, 1.0 )
} ) ];
let matPotokDef = new THREE.MeshPhongMaterial( { color: 0xff0000, transparent: true, opacity: 0.0 });
// matOpora[0].envMap = textureCube;
// matOpora[0].needsUpdate = true;

let matUstKrisha = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
matUstKrisha[0] = new THREE.MeshStandardMaterial({
  color : 0x111111 });
matUstKrisha[1] = new THREE.MeshPhongMaterial({
  color : 0xFDD835
});
matUstKrisha[2] = new THREE.MeshPhongMaterial({
  color : 0x90A4AE
});
matUstKrisha[3] = new THREE.MeshStandardMaterial({
  color : 0xbfbfbf
});

let matPotokRed = new THREE.MeshPhongMaterial( {
  color: 0xff0000,
  specular: 0x222222,
  shininess: 35,
  transparent: true,
  opacity: 0.6,
  side: THREE.DoubleSide
} );
let matPotokPink = new THREE.MeshPhongMaterial( {
  color: 0xF77FBE,
  specular: 0x222222,
  shininess: 35,
  transparent: true,
  opacity: 0.7,
  side: THREE.DoubleSide
} );
let matPotokDarkBlue = new THREE.MeshPhongMaterial( {
  color: 0x0000ff,
  specular: 0x222222,
  shininess: 35,
  transparent: true,
  opacity: 0.6,
  side: THREE.DoubleSide
} );
let matPotokBlue = new THREE.MeshPhongMaterial( {
  color: 0x3c9eff,
  specular: 0x222222,
  shininess: 35,
  transparent: true,
  opacity: 0.7,
  side: THREE.DoubleSide
} );


let matHolodSetup =  function() {
  matAluminuim.envMap = textureCube;
  matRAL7045.envMap = textureCube;
  matBlueGlossDark.envMap = textureCube;
  matBlueGloss.envMap = textureCube;
  matBlueGloss.needsUpdate = true;
  matPlastic.envMap = textureCube;
  matPlastic.needsUpdate = true;
  matPlasticWhite.envMap = textureCube;
  matPlasticWhite.needsUpdate = true;

  stainlessGunMetal.envMap = textureCube;
  stainlessGunMetal.map = StainlessGunMetal_albedo;
  stainlessGunMetal.roughnessMap = StainlessGunMetal_roughness;
  stainlessGunMetal.needsUpdate = true;

  matSteel.envMap = textureCube;
  matSteel.roughnessMap = matSteelTexture;
  matSteel.needsUpdate = true;

  matCopper.envMap = textureCube;
  matCopper.map = RepolishedCopper_albedo;
  matCopper.roughnessMap = RepolishedCopper_roughness;

  matUstRama[0] = matSteel;
  matUstRama[1] = matPlastic;
  matUstRama[2] = stainlessGunMetal;
  matUstRama[3] = matBlueGloss;
  matUstRama[4] = matPlasticWhite;

  matKompressor[1-1] = stainlessGunMetal;
  matKompressor[2-1] = matDarkDoubleSide;
  matKompressor[3-1] = matPlastic;
  matKompressor[4-1] = matCopper;
  matKompressor[5-1] = matBlueGlossDark;
  matKompressor[6-1] = matPlasticWhite;
  matKompressor[7-1] = matRubber;

  matLopasti[0] = matPlastic;
  matLopasti[1] = matPlastic;

  matFiltrKorman[0] = matRAL7045;
  matFiltrKorman[1] = matSteel;
  matFiltrKorman[2] = matSteelClear;
  matFiltrKorman[3] = new THREE.MeshLambertMaterial({
  map: filtr2_hight
  });

  matFiltrKorman[4] = new THREE.MeshLambertMaterial({
  map: filtr1_hight
  });

  matRekuperator[0] = matDarkDoubleSide;
  matRekuperator[1] = matAluminuim;
  matRekuperator[2] = stainlessGunMetal;
  matRekuperator[3] = stainlessGunMetal;

  matPauk[1-1] = stainlessGunMetal;
  matPauk[2-1] = matYellowDoubleSide;
  matPauk[3-1] = matCopper;
  matPauk[4-1] = stainlessGunMetal;
  matPauk[5-1] = matDarkDoubleSide;

  matUstVent[1-1] = matAluminuim; //matRAL7045
  matUstVent[2-1] = stainlessGunMetal;
  matUstVent[3-1] = matPlastic;
  matUstVent[4-1] = matRAL7045;
  matUstVent[5-1] = matRubber;
  matUstVent[6-1] = matPlasticWhite;

  console.log('3dfine@mail.ru');
}
