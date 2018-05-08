const matKotedgMainWalls = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
const matKotedgInSideWalls = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
const matKotedgGround = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
const matkotedgRamaWindowNiz = [ new THREE.MeshBasicMaterial( { color : 0x090909 } ) ];
const matglassKotedgP = [ matGlass ];
const matWaterKotedgP = [ matGlass ];
let mainWalls_GI, inSideWalls_GI, kotedgGround_GI, ramaNiz_GI, concreteCeiling, concreteCeiling_rough, concreteCeiling_NM, wood4, parket1;
let cleanBronze, cleanBronze_NM, cleanBronze_rough;
const kotedgP = new THREE.Group();
kotedgP.visible = true;
kotedgP.onLoaded = false;
const kotedgMainWalls = new THREE.Object3D();
const kotedgInSideWals = new THREE.Object3D();
const kotedgGround = new THREE.Object3D();
const kotedgRamaWindowNiz = new THREE.Object3D();
const glassKotedgP = new THREE.Object3D();
const water = new THREE.Object3D();

function loadKotedgP() {
  scene.background = new THREE.Color(0x0c151b);
  dirLight.intensity = 0.0;
  hemiLight.intensity = 0.0;
  light.intensity = 0.0;
  light2.intensity = 0.0;

  if(!kotedgP.onLoaded) {
    let manager = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
    manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      blockLoad.style.display='block';
      blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
    };
    manager.onLoad = function ( ) {
      matKotedgSetup();
      kotedgP.onLoaded = true;
      kotedgP.visible = true;
      blockLoad.style.display='none';
      globalToTuLoaded = true;
      kotedgP.scale.multiplyScalar( 1.0 );
    }
    let texLoader = new THREE.TextureLoader(manager);
    let loader3 = new THREE.FBXLoader(manager);
    mainWalls_GI = texLoader.load( 'textures/mainWalls_GI.png' );
    mainWalls_GI.anisotropy = maxAnisotropy;
    inSideWalls_GI = texLoader.load( 'textures/wallsInSideGI.jpg' );
    inSideWalls_GI.anisotropy = maxAnisotropy;
    kotedgGround_GI = texLoader.load( 'textures/groundKotedgP.png' );
    ramaNiz_GI = texLoader.load( 'textures/rama_window_nizGI.jpg' );
    trava = texLoader.load( 'textures/trava.jpg' );
    concreteCeiling = texLoader.load( 'textures/Concrete/ConcreteCeiling.jpg' );
    concreteCeiling.anisotropy = maxAnisotropy;
    concreteCeiling_rough = texLoader.load( 'textures/Concrete/ConcreteCeiling_rough.jpg' );
    concreteCeiling_rough.anisotropy = maxAnisotropy;
    concreteCeiling_NM = texLoader.load( 'textures/Concrete/ConcreteCeiling_NM.jpg' );
    concreteCeiling_NM.anisotropy = maxAnisotropy;
    wood4 = texLoader.load( 'textures/wood/wood4.jpg' );
    wood4.anisotropy = maxAnisotropy;
    parket1 = texLoader.load( 'textures/wood/parket1.jpg' );
    parket1.anisotropy = maxAnisotropy;

    cleanBronze = texLoader.load( 'textures/metals/CleanBronze.jpg' );
    cleanBronze.anisotropy = maxAnisotropy;
    cleanBronze_rough = texLoader.load( 'textures/metals/CleanBronze_rough.jpg' );
    cleanBronze_rough.anisotropy = maxAnisotropy;
    cleanBronze_NM = texLoader.load( 'textures/metals/CleanBronze_NM.jpg' );
    cleanBronze_NM.anisotropy = maxAnisotropy;

    loader3.load( 'models/fbx/kottedg/mainWalls.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matKotedgMainWalls;
          object.children[i].materialDefult = matKotedgMainWalls;
        }
        kotedgMainWalls.add( object );
    });
    loader3.load( 'models/fbx/kottedg/wallsInSide.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matKotedgInSideWalls;
          object.children[i].materialDefult = matKotedgInSideWalls;
        }
        kotedgInSideWals.add( object );
    });
    loader3.load( 'models/fbx/kottedg/groundP.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matKotedgGround;
          object.children[i].materialDefult = matKotedgGround;
        }
        kotedgGround.add( object );
    });
    loader3.load( 'models/fbx/kottedg/rama_window_niz.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matkotedgRamaWindowNiz;
          object.children[i].materialDefult = matkotedgRamaWindowNiz;
        }
        kotedgRamaWindowNiz.add( object );
    });
    loader3.load( 'models/fbx/kottedg/glassKotedgP.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matglassKotedgP;
          object.children[i].materialDefult = matglassKotedgP;
        }
        glassKotedgP.add( object );
    });
    loader3.load( 'models/fbx/kottedg/water.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matWaterKotedgP;
          object.children[i].materialDefult = matWaterKotedgP;
        }
        water.add( object );
    });
    kotedgP.add( kotedgMainWalls );
    kotedgP.add( kotedgInSideWals );
    kotedgP.add( kotedgGround );
    kotedgP.add( kotedgRamaWindowNiz );
    kotedgP.add( glassKotedgP );
    kotedgP.add( water );

    kotedgP.position.set( 100, -350, 0 );
    kotedgP.rotation.y = THREE.Math.degToRad(90);

  } else {
    kotedgP.visible = true;
  }
}

function matKotedgSetup() {
  // matKotedgMainWalls[0].envMap = textureCubeSky;
  // matKotedgMainWalls[0].envMapIntensity = 1.0;
  // matKotedgMainWalls[0].needsUpdate = true;
  // matKotedgMainWalls[0].metalness = 0.6;
  // matKotedgMainWalls[0].roughness = 0.4;
  matKotedgMainWalls.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//1
  matKotedgMainWalls.forEach( function( item ) {
    item.lightMap = mainWalls_GI;
    item.lightMapIntensity = 1.0;
  } );

  matKotedgInSideWalls.push( new THREE.MeshStandardMaterial( { color : 0xffffff } ) );//1
  matKotedgInSideWalls[1].map = concreteCeiling;
  concreteCeiling.wrapS = THREE.RepeatWrapping;
  concreteCeiling.wrapT = THREE.RepeatWrapping;
  concreteCeiling.repeat.set( 4, 4 );
  matKotedgInSideWalls[1].envMap = textureCubeSky;
  matKotedgInSideWalls[1].roughnessMap = concreteCeiling_rough;
  matKotedgInSideWalls[1].normalMap = concreteCeiling_NM;
  matKotedgInSideWalls.push( new THREE.MeshStandardMaterial( { color : 0xffffff } ) );//2
  matKotedgInSideWalls[2].envMap = textureCube;
  matKotedgInSideWalls[2].metalness = 0.4;
  matKotedgInSideWalls[2].roughness = 0.3;
  matKotedgInSideWalls[2].map = parket1;
  parket1.wrapS = THREE.RepeatWrapping;
  parket1.wrapT = THREE.RepeatWrapping;
  parket1.repeat.set( 16, 16 );
  matKotedgInSideWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//3
  matKotedgInSideWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//4
  matKotedgInSideWalls[4].map = wood4;
  wood4.wrapS = THREE.RepeatWrapping;
  wood4.wrapT = THREE.RepeatWrapping;
  wood4.repeat.set( 4, 30 );

  matKotedgInSideWalls.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//5
  matKotedgInSideWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//6
  matKotedgInSideWalls[6] = matKotedgInSideWalls[2];
  matKotedgInSideWalls.push( new THREE.MeshStandardMaterial( { color : 0xffffff } ) );//7
  matKotedgInSideWalls[7].envMap = textureCube;
  matKotedgInSideWalls[7].roughnessMap = cleanBronze_rough;
  cleanBronze_rough.wrapS = THREE.RepeatWrapping;
  cleanBronze_rough.wrapT = THREE.RepeatWrapping;
  cleanBronze_rough.repeat.set( 3, 3 );
  matKotedgInSideWalls[7].metalness = 0.8;
  matKotedgInSideWalls[7].roughness = 1.0;
  matKotedgInSideWalls[7].map = cleanBronze;
  cleanBronze.wrapS = THREE.RepeatWrapping;
  cleanBronze.wrapT = THREE.RepeatWrapping;
  cleanBronze.repeat.set( 3, 3 );
  matKotedgInSideWalls[7].normalMap = cleanBronze_NM;
  matKotedgInSideWalls[7].normalScale = new THREE.Vector2(0.2, 0.2)
  cleanBronze_NM.wrapS = THREE.RepeatWrapping;
  cleanBronze_NM.wrapT = THREE.RepeatWrapping;
  cleanBronze_NM.repeat.set( 3, 3 );

  matKotedgInSideWalls.forEach( function( item ) {
    item.lightMap = inSideWalls_GI;
    item.lightMapIntensity = 1.0;
  } );
  matKotedgGround.push( new THREE.MeshBasicMaterial( { color : 0xaaaaaa } ) );//1
  matKotedgGround.push( new THREE.MeshStandardMaterial( { color : 0xffffff } ) );//2
  matKotedgGround[1].map = trava;
  trava.wrapS = THREE.RepeatWrapping;
  trava.wrapT = THREE.RepeatWrapping;
  trava.repeat.set( 4, 8 );
  matKotedgGround[2].map = concreteCeiling;
  matKotedgGround[2].envMap = textureCubeSky;
  matKotedgGround[2].envMapIntensity = 1.0;
  matKotedgGround[2].needsUpdate = true;
  matKotedgGround[2].roughnessMap = concreteCeiling_rough;
  concreteCeiling_rough.wrapS = THREE.RepeatWrapping;
  concreteCeiling_rough.wrapT = THREE.RepeatWrapping;
  concreteCeiling_rough.repeat.set( 4, 4 );
  matKotedgGround[2].normalMap = concreteCeiling_NM;
  concreteCeiling_NM.wrapS = THREE.RepeatWrapping;
  concreteCeiling_NM.wrapT = THREE.RepeatWrapping;
  concreteCeiling_NM.repeat.set( 4, 4 );
  matKotedgGround[2].metalness = 0.5;
  matKotedgGround[2].roughness = 0.6;
  matKotedgGround.forEach( function( item ) {
    item.lightMap = kotedgGround_GI;
    item.lightMapIntensity = 0.7;
  } );
  matkotedgRamaWindowNiz.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//1
  matkotedgRamaWindowNiz.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//2
  matkotedgRamaWindowNiz.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//3
  matkotedgRamaWindowNiz.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//4
  matkotedgRamaWindowNiz.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//5
  matkotedgRamaWindowNiz.push( new THREE.MeshBasicMaterial( { color : 0x090909 } ) );//6
  matkotedgRamaWindowNiz.forEach( function( item ) {
    item.lightMap = ramaNiz_GI;
    item.lightMapIntensity = 0.85;
  } );
}
