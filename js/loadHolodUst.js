let ustanovka = new THREE.Group();
ustanovka.visible = false;
ustanovka.onLoaded = false;
let ustVent1 = new THREE.Group();
let ustVent2 = new THREE.Group();
let zaslonkaSborka1 = new THREE.Group();
let zaslonkaSborka2 = new THREE.Group();
let rekuperator = new THREE.Group();
let ventilatorOutSide = new THREE.Group();
let rama = new THREE.Object3D();
let barashki = new THREE.Object3D();
let krisha = new THREE.Object3D();
let vent_nasos_korp = new THREE.Object3D();
let vent_nasos_ventil = new THREE.Object3D();
let vent_nasos_korp2 = new THREE.Object3D();
let vent_nasos_ventil2 = new THREE.Object3D();
let rekuperatorKorp = new THREE.Object3D();
let rekuperatorZaslon1 = new THREE.Object3D();
let rekuperatorZaslon2 = new THREE.Object3D();
let rekuperatorZaslon3 = new THREE.Object3D();
let filtrKorman1 = new THREE.Object3D();
let filtrKorman2 = new THREE.Object3D();
let ventilatorOutSide_korp = new THREE.Object3D();
let ventilatorOutSide_lopasti = new THREE.Object3D();
let kompressoLOW = new THREE.Object3D();
let zaslonka1_Rama = new THREE.Object3D();
let zaslonka2_Rama = new THREE.Object3D();
let zaslonka1 = new THREE.Object3D();
let pauk = new THREE.Object3D();
let nagretSoplya = new THREE.Object3D();
let diffuzorKorp = new THREE.Object3D();
let diffuzorLopasti = new THREE.Object3D();
let zaslonka2 = new THREE.Object3D();
let potok1 = new THREE.Object3D();
potok1.onLoaded = false;
let potok2 = new THREE.Object3D();
potok2.onLoaded = false;

function loadHolod() {
  scene.background = new THREE.Color( 0xffffff );
  scene.fog.color = scene.background;
  dirLight.intensity = 0.2;
  hemiLight.intensity = 1.0;
  light.intensity = 1.0;
  light2.intensity = 0.4;
  if(!ustanovka.onLoaded) {
    ustanovka.visible = false;
    loadFBXModel( rama, 0.5, matUstRama, 'models/fbx/ustanovka/rama.FBX' );
    loadFBXModel( barashki, 0.5, matBarashki, 'models/fbx/ustanovka/barashkiLow.FBX' );
    loadFBXModel( krisha, 0.5, matUstKrisha, 'models/fbx/ustanovka/Krisha.FBX' );
    loadFBXModel( vent_nasos_korp, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
    loadFBXModel( vent_nasos_ventil, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
    loadFBXModel( vent_nasos_korp2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_korp.FBX' );
    loadFBXModel( vent_nasos_ventil2, 0.5, matUstVent, 'models/fbx/ustanovka/vent_nasos_ventil.FBX' );
    loadFBXModel( rekuperatorKorp, 0.5, matRekuperator, 'models/fbx/ustanovka/rekuperatorKorp.FBX' );
    loadFBXModel( rekuperatorZaslon1, 0.5, matUstRama, 'models/fbx/ustanovka/rekuperatorZaslon1.FBX' );
    loadFBXModel( rekuperatorZaslon2, 0.5, matUstRama, 'models/fbx/ustanovka/rekuperatorZaslon1.FBX' );
    loadFBXModel( rekuperatorZaslon3, 0.5, matUstRama, 'models/fbx/ustanovka/rekuperatorZaslon3.FBX' );
    loadFBXModel( filtrKorman1, 0.5, matFiltrKorman, 'models/fbx/ustanovka/filtrKasetni.FBX' );
    loadFBXModel( filtrKorman2, 0.5, matFiltrKorman, 'models/fbx/ustanovka/filtrKasetni.FBX' );
    loadFBXModel( ventilatorOutSide_korp, 0.5, matUstVent, 'models/fbx/ustanovka/ventilatorOutSide_korp.FBX' );
    loadFBXModel(ventilatorOutSide_lopasti, 0.5, matLopasti, 'models/fbx/ustanovka/ventilatorOutSide_lopasti.FBX' );
    ventilatorOutSide_lopasti.position.set( 219.752/2, 1266.646/2, 2160.0/2 );
    ventilatorOutSide_lopasti.rotation.y = THREE.Math.degToRad( 90 );
    loadFBXModel( kompressoLOW, 0.5, matKompressor, 'models/fbx/ustanovka/kompressoLOW.FBX' );
    loadFBXModel( zaslonka1_Rama, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka1_Rama.FBX' );
    loadFBXModel( zaslonka2_Rama, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka2_Rama.FBX' );
    loadFBXModel( zaslonka1, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka1Close.FBX' );
    zaslonka1.position.set( 0/2, 176.679/2, 0/2 );
    loadFBXModel( pauk, 0.5, matPauk, 'models/fbx/ustanovka/paukLow1.FBX' );
    loadFBXModel( nagretSoplya, 0.5, matKompressor, 'models/fbx/ustanovka/nagretSoplya.FBX' );
    loadFBXModel( diffuzorKorp, 0.5, matPlasticWhite, 'models/fbx/ustanovka/diffuzorKorp.FBX' );
    loadFBXModel( diffuzorLopasti, 0.5, matPauk, 'models/fbx/ustanovka/diffuzorLopasti.FBX' );
    loadFBXModel( zaslonka2, 0.5, matUstRama, 'models/fbx/ustanovka/Zaslonka2Close.FBX' );
    zaslonka2.position.set( 0/2, 0/2, 0/2);
    zaslonka2.rotation.y = THREE.Math.degToRad( -90 );
    loadFBXModel( potok1, 0.5, matPotokDef, 'models/fbx/ustanovka/potok1.FBX' );
    potok1.rotation.y = THREE.Math.degToRad( -90 );
    potok1.visible = false;
    loadFBXModel( potok2, 0.5, matPotokDef, 'models/fbx/ustanovka/potok2.FBX' );
    potok2.rotation.y = THREE.Math.degToRad( -90 );
    potok2.visible = false;
    ustVent1.add( vent_nasos_korp );
    ustVent1.add( vent_nasos_ventil );
    ustVent1.rotSpeed = 0.0;   //пользовательское свойтво!!!
    ustVent2.add( vent_nasos_korp2 );
    ustVent2.add( vent_nasos_ventil2 );
    ustVent2.rotSpeed = 0.0;  //пользовательское свойтво!!!
    zaslonkaSborka1.add( zaslonka1_Rama );
    zaslonkaSborka1.add( zaslonka1 );
    zaslonkaSborka1.position.set( 393.977/2, 710.824/2, -2001.979/2);
    zaslonkaSborka2.add( zaslonka2_Rama );
    zaslonkaSborka2.add( zaslonka2 );
    zaslonkaSborka2.position.set( 0/2, 1264.692/2, -2195.049/2);
    // zaslonkaSborka.add( zaslonka2 );
    // zaslonkaSborka.children[1].position.set( 0/2, 171.564/2, 219.614/2 );
    ventilatorOutSide.add( ventilatorOutSide_korp );
    ventilatorOutSide.add( ventilatorOutSide_lopasti );
    ventilatorOutSide.rotSpeed = 0.0; //пользовательское свойтво!!!
    //Рекуператор
    rekuperator.add( rekuperatorKorp );
    rekuperatorZaslon1.position.set( -269.554/2, 950.514/2, 112.29/2);
    rekuperatorZaslon1.rotation.x = THREE.Math.degToRad( -45 );
    rekuperator.add( rekuperatorZaslon1 );
    rekuperatorZaslon2.position.set( -269.554/2, 950.514/2, -112.29/2);
    rekuperatorZaslon2.rotation.x = THREE.Math.degToRad( 45 );
    rekuperator.add( rekuperatorZaslon2 );
    rekuperatorZaslon3.position.set( 179.746/2, 950.514/2, -112.29/2);
    rekuperatorZaslon3.rotation.x = THREE.Math.degToRad( 45 );
    rekuperator.add( rekuperatorZaslon3 );
    rekuperator.position.set( 0/2, 461.535/2, -1150.785/2 );
    ustVent1.children[1].position.y = 128.626;
    ustVent2.children[1].position.y = 128.626;
    // ustanovka.children[1].rotateY( THREE.Math.degToRad( -45 ) );
    // ustVent1.rotation.y = THREE.Math.degToRad( 180 );
    ustVent1.position.set( 0, 458.927/2, -300.059/2 );
    ustVent2.rotation.y = THREE.Math.degToRad( 180 );
    ustVent2.position.set( 0, 1011.533/2, -300.059/2 );

    filtrKorman1.position.set( 0/2, 1264.329/2, 581.448/2);
    filtrKorman1.rotation.y = THREE.Math.degToRad( 180 );
    filtrKorman2.position.set( 0/2, 1264.329/2, -2139.475/2);
    // filtrKasetni2.rotation.y = THREE.Math.degToRad( 180 );
    ustanovka.add( ustVent1 );
    ustanovka.add( ustVent2 );
    ustanovka.add( rama );
    ustanovka.add( barashki );
    ustanovka.add( krisha );
    ustanovka.add( zaslonkaSborka1 );
    ustanovka.add( zaslonkaSborka2 );
    ustanovka.add( rekuperator );
    ustanovka.add( filtrKorman1 );
    ustanovka.add( filtrKorman2 );
    ustanovka.add( ventilatorOutSide );
    ustanovka.add( kompressoLOW );
    ustanovka.add( pauk );
    ustanovka.add( diffuzorKorp );
    ustanovka.add( diffuzorLopasti );
    ustanovka.add( nagretSoplya );
    ustanovka.rotation.y = THREE.Math.degToRad( -90 );
    // console.log( 'ustanovka', ustanovka.children );
    // console.log( 'ventilatorOutSide', ventilatorOutSide.children );

  } else {
    ustanovka.visible = true;
  }
}

managerFBXLoad.onLoad = function ( ) {
  globalAnyLoading = false;
  console.log(globalAnyLoading);
  barashki.children[0].visible = false;
  rama.children[0].children[1].visible = false;

  ventilatorOutSide.rotSpeed = 0.1;
  ustVent1.rotSpeed = 0.1;
  ustVent2.rotSpeed = 0.1;

  rekuperatorKorp.children[0].children[0].material = matRekuperator;
  rekuperatorKorp.children[0].children[1].material = matSteel;
  rekuperatorKorp.children[0].children[2].material = matSteel;
  rekuperatorKorp.children[0].children[3].material = matSteel;

  rekuperatorKorp.children[0].children[0].description = 'Рекуператор';
  filtrKorman1.children[0].children[0].description = 'Фильтр корманный';
  filtrKorman2.children[0].children[0].description = 'Воздушный фильтр приточного воздуха';
  vent_nasos_korp.children[0].children[0].description = 'Приточный вентилятор с ЕС-двигателем';
  vent_nasos_ventil.children[0].children[0].description = 'Приточный вентилятор с ЕС-двигателем';
  vent_nasos_korp2.children[0].children[0].description = 'Вытяжной вентилятор с ЕС-двигателем';
  vent_nasos_ventil2.children[0].children[0].description = 'Вытяжной вентилятор с ЕС-двигателем';
  ventilatorOutSide_korp.children[0].children[0].description = 'Осевые вентиляторы конденсатора';
  kompressoLOW.children[0].children[0].description = 'Воздушный конденсатор и компрессорный блок';
  pauk.children[0].children[0].description = 'Фреоновый испаритель с каплеуловителем';
  nagretSoplya.children[0].children[0].description = 'Водяной нагреватель';
  diffuzorKorp.children[0].children[0].description = 'Регулируемый воздухораспределитель';
  zaslonka1_Rama.children[0].children[0].description = 'Клапан выбросного воздуха';
  zaslonka2_Rama.children[0].children[0].description = 'Воздухозаборный клапан';

  ustanovka.onLoaded = true;
  ustanovka.visible = true;
  blockLoad.style.display='none';

    matHolodSetup();
  globalToTuLoaded = true;


  $("#controlPanel").css("display", "flex")
    .hide()
    .fadeIn(200);
};
