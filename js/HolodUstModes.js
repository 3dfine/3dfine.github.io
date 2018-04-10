function holodUstMode_1() {

  potok1.children[0].children.sort(compareName);
  rekuperatorKorp.children[0].children.sort(compareName);
//поворот лопастей диффузора на сопле
  for(let i=0; i<diffuzorLopasti.children[0].children.length; i++) {
    diffuzorLopasti.children[0].children[i].rotation.x = THREE.Math.degToRad( 30 );;
  }
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

  potok1.visible = !potok1.visible;
  rama.children[0].children[1].visible = !rama.children[0].children[1].visible;
  barashki.children[0].visible = !barashki.children[0].visible;
  if(rama.children[0].children[1].visible) {
      rama.children[0].children[0].material = matUstRama;
  }
  else {
      rama.children[0].children[0].material = matGhost;
  }
  if(vent_nasos_ventil.rotSpeed == 0)
    vent_nasos_ventil.rotSpeed = 0.1;
    else
    vent_nasos_ventil.rotSpeed = 0;
  if(vent_nasos_ventil2.rotSpeed == 0)
    vent_nasos_ventil2.rotSpeed = 0.1;
    else
    vent_nasos_ventil2.rotSpeed = 0;

  for(let i=0; i<zaslonka2.children[0].children.length; i++) {
    if(zaslonka2.children[0].children[i].rotation.z == 0)
      zaslonka2.children[0].children[i].rotation.z = THREE.Math.degToRad( -90 );
      else
      zaslonka2.children[0].children[i].rotation.z = THREE.Math.degToRad( 0 );
  }
  for(let i=0; i<zaslonka1.children[0].children.length; i++) {
    if(zaslonka1.children[0].children[i].rotation.z == 0)
      zaslonka1.children[0].children[i].rotation.z = THREE.Math.degToRad( -90 );
      else
      zaslonka1.children[0].children[i].rotation.z = THREE.Math.degToRad( 0 );
  }
  // for(let i=0; i<rekuperatorZaslon1.children[0].children.length; i++) {
  //   if(rekuperatorZaslon1.children[0].children[i].rotation.x == 0)
  //     rekuperatorZaslon1.children[0].children[i].rotation.x = THREE.Math.degToRad( -90 );
  //     else
  //     rekuperatorZaslon1.children[0].children[i].rotation.x = THREE.Math.degToRad( 0 );
  // }
  // for(let i=0; i<rekuperatorZaslon2.children[0].children.length; i++) {
  //   if(rekuperatorZaslon2.children[0].children[i].rotation.x == 0)
  //     rekuperatorZaslon2.children[0].children[i].rotation.x = THREE.Math.degToRad( -90 );
  //     else
  //     rekuperatorZaslon2.children[0].children[i].rotation.x = THREE.Math.degToRad( 0 );
  // }
  for(let i=0; i<rekuperatorZaslon3.children[0].children.length; i++) {
    if(rekuperatorZaslon3.children[0].children[i].rotation.x == 0)
      rekuperatorZaslon3.children[0].children[i].rotation.x = THREE.Math.degToRad( -90 );
      else
      rekuperatorZaslon3.children[0].children[i].rotation.x = THREE.Math.degToRad( 0 );
  }
}
