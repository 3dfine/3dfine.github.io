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

let loadFBXModel = function( modelTarget, scaleImport, _material, url ) {
loader.load( url, function( object ) {
    // console.log(i);
    let _modelTemp = object.children[0];
    _modelTemp.scale.multiplyScalar( scaleImport );
    _modelTemp.material = _material;
    modelTarget.add( _modelTemp );
});
}

// var loadAnimFBXModel = function( modelTarget, scaleImport, _material, url ) {
// loader.load( url, function( object ) {
//
//   for(let i=0; i<object.children.length; i++) {
//     console.log(i);
//     animationGroup.add( object.children[i] );
//     object.children[i].material = matUstVent;
//   }
//   _modelTemp.scale.multiplyScalar( scaleImport );
//   _modelTemp.material = _material;
//   modelTarget.add( object );
//
// });
// }
