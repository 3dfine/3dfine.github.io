let matOpora = [ new THREE.MeshStandardMaterial({ color : 0x020202, metalness: 0.9, roughness: 0.4 }) ];
let matUstRama = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matLopasti = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matFiltrKorman = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matRekuperator = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matPauk = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstVent = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
let matUstVent2 = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];

// let matBarashki = [ new THREE.MeshStandardMaterial( { color : 0x000000 } ) ];
let matBarashki = [new THREE.MeshPhongMaterial( {
  color: 0x000000,
  specular: 0x222222,
  shininess: 35,
  normalMap: textureLoader.load( 'textures/barashka.png' ),
  normalScale: new THREE.Vector2( 1.0, 1.0 )
} ) ];
let matPotokDef = new THREE.MeshPhongMaterial( { color: 0xff0000, transparent: true, opacity: 0.0 });
matOpora[0].envMap = textureCube;
matOpora[0].needsUpdate = true;

matUstRama[0] = matSteel;
matUstRama[1] = matPlastic;
matUstRama[2] = stainlessGunMetal;
matUstRama[3] = matBlueGloss;
matUstRama[4] = matPlasticWhite;

matLopasti[0] = matPlastic;
matLopasti[1] = matPlastic;

matFiltrKorman[0] = matRAL7045;
matFiltrKorman[1] = matSteel;
matFiltrKorman[2] = matSteelClear;
matFiltrKorman[3] = new THREE.MeshLambertMaterial({
  map: filtr2_hight
});
matFiltrKorman[3].map.wrapS = THREE.RepeatWrapping;

matFiltrKorman[4] = new THREE.MeshLambertMaterial({
  map: filtr1_hight
});

matRekuperator[0] = matSteel;
matRekuperator[1] = matPlastic;
matRekuperator[2] = stainlessGunMetal;
matRekuperator[3] = stainlessGunMetal;

matPauk[0] = matSteel;
matPauk[1] = matPlastic;
matPauk[2] = stainlessGunMetal;
matPauk[3] = stainlessGunMetal;

matUstVent[0] = matRAL7045;
matUstVent[1] = matPlastic;
matUstVent[2] = matRubber;
matUstVent[3] = matAluminuim;
matUstVent[4] = matPlasticWhite;
matUstVent[5] = matPlasticWhite;
matUstVent2[0] = matAluminuim;
matUstVent2[1] = matPlastic;
matUstVent2[2] = matSteelClear;
matUstVent2[3] = matRAL7045;

let matUstKrisha = [ new THREE.MeshStandardMaterial( { color : 0xffffff } ) ];
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
  opacity: 0.5,
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
