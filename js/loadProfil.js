let matProfil = [ new THREE.MeshStandardMaterial( { color : 0x999999 } ) ];
let profil_rehauGI;
let profil_rehau = new THREE.Object3D();
profil_rehau.visible = false;
profil_rehau.onLoaded = false;

function loadProfil() {
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
          object.children[i].castShadow = true;
          object.children[i].receiveShadow = true;
        }
        object.scale.multiplyScalar( 4.5 );
        profil_rehau.add( object );
        profil_rehau.onLoaded = true;
    });
    matProfilSetup();
    profil_rehau.position.set( 0, -600, 0 );
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

  matProfil.push( new THREE.MeshStandardMaterial( { color : 0x111111 } ) );
  matProfil[5].map = profil_rehauGI;
  matProfil[5].aoMap = profil_rehauGI;
  matProfil[5].aoMapIntensity = 1;

  matProfil.push( matGlass );
  matProfil[6] = matGlass ;
  matProfil[6].aoMap = profil_rehauGI;
  matProfil[6].aoMapIntensity = 1;
}
