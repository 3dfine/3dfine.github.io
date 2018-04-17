
let matStoikiSetup =  function() {
  matGold.envMap = textureCube;
  matGold.needsUpdate = true;
  matWood1.envMap = textureCube;
  matWood1.needsUpdate = true;
  matSteelNerg.envMap = textureCube;
  matSteelNerg.needsUpdate = true;

  matEkranGorizont.map = vert_fonGor;
  matEkran.map = vert_fon;
  matWood1.map = wood1;
  matWood1.roughnessMap = wood1rough;
  matWood1.needsUpdate = true;
  // matSteelNerg.map = matSteelTexture2;
  // matSteelNerg.roughnessMap = matSteelTexture2;
  // matSteelNerg.needsUpdate = true;


  matStoikaGoriz[0] = matGold;
  matStoikaGoriz[1] = matPlasticBlack;
  matStoikaGoriz[2] = matEkranGorizont;
  matStoikaGoriz[3] = matGlass;
  matStoikaGoriz[4] = matPlastic;
  matStoikaGoriz[5] = matSteelClear;

  matStoikaGoriz2[0] = matSteelNerg;
  matStoikaGoriz2[1] = matPlasticBlack;
  matStoikaGoriz2[2] = matEkranGorizont;
  matStoikaGoriz2[3] = matGlass;
  matStoikaGoriz2[4] = matPlastic;
  matStoikaGoriz2[5] = matSteelClear;

  matStoikaVert[0] = matWood1;
  matStoikaVert[1] = matPlasticBlack;
  matStoikaVert[2] = matEkran;
  matStoikaVert[3] = matGlass;
  matStoikaVert[4] = matPlastic;
  matStoikaVert[5] = matSteelClear;
}
