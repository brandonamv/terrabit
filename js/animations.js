import * as THREE from 'three';

const elem = document.getElementById('banner');
const elemHeight = elem.offsetHeight+elem.offsetHeight*0.01;

console.log(elemHeight);
const secondElem = document.getElementById('fondo');
secondElem.style.height = elemHeight+'px';

const scene = new THREE.Scene(new THREE.AmbientLight( 0x111122, 3 ) );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let width=window.innerWidth;
let height=window.innerHeight;
let widthHalf = width / 2, heightHalf = height / 2;

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( width, height );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setClearColor( 0x000000, 0 ); // the default


document.getElementById("animation").appendChild( renderer.domElement );

function ScreenToSpaceX(n) {
    return ( n - widthHalf ) / widthHalf;
}
function ScreenToSpaceY(n) {
    return - ( n - heightHalf ) / heightHalf;
}

const geometry = new THREE.PlaneGeometry( 7, 3);  
const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud.png'), transparent: true,  });
const cloud = new THREE.Mesh( geometry, material );
cloud.castShadow=true;
cloud.position.y=ScreenToSpaceY(height*0.01);
scene.add( cloud );

const geometry2 = new THREE.PlaneGeometry( 5, 3);  
const material2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud2.png'), transparent: true,  });
const cloud2 = new THREE.Mesh( geometry2, material2 );
cloud2.castShadow=true;
cloud2.position.y=-5;
cloud2.position.x=ScreenToSpaceX(width*-2);
scene.add( cloud2 );

const geometry3 = new THREE.PlaneGeometry( 5, 3);  
const material3 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud3.png'), transparent: true,  });
const cloud3 = new THREE.Mesh( geometry3, material3 );
cloud3.castShadow=true;
cloud3.position.y=-8;
cloud3.position.x=5;
scene.add( cloud3 );

const geometry4 = new THREE.PlaneGeometry( 5, 3);  
const material4 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud4.png'), transparent: true,  });
const cloud4 = new THREE.Mesh( geometry4, material4 );
cloud4.castShadow=true;
cloud4.position.y=-14;
cloud4.position.x=6;
scene.add( cloud4 );

const geometry5 = new THREE.PlaneGeometry( 6, 3);  
const material5 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud5.png'), transparent: true,  });
const cloud5 = new THREE.Mesh( geometry5, material5 );
cloud5.castShadow=true;
cloud5.position.y=-19;
cloud5.position.x=-2;
scene.add( cloud5 );

const geometry6 = new THREE.PlaneGeometry( 5, 3);  
const material6 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud6.png'), transparent: true,  });
const cloud6 = new THREE.Mesh( geometry6, material6 );
cloud6.castShadow=true;
cloud6.position.y=-22;
cloud6.position.x=4.8;
scene.add( cloud6 );

const geometry7 = new THREE.PlaneGeometry( 5, 3);  
const material7 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud7.png'), transparent: true,  });
const cloud7 = new THREE.Mesh( geometry7, material7 );
cloud7.castShadow=true;
cloud7.position.y=-26;
cloud7.position.x=-6;
scene.add( cloud7 );

const geometry8 = new THREE.PlaneGeometry( 6, 4);  
const material8 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud8.png'), transparent: true,  });
const cloud8 = new THREE.Mesh( geometry8, material8 );
cloud8.castShadow=true;
cloud8.position.y=-35;
cloud8.position.x=3;
scene.add( cloud8 );

const geometry9 = new THREE.PlaneGeometry( 5, 4);  
const material9 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud9.png'), transparent: true,  });
const cloud9 = new THREE.Mesh( geometry9, material9 );
cloud9.castShadow=true;
cloud9.position.y=-38;
cloud9.position.x=-5;
scene.add( cloud9 );


const geometry10 = new THREE.PlaneGeometry( 5, 4);  
const material10 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud10.png'), transparent: true,  });
const cloud10 = new THREE.Mesh( geometry10, material10 );
cloud10.castShadow=true;
cloud10.position.y=-48;
cloud10.position.x=5;
scene.add( cloud10 );

const geometry11 = new THREE.PlaneGeometry( 5, 4);  
const material11 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud11.png'), transparent: true,  });
const cloud11 = new THREE.Mesh( geometry11, material11 );
cloud11.castShadow=true;
cloud11.position.y=-54;
cloud11.position.x=6;
scene.add( cloud11 );

const geometry12 = new THREE.PlaneGeometry( 5, 4);  
const material12 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud12.png'), transparent: true,  });
const cloud12 = new THREE.Mesh( geometry12, material12 );
cloud12.castShadow=true;
cloud12.position.y=-72;
cloud12.position.x=-5;
scene.add( cloud12 );

camera.position.z = 5;

let aumentY=0;
let actualScroll=0;
aumentY=actualScroll-window.scrollY;
actualScroll=window.scrollY;
camera.position.y+=aumentY/100;
document.addEventListener('scroll',()=>{
    aumentY=actualScroll-window.scrollY;
    actualScroll=window.scrollY;
    camera.position.y+=aumentY/100;

})


window.addEventListener('resize', () => {
    // update display width and height
    width = window.innerWidth;
    height = window.innerHeight;
    // update camera aspect
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    // update renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);
    

});

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();