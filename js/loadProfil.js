let matProfil = [
  new THREE.MeshStandardMaterial({
    color : 0x999999
  }),
  new THREE.MeshStandardMaterial({
    color : 0x111111
  }),
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  }),
  new THREE.MeshStandardMaterial({
    color : 0xA7FFEB
  }),
  new THREE.MeshStandardMaterial({
    color : 0x111111
  }),
  new THREE.MeshStandardMaterial({
    color : 0xaaaaaa
  }),
];
let profil_rehauGI;
let profil_rehau = new THREE.Object3D();
profil_rehau.visible = false;
profil_rehau.onLoaded = false;

let loadProfil =  function() {
  if(!profil_rehau.onLoaded) {
    let managerPrifilLoad = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
    managerPrifilLoad.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
    };
    managerPrifilLoad.onLoad = function ( ) {
      blockLoad.style.display='none';
    }
    let loader3 = new THREE.FBXLoader(managerPrifilLoad);
    blockLoad.style.display='block';

    profil_rehauGI = textureLoader.load( 'textures/profil_rehauGI.jpg' );

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
        console.log(profil_rehau);
        profil_rehau.onLoaded = true;
    });
    matProfilSetup();
    profil_rehau.position.set( 0, -600, 0 );
    scene.add( profil_rehau );
  }
}
