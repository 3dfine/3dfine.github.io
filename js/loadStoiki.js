let matStoikaVert = [ new THREE.MeshStandardMaterial( { color : 0xff0000 } ) ];
let matStoikaGoriz = [ new THREE.MeshStandardMaterial( { color : 0x00ff00 } ) ];
let matStoikaGoriz2 = [ new THREE.MeshStandardMaterial( { color : 0x00ff00 } ) ];
let matHolodVetrina = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matHolodVetrinaGlass = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
// models
let sx_43 = new THREE.Object3D();
let sx_32_vert = new THREE.Object3D();
let sx_32 = new THREE.Object3D();
let sx_19_vert = new THREE.Object3D();
let holodVetrina = new THREE.Object3D();
let holodVetrinaGlass = new THREE.Object3D();
let vert_fon;
let vert_fonGor;
let holodVetrinaGI;
let textureCubeBlur;
let marbleGranite;
let stoikiGroup = new THREE.Group();
stoikiGroup.onLoaded = false;
stoikiGroup.visible = false;

function loadStoiki() {
  scene.background = new THREE.Color( 0xffffff );
  scene.fog.color = scene.background;
  dirLight.intensity = 0.2;
  hemiLight.intensity = 0.0;
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
    holodVetrinaGI = texLoader.load( 'textures/holodVetrinaGI.jpg' );
    marbleGranite = texLoader.load( 'textures/MarbleGranite.jpg' );
    textureCubeBlur = new THREE.CubeTextureLoader(managerLoad)
    .setPath( 'textures/cube/station/' )
    .load( [ 'bs_0000.jpg', 'bs_0001.jpg', 'bs_0002.jpg', 'bs_0003.jpg', 'bs_0004.jpg', 'bs_0005.jpg' ] );
    // loader3.load( 'models/fbx/SX_43_LOW.fbx', function( object ) {
    //   object.children[0].material = matStoikaGoriz;
    //   //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
    //   object.children[0].materialDefult = matStoikaGoriz;
    //   object.scale.multiplyScalar( 1.0 );
    //   sx_43.add( object );
    // });
    // loader3.load( 'models/fbx/SX_32_low.fbx', function( object ) {
    //   object.children[0].material = matStoikaGoriz2;
    //   //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
    //   object.children[0].materialDefult = matStoikaGoriz2;
    //   object.scale.multiplyScalar( 1.0 );
    //   sx_32.add( object );
    // });
    loader3.load( 'models/fbx/SX_32_vert_low.fbx', function( object ) {
      object.children[0].material = matStoikaVert;
      //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
      object.children[0].materialDefult = matStoikaVert;
      object.scale.multiplyScalar( 1.0 );
      sx_32_vert.add( object );
    });
    loader3.load( 'models/fbx/holodVetrina.fbx', function( object ) {
      object.children[0].material = matHolodVetrina;
      //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
      object.children[0].materialDefult = matHolodVetrina;
      object.scale.multiplyScalar( 1.0 );
      holodVetrina.add( object );
    });
    loader3.load( 'models/fbx/holodVetrinaGlass.fbx', function( object ) {
      object.children[0].material = matHolodVetrinaGlass;
      //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
      object.children[0].materialDefult = matHolodVetrinaGlass;
      object.scale.multiplyScalar( 1.0 );
      holodVetrinaGlass.add( object );
    });
    // sx_43.position.set( 1070, 0, 0 );
    sx_32_vert.position.set( 0, 0, 0 );
    // sx_32.position.set( -900, 0, 0 );
    holodVetrina.position.set( -1500, 0, 0 );
    holodVetrinaGlass.position.set( -1500, 0, 0 );
    stoikiGroup.position.set( 1300, -600, 0 );
    // stoikiGroup.add(sx_43);
    stoikiGroup.add(sx_32_vert);
    // stoikiGroup.add(sx_32);
    stoikiGroup.add(holodVetrina);
    stoikiGroup.add(holodVetrinaGlass);
  }
}

function matStoikiSetup() {

  matHolodVetrina.push( new THREE.MeshBasicMaterial( { color : 0x263238 } ) );//1
  matHolodVetrina.push( new THREE.MeshBasicMaterial( { color : 0xF57F17 } ) );//2
  matHolodVetrina.push( new THREE.MeshBasicMaterial( { color : 0x0D47A1 } ) );//3
  matHolodVetrina.push( new THREE.MeshBasicMaterial( { color : 0xaaaaaa } ) );//4
  matHolodVetrina.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//5
  matHolodVetrina.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//6
  matHolodVetrina[2] = matSteelNerg;
  matHolodVetrina[0].envMap = textureCubeBlur;
  matHolodVetrina[0].reflectivity = 0.5;
  matHolodVetrina[1].envMap = textureCubeBlur;
  matHolodVetrina[1].reflectivity = 0.8;
  matHolodVetrina[3].envMap = textureCubeBlur;
  matHolodVetrina[3].reflectivity = 0.4;
  matHolodVetrina[4].envMap = textureCubeBlur;
  matHolodVetrina[4].reflectivity = 0.8;
  matHolodVetrina[5].map = marbleGranite;
  marbleGranite.wrapS = THREE.RepeatWrapping;
  marbleGranite.wrapT = THREE.RepeatWrapping;
  marbleGranite.repeat.set( 3, 5 );
  matHolodVetrina[5].envMap = textureCubeBlur;
  matHolodVetrina[5].reflectivity = 0.6;

  matHolodVetrinaGlass[0] = matGlass;
  matHolodVetrinaGlass.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//1
  matHolodVetrinaGlass.push( new THREE.MeshBasicMaterial( { color : 0x212121 } ) );//2
  matHolodVetrinaGlass[1] = matGlass;
  matHolodVetrinaGlass[2].envMap = textureCube;
  matHolodVetrinaGlass[2].reflectivity = 0.5;
  // matHolodVetrina[4] = matChrome;

  matHolodVetrina.forEach( function( item ) {
    item.lightMap = holodVetrinaGI;
    item.lightMapIntensity = 1.4;
  } );

  matChrome.envMap = textureCube;
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
