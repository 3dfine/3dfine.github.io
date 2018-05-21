let matUsadbaKrisha = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbaWalls = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbawalls2floor = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbawalls1floor = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matUsadbaGround = [ new THREE.MeshBasicMaterial( { color : 0xffffff } ) ];
let matGlass01 = [ matGlass];
let krisha_GI, walls_GI, walls2floor_GI, walls1floor_GI, cherepica, vagonka, vagonka2, vagonka3, wood2, wood2_2, wood3, groundGI, trava, BrownBricks;
let usadba = new THREE.Group();
usadba.position.set( 100, -550, 0 );
usadba.rotation.y = THREE.Math.degToRad(90);
usadba.visible = true;
usadba.onLoaded = false;

function loadUsadba() {
  scene.background = new THREE.Color( 0xffffff );
  scene.fog.color = scene.background;
  dirLight.intensity = 0.2;
  hemiLight.intensity = 1.0;
  light.intensity = 1.0;
  light2.intensity = 0.4;
  if(!usadba.onLoaded) {
    let managerUsadba = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
    managerUsadba.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      globalAnyLoading = true;
      blockLoad.style.display='block';
      blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
    };
    managerUsadba.onLoad = function ( ) {
      usadba.children.sort(compareName);
      globalAnyLoading = false;
    //  console.log(usadba);
      matUsadbaSetup();
      usadba.onLoaded = true;
      usadba.visible = true;
      blockLoad.style.display='none';
      globalToTuLoaded = true;
      usadba.scale.multiplyScalar( 1.7 );
      usadba.children[1].children.sort(compareName);
      $("#controlUsadba").css("display", "flex")
        .hide()
        .fadeIn(100);
    }
    let texLoader = new THREE.TextureLoader(managerUsadba);
    let loader3 = new THREE.FBXLoader(managerUsadba);
    krisha_GI = texLoader.load( 'textures/krisha_GI.jpg' );
    walls_GI = texLoader.load( 'textures/wall_main_outsideGI.jpg' );
    walls2floor_GI = texLoader.load( 'textures/walls2floorGI.jpg' );
    walls1floor_GI = texLoader.load( 'textures/walls1floorGI.jpg' );
    cherepica = texLoader.load( 'textures/cherepica2.jpeg' );
    vagonka = texLoader.load( 'textures/wood/vagonka.jpg' );
    vagonka2 = texLoader.load( 'textures/wood/vagonka2.jpg' );
    vagonka3 = texLoader.load( 'textures/wood/vagonka3.jpg' );
    wood2 = texLoader.load( 'textures/wood/wood2.jpg' );
    wood2_2 = texLoader.load( 'textures/wood/wood2_2.jpg' );
    wood3 = texLoader.load( 'textures/wood/wood3.jpg' );
    groundGI = texLoader.load( 'textures/GroundGI.jpg' );
    trava = texLoader.load( 'textures/trava.jpg' );
    BrownBricks = texLoader.load( 'textures/bricks/BrownBricks.jpg' );
    const fbxFiles = [
      'krisha.FBX',
      'walls.FBX',
      'walls2floor.FBX',
      'walls1floor.FBX',
      'glass01.FBX',
      'Ground01.FBX'
    ];
    let mats = [
      matUsadbaKrisha,
      matUsadbaWalls,
      matUsadbawalls2floor,
      matUsadbawalls1floor,
      matGlass01,
      matUsadbaGround
    ];
    for(let i=0; i < fbxFiles.length; i++) {
      loader3.load( 'models/fbx/usadba/' + fbxFiles[i], function( object ) {
          for(let ii=0; ii<object.children.length; ii++) {
            object.children[ii].material = mats[i];
          }
          object.name = i;
          usadba.add( object );
      });
    }
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
  matUsadbaKrisha[2].map = wood3;
  // matUsadbaKrisha[2].aoMap = krisha_GI;
  // matUsadbaKrisha[2].aoMapIntensity = 0.5;
  matUsadbaKrisha.forEach( function( item ) {
    item.lightMap = krisha_GI;
    item.lightMapIntensity = 1.4;
  } );
  matUsadbaKrisha[2].lightMapIntensity = 0.4;

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
  matUsadbaWalls[2].map = BrownBricks;
  BrownBricks.wrapS = THREE.RepeatWrapping;
  BrownBricks.wrapT = THREE.RepeatWrapping;
  BrownBricks.repeat.set( 14, 4 );
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
function showUsadbaDescr() {
  let usadbaDescrop = { position: [], id: [] };
  usadbaDescrop.position[0] = new THREE.Vector3(200 * 1.7 - 500, -50,  -250 * 1.7 );
  usadbaDescrop.id[0] = textblockUsadba0;
  usadbaDescrop.position[1] = new THREE.Vector3(400 * 1.7 , -50,  -250 * 1.7 );
  usadbaDescrop.id[1] = textblockUsadba1;
  usadbaDescrop.position[2] = new THREE.Vector3(50 * 1.7 - 100, -50,  300 * 1.7  );
  usadbaDescrop.id[2] = textblockUsadba2;
  usadbaDescrop.position.push( new THREE.Vector3(160 * 1.7 + 100, -50,  40 * 1.7  ));
  usadbaDescrop.id[3] = textblockUsadba3;
  usadbaDescrop.position.push( new THREE.Vector3(220 * 1.7 + 100, -50,  300 * 1.7  ));
  usadbaDescrop.id[4] = textblockUsadba4;
  usadbaDescrop.position.push( new THREE.Vector3(420 * 1.7 + 100, -50,  300 * 1.7  ));
  usadbaDescrop.id[5] = textblockUsadba5;
  usadbaDescrop.position.push( new THREE.Vector3(420 * 1.7 + 100, -50,  40 * 1.7  ));
  usadbaDescrop.id[6] = textblockUsadba6;
  usadbaDescrop.position[7] = new THREE.Vector3(400 * 1.7, 400,  -190 * 1.7 );
  usadbaDescrop.id[7] = textblockUsadba10;
  usadbaDescrop.position[8] = new THREE.Vector3(-280 * 1.7 , 400,  -190 * 1.7 );
  usadbaDescrop.id[8] = textblockUsadba11;
  usadbaDescrop.position[9] = new THREE.Vector3(130 * 1.7 - 100, 400,  300 * 1.7  );
  usadbaDescrop.id[9] = textblockUsadba12;
  usadbaDescrop.position.push( new THREE.Vector3(50 * 1.7 + 100, 400,  -150 * 1.7  ));
  usadbaDescrop.id[10] = textblockUsadba13;
  usadbaDescrop.position.push( new THREE.Vector3(360 * 1.7 + 100, 400,  250 * 1.7  ));
  usadbaDescrop.id[11] = textblockUsadba14;
  usadbaDescrop.position.push( new THREE.Vector3(70 * 1.7 + 100, 400,  -330 * 1.7  ));
  usadbaDescrop.id[12] = textblockUsadba15;
  usadbaDescrop.position.push( new THREE.Vector3(-80 * 1.7 + 100, 400,  -330 * 1.7  ));
  usadbaDescrop.id[13] = textblockUsadba16;
  let style;
  for(let i = 0; i < usadbaDescrop.position.length; i++) {
    usadbaDescrop.position[i].project( camera );
    usadbaDescrop.position[i].x = ( usadbaDescrop.position[i].x * widthHalf ) + widthHalf;
    usadbaDescrop.position[i].y = - ( usadbaDescrop.position[i].y * heightHalf ) + heightHalf;
    style = getComputedStyle(usadbaDescrop.id[i]);
    if(style.width !== 'auto') {
      usadbaDescrop.id[i].style.left = ( usadbaDescrop.position[ i ].x - parseInt( style.width, 10 ) /2.0 ) + "px";
      usadbaDescrop.id[i].style.top  = ( usadbaDescrop.position[ i ].y - parseInt( style.height, 10 ) /2.0 ) + "px";
      // usadbaDescrop.id[i].style.left = (usadbaDescrop.position[i].x - parseInt(style.width, 10)/2.0 - parseInt(style.padding, 10)) + "px";
      // usadbaDescrop.id[i].style.top  = (usadbaDescrop.position[i].y - parseInt(style.height, 10)/2.0 - parseInt(style.padding, 10)) + "px";
    }
  }
}

function usadbaFull() {
  textblockUsadbaFloor1.style.display = 'none';
  textblockUsadbaFloor2.style.display = 'none';
  matUsadbawalls1floor.forEach(function(item) { item.lightMapIntensity = 0.1; });
  matUsadbawalls2floor.forEach(function(item) { item.lightMapIntensity = 0.1; });
  usadba.children[0].visible = true;
  usadba.children[2].visible = true;
  usadba.children[4].children[1].visible = true;
  matUsadbaWalls[4].opacity = 1.0;
  matUsadbaWalls[5].opacity = 1.0;
}
function usadba2Floor() {
  textblockUsadbaFloor1.style.display = 'none';
  textblockUsadbaFloor2.style.display = 'block';
  matUsadbawalls1floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  matUsadbawalls2floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  usadba.children[0].visible = false;
  usadba.children[2].visible = true;
  usadba.children[4].children[1].visible = true;
  matUsadbaWalls[4].opacity = 1.0;
  matUsadbaWalls[5].opacity = 1.0;
}
function usadba1Floor() {
  textblockUsadbaFloor1.style.display = 'block';
  textblockUsadbaFloor2.style.display = 'none';
  matUsadbawalls1floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  matUsadbawalls2floor.forEach(function(item) { item.lightMapIntensity = 1.8; });
  usadba.children[0].visible = false;
  usadba.children[2].visible = false;
  usadba.children[4].children[1].visible = false;
  matUsadbaWalls[4].opacity = 0.0;
  matUsadbaWalls[5].opacity = 0.0;
}
function usadbaFloorInfo() {
  if(!usadba.children[2].visible) {
    if(textblockUsadbaFloor1.style.display === 'block')
      textblockUsadbaFloor1.style.display = 'none';
    else
      textblockUsadbaFloor1.style.display = 'block';
  }
  if(!usadba.children[0].visible && usadba.children[2].visible) {
    if(textblockUsadbaFloor2.style.display === 'block')
      textblockUsadbaFloor2.style.display = 'none';
    else
      textblockUsadbaFloor2.style.display = 'block';
  }
}
btnUsadbaFull.addEventListener( "click" , usadbaFull );
btn2Floor.addEventListener( "click" , usadba2Floor );
btn1Floor.addEventListener( "click" , usadba1Floor );
btn1UsadbaInfo.addEventListener( "click" , usadbaFloorInfo );
