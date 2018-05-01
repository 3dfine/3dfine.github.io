let matUsadbaKrisha = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbaWalls = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbawalls2floor = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbawalls1floor = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matGlass01 = [ matGlass ];
let krisha_GI, walls_GI, walls2floor_GI, walls1floor_GI, cherepica, vagonka, vagonka2, vagonka3, wood2, wood3;
let usadba = new THREE.Group();
usadba.visible = true;
usadba.onLoaded = false;
let krishaUsadba = new THREE.Object3D();
let wallsUsadba = new THREE.Object3D();
let walls2floor = new THREE.Object3D();
let walls1floor = new THREE.Object3D();
let glass01 = new THREE.Object3D();

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
    wood3 = texLoader.load( 'textures/wood/wood4.jpg' );
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
    usadba.add( krishaUsadba );
    usadba.add( wallsUsadba );
    usadba.add( walls2floor );
    usadba.add( walls1floor );
    usadba.add( glass01 );
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
  matUsadbaKrisha[0].lightMap = krisha_GI;
  matUsadbaKrisha[0].aoMap = krisha_GI;
  matUsadbaKrisha[0].aoMapIntensity = 1.0;
  matUsadbaKrisha.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbaKrisha[1].lightMap = krisha_GI;
  matUsadbaKrisha[1].aoMap = krisha_GI;
  matUsadbaKrisha[1].aoMapIntensity = 0.5;
  matUsadbaKrisha.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbaKrisha[2].lightMap = krisha_GI;
  matUsadbaKrisha[2].aoMap = krisha_GI;
  matUsadbaKrisha[2].aoMapIntensity = 0.5;

  matUsadbaWalls[0].map = vagonka2;
  vagonka2.wrapS = THREE.RepeatWrapping;
  vagonka2.wrapT = THREE.RepeatWrapping;
  vagonka2.repeat.set( 1, 5 );
  // matUsadbaWalls[0].envMap = textureCube;
  // matUsadbaWalls[0].envMapIntensity = 1.0
  // matUsadbaWalls[0].needsUpdate = true;
  // matUsadbaWalls[0].metalness = 0.35;
  // matUsadbaWalls[0].roughness = 0.2;
  matUsadbaWalls[0].aoMap = walls_GI;
  matUsadbaWalls[0].aoMapIntensity = 1.0;
  matUsadbaWalls[0].lightMap = walls_GI;
  matUsadbaWalls.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  // matUsadbaWalls[1].map = wood1;
  matUsadbaWalls[1].aoMap = walls_GI;
  matUsadbaWalls[1].aoMapIntensity = 0.0;
  matUsadbaWalls[1].lightMap = walls_GI;

  matUsadbawalls2floor[0].map = vagonka3;
  vagonka3.wrapS = THREE.RepeatWrapping;
  vagonka3.wrapT = THREE.RepeatWrapping;
  vagonka3.repeat.set( 1, 5 );
  matUsadbawalls2floor[0].lightMap = walls2floor_GI;
  matUsadbawalls2floor[0].lightMapIntensity = 0.2;
  matUsadbawalls2floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls2floor[1].map = wood3;
  wood3.wrapS = THREE.RepeatWrapping;
  wood3.wrapT = THREE.RepeatWrapping;
  wood3.repeat.set( 1, 1 );
  matUsadbawalls2floor[1].lightMap = walls2floor_GI;
  matUsadbawalls2floor[1].lightMapIntensity = 0.2;
  matUsadbawalls2floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls2floor[2].map = wood2;
  wood2.wrapS = THREE.RepeatWrapping;
  wood2.wrapT = THREE.RepeatWrapping;
  wood2.repeat.set( 8, 8 );
  matUsadbawalls2floor[2].lightMap = walls2floor_GI;
  matUsadbawalls2floor[2].lightMapIntensity = 1.0;

  matUsadbawalls1floor[0].map = vagonka3;

  matUsadbawalls1floor[0].lightMap = walls1floor_GI;
  matUsadbawalls1floor[0].lightMapIntensity = 1.0;
  matUsadbawalls1floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls1floor[1].map = wood3;
  matUsadbawalls1floor[1].lightMap = walls1floor_GI;
  matUsadbawalls1floor[1].lightMapIntensity = 1.0;
  matUsadbawalls1floor.push( new THREE.MeshBasicMaterial( { color : 0xffffff } ) );
  matUsadbawalls1floor[2].map = wood2;
  matUsadbawalls1floor[2].lightMap = walls1floor_GI;
  matUsadbawalls1floor[2].lightMapIntensity = 1.0;
}
function usadbaFull() {
  matUsadbawalls1floor[0].lightMapIntensity = 0.2;
  matUsadbawalls2floor[0].lightMapIntensity = 0.2;
  matUsadbawalls2floor[1].lightMapIntensity = 0.2;
  walls2floor.visible = true;
  krishaUsadba.visible = true;
}
function usadba2Floor() {
    matUsadbawalls2floor[0].lightMapIntensity = 1.0;
    matUsadbawalls1floor[0].lightMapIntensity = 1.0;
    matUsadbawalls2floor[1].lightMapIntensity = 1.0;
    walls2floor.visible = true;
    krishaUsadba.visible = false;
}
function usadba1Floor() {
    matUsadbawalls2floor[0].lightMapIntensity = 1.0;
    matUsadbawalls1floor[0].lightMapIntensity = 1.0;
    matUsadbawalls2floor[1].lightMapIntensity = 1.0;
    walls2floor.visible = false;
    krishaUsadba.visible = false;
}
btnUsadbaFull.addEventListener( "click" , usadbaFull );
btn2Floor.addEventListener( "click" , usadba2Floor );
btn1Floor.addEventListener( "click" , usadba1Floor );
