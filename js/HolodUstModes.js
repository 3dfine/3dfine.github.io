//Установка 1 режима работы первой установки
function holodUst1Mode_1() {
  potok1.visible = !potok1.visible;
  //сортировка групп объектов
  potok1.children[0].children.sort(compareName);
  rekuperatorKorp.children[0].children.sort(compareName);
  //раскрашивание потока
  for(let i=0; i<potok1.children[0].children.length; i++) {
    if(i < 81 )
      potok1.children[0].children[i].material = matPotokRed;
    if(i > 80 && i < 81 + 21 )
      potok1.children[0].children[i].material = matPotokPink;
    if(i > 101 && i < 101 + 26 )
      potok1.children[0].children[i].material = matPotokDarkBlue;
    if(i > 126 && i < 126 + 19 )
      potok1.children[0].children[i].material = matPotokBlue;
    if(i > 145 && i < 145 + 46 )
      potok1.children[0].children[i].material = matPotokPink;
    if(i > 190 )
      potok1.children[0].children[i].material = matPotokRed;
  }
  if(potok1.visible) {
    rama.children[0].children[1].visible = false;
    barashki.children[0].visible  = false;
    rama.children[0].children[0].material = matGhost;
    ventilatorOutSide.rotSpeed = 0.1;
    ustVent1.rotSpeed = 0.1;
    ustVent2.rotSpeed = 0.1;
    // поворот лопастей диффузора на сопле
    rotateGroup3D(diffuzorLopasti.children[0].children, 30, 'oX');
    //открытие внешних заслонок
    rotateGroup3D(zaslonka1.children[0].children, -90, 'oZ');
    rotateGroup3D(zaslonka2.children[0].children, -90, 'oZ');
    //открытие заслонок рекуператора
    rotateGroup3D(rekuperatorZaslon1.children[0].children, -90, 'oX');
    rotateGroup3D(rekuperatorZaslon2.children[0].children, -90, 'oX');
    rotateGroup3D(rekuperatorZaslon3.children[0].children, 0, 'oX');
  }
  else {
    rama.children[0].children[1].visible = true;
    barashki.children[0].visible  = true;
    rama.children[0].children[0].material = matUstRama;
    ventilatorOutSide.rotSpeed = 0.0;
    ustVent1.rotSpeed = 0;
    ustVent2.rotSpeed = 0;
    rotateGroup3D(diffuzorLopasti.children[0].children, 0, 'oX');
    rotateGroup3D(zaslonka1.children[0].children, 0, 'oZ');
    rotateGroup3D(zaslonka2.children[0].children, 0, 'oZ');
    rotateGroup3D(rekuperatorZaslon1.children[0].children, 0, 'oX');
    rotateGroup3D(rekuperatorZaslon2.children[0].children, 0, 'oX');
    rotateGroup3D(rekuperatorZaslon3.children[0].children, -90, 'oX');
  }
}
//Установка 2 режима работы первой установки
function holodUst1Mode_2() {
  potok2.visible = !potok2.visible;
  //сортировка групп объектов
  potok2.children[0].children.sort(compareName);
  rekuperatorKorp.children[0].children.sort(compareName);
  //раскрашивание потока
  for(let i=0; i<potok2.children[0].children.length; i++) {
    if(i < 152 )
      potok2.children[0].children[i].material = matPotokPink;
    else
      potok2.children[0].children[i].material = matPotokRed;
  }
  if(potok2.visible) {
    rama.children[0].children[1].visible = false;
    barashki.children[0].visible  = false;
    rama.children[0].children[0].material = matGhost;
    ventilatorOutSide.rotSpeed = 0.0;
    ustVent1.rotSpeed = 0.1;
    ustVent2.rotSpeed = 0.0;
    // поворот лопастей диффузора на сопле
    rotateGroup3D(diffuzorLopasti.children[0].children, 30, 'oX');
    //открытие внешних заслонок
    rotateGroup3D(zaslonka1.children[0].children, 0, 'oZ');
    rotateGroup3D(zaslonka2.children[0].children, 0, 'oZ');
    //открытие заслонок рекуператора
    rotateGroup3D(rekuperatorZaslon1.children[0].children, 0, 'oX');
    rotateGroup3D(rekuperatorZaslon2.children[0].children, -90, 'oX');
    rotateGroup3D(rekuperatorZaslon3.children[0].children, -90, 'oX');
  }
  else {
    rama.children[0].children[1].visible = true;
    barashki.children[0].visible  = true;
    rama.children[0].children[0].material = matUstRama;
    ventilatorOutSide.rotSpeed = 0.0;
    ustVent1.rotSpeed = 0;
    ustVent2.rotSpeed = 0;
    rotateGroup3D(diffuzorLopasti.children[0].children, 0, 'oX');
    rotateGroup3D(zaslonka1.children[0].children, 0, 'oZ');
    rotateGroup3D(zaslonka2.children[0].children, 0, 'oZ');
    rotateGroup3D(rekuperatorZaslon1.children[0].children, -90, 'oX');
    rotateGroup3D(rekuperatorZaslon2.children[0].children, 0, 'oX');
    rotateGroup3D(rekuperatorZaslon3.children[0].children, 0, 'oX');
  }
}
//функция управления анимируемыми элементами первой холодильной установки
function animHolodUst1() {
  //управление внутренними вентиляторами
  vent_nasos_ventil.rotation.z += ustVent1.rotSpeed;
  vent_nasos_ventil2.rotation.z += ustVent2.rotSpeed;
  //управление вшешними вентиляторами
  ventilatorOutSide_lopasti.children[0].children[0].rotation.x += ventilatorOutSide.rotSpeed;
  ventilatorOutSide_lopasti.children[0].children[1].rotation.x += ventilatorOutSide.rotSpeed * 1.02;
  ventilatorOutSide_lopasti.children[0].children[2].rotation.x -= ventilatorOutSide.rotSpeed * 0.8;
  ventilatorOutSide_lopasti.children[0].children[3].rotation.x -= ventilatorOutSide.rotSpeed * 1.03;
  //управление потоком визуализации воздуха
  if( potok1.visible ) {
    for( let i=0; i<potok1.children[0].children.length; i++ ) {
      potok1.children[0].children[i].scale.y = potok1.children[0].children[i].scale.z = 1.0 - 0.99 * (Math.sin(i/5 - tick) + 1.0);
    }
  }
  if( potok2.visible ) {
    for( let i=0; i<potok2.children[0].children.length; i++ ) {
      potok2.children[0].children[i].scale.y = potok2.children[0].children[i].scale.z = 1.0 - 0.99 * (Math.sin(i/5 - tick) + 1.0);
    }
  }
}
//вращение элементов группы 3д объектов 'group3DObject' на угол 'rotateAngel' относительно оси 'rotateAxis'
function rotateGroup3D(group3DObject, rotateAngel, rotateAxis) {
  if(rotateAxis == 'oX') {
    for(let i=0; i<group3DObject.length; i++) {
        group3DObject[i].rotation.x = THREE.Math.degToRad( rotateAngel );
    }
  }
  if(rotateAxis == 'oY') {
    for(let i=0; i<group3DObject.length; i++) {
        group3DObject[i].rotation.y = THREE.Math.degToRad( rotateAngel );
    }
  }
  if(rotateAxis == 'oZ') {
    for(let i=0; i<group3DObject.length; i++) {
        group3DObject[i].rotation.z = THREE.Math.degToRad( rotateAngel );
    }
  }
}
