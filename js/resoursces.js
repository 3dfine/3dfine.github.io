let globalToTuLoaded = false;
let globalAnyLoading = false;

function httpGet(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

let managerFBXLoad = new THREE.LoadingManager();  //менеджер загрузки фбх моделей
managerFBXLoad.onProgress = function ( url, itemsLoaded, itemsTotal ) {
  globalAnyLoading = true;
  console.log(globalAnyLoading);
	// console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  blockLoad.style.display='block';
  blockLoadProgress.style.width = (50.0 * itemsLoaded  / itemsTotal) + 'vmax';
};
let globalLoad = 0;
let loader = new THREE.FBXLoader(managerFBXLoad);
let loadFBXModel = function( modelTarget, scaleImport, _material, url ) {
loader.load( url, function( object ) {
    for(let i=0; i<object.children.length; i++) {
    object.children[i].material = _material;
    //пользовательское свойство materialDefult - сохраняем материал для режима выбора подобъектов!
    object.children[i].materialDefult = _material;
    object.children[i].castShadow = true;
    object.children[i].receiveShadow = true;
    }
    object.scale.multiplyScalar( scaleImport );
    modelTarget.add( object );
    globalLoad++;
    // console.log(globalLoad);
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

let urlHash = window.location.hash.substring(1);
let urlSearch = window.location.search.substring(1);
// if(urlHash) console.log('urlHash# =', urlHash);
// if(urlSearch)  console.log('urlSearch? =', urlSearch);
