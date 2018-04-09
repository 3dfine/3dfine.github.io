// var loadTextResource = function(url) {
//   return new Promise(function(resolve, reject) {
//       var request = new XMLHttpRequest();
//       request.open('GET', url, true);
//       request.onload = function () {
//         if(request.status >= 200 && request.status < 300) {
//           resolve(request.responseText);
//         }
//         else {
//           reject('Error: HTTP status - ' + request.status + ' on resource ' + url);
//         }
//       }
//       request.send();
//   });
// }

let loadTextResource = function( url ) {
    let request = new XMLHttpRequest();
    request.open( 'GET', url, true );
    request.send();
    request.onload = function() {
      request.responseText;
  }
}

let globalLoad = 0;
let loader = new THREE.FBXLoader();
let loadFBXModel = function( modelTarget, scaleImport, _material, url ) {
loader.load( url, function( object ) {
    for(let i=0; i<object.children.length; i++) {
    object.children[i].material = _material;
    object.children[i].castShadow = true;
    object.children[i].receiveShadow = true;
    }
    object.scale.multiplyScalar( scaleImport );
    modelTarget.add( object );
    globalLoad++;
    // console.log(object);
});
}

var loadAnimFBXModel = function( animationGroup, modelTarget, position, rotation, scaleImport, _material, url ) {
loader.load( url, function( object ) {
    for(let i=0; i<object.children.length; i++) {
      animationGroup.add( object.children[i] );
      object.children[i].material = _material;

    }
    object.scale.multiplyScalar( scaleImport );
    object.rotation.x = THREE.Math.degToRad( rotation.x );
    object.rotation.y = THREE.Math.degToRad( rotation.y );
    object.rotation.z = THREE.Math.degToRad( rotation.z );
    object.position.set( position.x, position.y, position.z );
    modelTarget.add( object );
    // modelTarget = object;
    // scene.add( object );
});
}
