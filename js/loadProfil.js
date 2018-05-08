let matProfil = [ new THREE.MeshStandardMaterial( { color : 0x999999 } ) ];
let profil_rehauGI;
let profil_rehau = new THREE.Object3D();
profil_rehau.visible = true;
profil_rehau.onLoaded = false;

function loadProfil() {
  scene.background = new THREE.Color( 0xffffff );
  dirLight.intensity = 0.2;
  hemiLight.intensity = 1.0;
  light.intensity = 1.0;
  light2.intensity = 0.4;
  if(!profil_rehau.onLoaded) {
    let managerPrifilLoad = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
    managerPrifilLoad.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      blockLoad.style.display='block';
      blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
    };
    managerPrifilLoad.onLoad = function ( ) {
      blockLoad.style.display='none';
    }
    let texLoader = new THREE.TextureLoader(managerPrifilLoad);
    let loader3 = new THREE.FBXLoader(managerPrifilLoad);
    profil_rehauGI = texLoader.load( 'textures/profil_rehauGI.jpg' );

    loader3.load( 'models/fbx/profil_rehau.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matProfil;
          //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
          object.children[i].materialDefult = matProfil;
        }
        object.scale.multiplyScalar( 4.7 );
        profil_rehau.add( object );
        profil_rehau.onLoaded = true;
        profil_rehau.visible = true;
        globalToTuLoaded = true;
    });
    matProfilSetup();
    profil_rehau.position.set( 0, -650, 0 );
    scene.add( profil_rehau );
  }
}

function matProfilSetup() {
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

  matProfil.push( new THREE.MeshStandardMaterial( { color : 0x111111 } ) );
  matProfil[1].map = profil_rehauGI;
  matProfil[1].aoMap = profil_rehauGI;
  matProfil[1].aoMapIntensity = 1;
  matProfil[1].lightMap = profil_rehauGI;
  matProfil[1].lightMapIntensity = 1;

  matProfil.push( new THREE.MeshStandardMaterial( { color : 0xff0000 } ) );
  matProfil[2].map = profil_rehauGI;
  matProfil[2].aoMap = profil_rehauGI;
  matProfil[2].aoMapIntensity = 1;

  matProfil.push( new THREE.MeshStandardMaterial( { color : 0xA7FFEB } ) );
  matProfil[3].map = profil_rehauGI;
  matProfil[3].aoMap = profil_rehauGI;
  matProfil[3].aoMapIntensity = 1;

  matProfil.push( new THREE.MeshStandardMaterial( { color : 0x111111 } ) );
  matProfil[4].map = profil_rehauGI;
  matProfil[4].aoMap = profil_rehauGI;
  matProfil[4].aoMapIntensity = 1;

  matProfil.push( new THREE.MeshStandardMaterial( { color : 0xaaaaaa } ) );
  matProfil[5].envMap = textureCube;
  matProfil[5].envMapIntensity = 1.0
  matProfil[5].needsUpdate = true;
  matProfil[5].metalness = 1.0;
  matProfil[5].roughness = 0.25;
  // matProfil[5].map = profil_rehauGI;
  matProfil[5].aoMap = profil_rehauGI;
  matProfil[5].aoMapIntensity = 1;

  matProfil.push( matGlass );
  matProfil[6] = matGlass ;
  matProfil[6].aoMap = profil_rehauGI;
  matProfil[6].aoMapIntensity = 1;
}
function profilColor1() {
  matProfil[0].color = {r: 0.6, g: 0.6, b: 0.6};
}
function profilColor2() {
  matProfil[0].color = {r: 62/2000, g: 39/2000, b: 35/2000};
}
function profilColor3() {
  matProfil[0].color = {r: 100/255, g: 1/255, b: 1/255};
}
