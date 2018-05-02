let matUsadbaKrisha = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbaWalls = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbawalls2floor = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbawalls1floor = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbaGround = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matGlass01 = [ matGlass];
let krisha_GI, walls_GI, walls2floor_GI, walls1floor_GI, cherepica, vagonka, vagonka2, vagonka3, wood2, wood2_2, wood3, groundGI, trava;
let usadba = new THREE.Group();
usadba.visible = true;
usadba.onLoaded = false;
let krishaUsadba = new THREE.Object3D();
let wallsUsadba = new THREE.Object3D();
let walls2floor = new THREE.Object3D();
let walls1floor = new THREE.Object3D();
let glass01 = new THREE.Object3D();
let ground01 = new THREE.Object3D();

function loadUsadba() {
  if(!usadba.onLoaded) {
    let managerUsadba = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
    managerUsadba.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      blockLoad.style.display='block';
      blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
    };
    managerUsadba.onLoad = function ( ) {
      matUsadbaSetup();
      usadba.onLoaded = true;
      usadba.visible = true;
      blockLoad.style.display='none';
      globalToTuLoaded = true;
      usadba.scale.multiplyScalar( 1.7 );
      glass01.children[0].children.sort(compareName);

      console.log(glass01);
    }
    let texLoader = new THREE.TextureLoader(managerUsadba);
    let loader3 = new THREE.FBXLoader(managerUsadba);
    krisha_GI = texLoader.load( 'textures/krisha_GI.jpg' );
    walls_GI = texLoader.load( 'textures/wall_main_outsideGI.jpg' );
    walls2floor_GI = texLoader.load( 'textures/walls2floorGI.jpg' );
    walls1floor_GI = texLoader.load( 'textures/walls1floorGI.jpg' );
    // cherepica = texLoader.load( 'textures/biskuid.jpg' );
    cherepica = texLoader.load( 'textures/cherepica2.jpeg' );
    vagonka = texLoader.load( 'textures/wood/vagonka.jpg' );
    vagonka2 = texLoader.load( 'textures/wood/vagonka2.jpg' );
    vagonka3 = texLoader.load( 'textures/wood/vagonka3.jpg' );
    wood2 = texLoader.load( 'textures/wood/wood2.jpg' );
    wood2_2 = texLoader.load( 'textures/wood/wood2_2.jpg' );
    wood3 = texLoader.load( 'textures/wood/wood3.jpg' );
    groundGI = texLoader.load( 'textures/GroundGI.jpg' );
    trava = texLoader.load( 'textures/trava.jpg' );
    loader3.load( 'models/fbx/usadba/krisha.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matUsadbaKrisha;
          object.children[i].materialDefult = matUsadbaKrisha;
        }
        krishaUsadba.add( object );
    });
    loader3.load( 'models/fbx/usadba/walls.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matUsadbaWalls;
          object.children[i].materialDefult = matUsadbaWalls;
        }
        wallsUsadba.add( object );
    });
    loader3.load( 'models/fbx/usadba/walls2floor.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matUsadbawalls2floor;
          object.children[i].materialDefult = matUsadbawalls2floor;
        }
        walls2floor.add( object );
    });
    loader3.load( 'models/fbx/usadba/walls1floor.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matUsadbawalls1floor;
          object.children[i].materialDefult = matUsadbawalls1floor;
        }
        walls1floor.add( object );
    });
    loader3.load( 'models/fbx/usadba/glass01.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matGlass01;
          object.children[i].materialDefult = matGlass01;
        }
        glass01.add( object );
    });
    loader3.load( 'models/fbx/usadba/Ground01.FBX', function( object ) {
        for(let i=0; i<object.children.length; i++) {
          object.children[i].material = matUsadbaGround;
          object.children[i].materialDefult = matUsadbaGround;
        }
        ground01.add( object );
    });
    usadba.add( krishaUsadba );
    usadba.add( wallsUsadba );
    usadba.add( walls2floor );
    usadba.add( walls1floor );
    usadba.add( glass01 );
    usadba.add( ground01 );
    usadba.position.set( 0, -550, 0 );
  } else {
    usadba.visible = true;
  }
}

function matUsadbaSetup() {
  matUsadbaKrisha[0].map = cherepica;
  cherepica.wrapS = THREE.RepeatWrapping;
  cherepica.wrapT = THREE.RepeatWrapping;
  cherepica.repeat.set( 20, 30 );
  matUsadbaKrisha[0].aoMap = krisha_GI;
  matUsadbaKrisha[0].aoMapIntensity = 1.0;
  matUsadbaKrisha.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbaKrisha[1].aoMap = krisha_GI;
  matUsadbaKrisha[1].aoMapIntensity = 0.5;
  matUsadbaKrisha.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbaKrisha[2].aoMap = krisha_GI;
  matUsadbaKrisha[2].aoMapIntensity = 0.5;
  matUsadbaKrisha.forEach( function( item ) {
    item.lightMap = krisha_GI;
    item.lightMapIntensity = 1.4;
  } );

  matUsadbaWalls[0].map = vagonka2;
  vagonka2.wrapS = THREE.RepeatWrapping;
  vagonka2.wrapT = THREE.RepeatWrapping;
  vagonka2.repeat.set( 1, 5 );
  matUsadbaWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//1
  matUsadbaWalls[1].map = wood2_2;
  wood2_2.wrapS = THREE.RepeatWrapping;
  wood2_2.wrapT = THREE.RepeatWrapping;
  wood2_2.repeat.set( 1, 3 );
  matUsadbaWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//2
  matUsadbaWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//3
  matUsadbaWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//4
  matUsadbaWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );//4
  matUsadbaWalls[4].map = vagonka2;
  matUsadbaWalls[4].transparent = true;
  matUsadbaWalls[4].opacity = 1.0;
  matUsadbaWalls[5].map = wood2_2;
  matUsadbaWalls[5].transparent = true;
  matUsadbaWalls[5].opacity = 1.0;
  matUsadbaWalls.forEach( function( item ) {
    item.lightMap = walls_GI;
    item.lightMapIntensity = 1.5;
  } );

  matUsadbawalls2floor[0].map = vagonka3;
  vagonka3.wrapS = THREE.RepeatWrapping;
  vagonka3.wrapT = THREE.RepeatWrapping;
  vagonka3.repeat.set( 1, 5 );
  matUsadbawalls2floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls2floor[1].map = wood3;
  wood3.wrapS = THREE.RepeatWrapping;
  wood3.wrapT = THREE.RepeatWrapping;
  wood3.repeat.set( 1, 1 );
  matUsadbawalls2floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls2floor[2].map = wood2;
  wood2.wrapS = THREE.RepeatWrapping;
  wood2.wrapT = THREE.RepeatWrapping;
  wood2.repeat.set( 8, 16 );
  matUsadbawalls2floor.forEach( function( item ) {
    item.lightMap = walls2floor_GI;
    item.lightMapIntensity = 0.1;
  } );

  matUsadbawalls1floor[0].map = vagonka3;
  matUsadbawalls1floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls1floor[1].map = wood3;
  matUsadbawalls1floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls1floor[2].map = wood2;
  matUsadbawalls1floor.forEach( function( item ) {
    item.lightMap = walls1floor_GI;
    item.lightMapIntensity = 0.2;
  } );

  matUsadbaGround.push( new THREE.MeshBasicMaterial( { color : 0xaaaaaa } ) );
  matUsadbaGround[0].map = trava;
  trava.wrapS = THREE.RepeatWrapping;
  trava.wrapT = THREE.RepeatWrapping;
  trava.repeat.set( 4, 8 );
  matUsadbaGround.forEach( function( item ) {
    item.lightMap = groundGI;
    item.lightMapIntensity = 1.0;
  } );
}
function usadbaFull() {
  matUsadbawalls1floor.forEach(function(item) { item.lightMapIntensity = 0.1; });
  matUsadbawalls2floor.forEach(function(item) { item.lightMapIntensity = 0.1; });
  walls2floor.visible = true;
  krishaUsadba.visible = true;
  glass01.children[0].children[1].visible = true;
  matUsadbaWalls[4].opacity = 1.0;
  matUsadbaWalls[5].opacity = 1.0;
}
function usadba2Floor() {
  matUsadbawalls1floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  matUsadbawalls2floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  walls2floor.visible = true;
  krishaUsadba.visible = false;
  glass01.children[0].children[1].visible = true;
  matUsadbaWalls[4].opacity = 1.0;
  matUsadbaWalls[5].opacity = 1.0;
}
function usadba1Floor() {
  matUsadbawalls1floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  matUsadbawalls2floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  walls2floor.visible = false;
  krishaUsadba.visible = false;
  glass01.children[0].children[1].visible = false;
  matUsadbaWalls[4].opacity = 0.0;
  matUsadbaWalls[5].opacity = 0.0;
}
btnUsadbaFull.addEventListener( "click" , usadbaFull );
btn2Floor.addEventListener( "click" , usadba2Floor );
btn1Floor.addEventListener( "click" , usadba1Floor );
