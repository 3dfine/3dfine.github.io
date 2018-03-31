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


var loadTextResource = function( url ) {
    var request = new XMLHttpRequest();
    request.open( 'GET', url, true );
    request.send();
    request.onload = function() {
      request.responseText;
  }
}

var loadFBXModel = function( modelTarget, scaleImport, _material, url ) {
loader.load( url, function( object ) {
  var _modelTemp = object.children[0];
  _modelTemp.scale.multiplyScalar( scaleImport );
  _modelTemp.material = _material;
  modelTarget.add( _modelTemp );
});
}
