let matStoikaVert = [ new THREE.MeshStandardMaterial( { color : 0xff0000 } ) ];
let matStoikaGoriz = [ new THREE.MeshStandardMaterial( { color : 0x00ff00 } ) ];
let matStoikaGoriz2 = [ new THREE.MeshStandardMaterial( { color : 0x00ff00 } ) ];
// models
let sx_43 = new THREE.Object3D();
let sx_32_vert = new THREE.Object3D();
let sx_32 = new THREE.Object3D();
let sx_19_vert = new THREE.Object3D();
let vert_fon;
let vert_fonGor;
let stoikiGroup = new THREE.Group();
stoikiGroup.onLoaded = false;
stoikiGroup.visible = false;

function loadStoiki() {
  scene.background = new THREE.Color( 0xffffff );
  dirLight.intensity = 0.2;
  hemiLight.intensity = 1.0;
  light.intensity = 1.0;
  light2.intensity = 0.4;
  if(!stoikiGroup.onLoaded) {
    let managerLoad = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
    managerLoad.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      blockLoad.style.display='block';
      blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
    };
    managerLoad.onLoad = function ( ) {
      blockLoad.style.display='none';
      matStoikiSetup();
      scene.add( stoikiGroup );
      stoikiGroup.onLoaded = true;
      stoikiGroup.visible = true;
      globalToTuLoaded = true;
    }
    let loader3 = new THREE.FBXLoader(managerLoad);
    let texLoader = new THREE.TextureLoader(managerLoad);
    vert_fon = texLoader.load( 'textures/fon/surface-screen.jpg' );
    vert_fonGor = texLoader.load( 'textures/fon/surface-screen_TV.jpg' );

    loader3.load( 'models/fbx/SX_43_LOW.fbx', function( object ) {
      object.children[0].material = matStoikaGoriz;
      //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
      object.children[0].materialDefult = matStoikaGoriz;
      object.scale.multiplyScalar( 1.0 );
      sx_43.add( object );
    });
    loader3.load( 'models/fbx/SX_32_low.fbx', function( object ) {
      object.children[0].material = matStoikaGoriz2;
      //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
      object.children[0].materialDefult = matStoikaGoriz2;
      object.scale.multiplyScalar( 1.0 );
      sx_32.add( object );
    });
    loader3.load( 'models/fbx/SX_32_vert_low.fbx', function( object ) {
      object.children[0].material = matStoikaVert;
      //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
      object.children[0].materialDefult = matStoikaVert;
      object.scale.multiplyScalar( 1.0 );
      sx_32_vert.add( object );
    });
    sx_43.position.set( 1070, 0, 0 );
    sx_32_vert.position.set( 0, 0, 0 );
    sx_32.position.set( -900, 0, 0 );

    stoikiGroup.position.set( -200, -600, 0 );
    stoikiGroup.add(sx_43);
    stoikiGroup.add(sx_32_vert);
    stoikiGroup.add(sx_32);
  }
}

function matStoikiSetup() {
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
