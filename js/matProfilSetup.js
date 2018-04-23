
let matProfilSetup =  function() {

  matProfil[0].envMap = textureCube;
  matProfil[0].envMapIntensity = 1.0
  matProfil[0].needsUpdate = true;
  matProfil[0].metalness = 0.2;
  matProfil[0].roughness = 0.2;

  matProfil[0].map = profil_rehauGI;
  matProfil[0].aoMap = profil_rehauGI;
  matProfil[0].aoMapIntensity = 1;
  matProfil[0].lightMap = profil_rehauGI;
  matProfil[0].lightMapIntensity = 1;

  matProfil[1].map = profil_rehauGI;
  matProfil[1].aoMap = profil_rehauGI;
  matProfil[1].aoMapIntensity = 1;
  matProfil[1].lightMap = profil_rehauGI;
  matProfil[1].lightMapIntensity = 1;

  matProfil[2].map = profil_rehauGI;
  matProfil[2].aoMap = profil_rehauGI;
  matProfil[2].aoMapIntensity = 1;

  matProfil[3].map = profil_rehauGI;
  matProfil[3].aoMap = profil_rehauGI;
  matProfil[3].aoMapIntensity = 1;

  matProfil[5].map = profil_rehauGI;
  matProfil[5].aoMap = profil_rehauGI;
  matProfil[5].aoMapIntensity = 1;

  matProfil[6] = matGlass ;
  matProfil[6].aoMap = profil_rehauGI;
  matProfil[6].aoMapIntensity = 1;
}
