import * as THREE from 'three';

const scene = new THREE.Scene(new THREE.AmbientLight( 0x111122, 3 ) );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// LIGHTS

const ambientLight = new THREE.AmbientLight( 0xffffff );
scene.add( ambientLight );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
directionalLight.position.set( 1, - 0.5, - 1 );
scene.add( directionalLight );

const elem = document.getElementById('button_1');
let width = elem.offsetWidth*1.3;
let height = elem.offsetHeight*0.7;

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( width, height );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setClearColor( 0x000000, 0 ); // the default

document.getElementById("button_1_container").appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 3, 32, 16 ); 
const textureLoader = new THREE.TextureLoader();

const diffuseMap = textureLoader.load( '/img/cloud.png' );
diffuseMap.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshPhongMaterial( {
    color: 0xefefef,
    specular: 0x222222,
    shininess: 35,
    map: diffuseMap,
    normalScale: new THREE.Vector2( 0.8, 0.8 ),
    opacity: 0.5,
    transparent: true
} );
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
scene.add( sphere );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );

	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();