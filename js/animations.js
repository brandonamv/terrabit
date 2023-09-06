import * as THREE from 'three';
const clock = new THREE.Clock();
const elem = document.getElementById('banner');
const elemHeight = elem.getBoundingClientRect().height;
console.log(elem.getBoundingClientRect());

const secondElem = document.getElementById('fondo');
secondElem.style.height = elemHeight+'px';

const thirdElem = document.getElementById('fin-bunny');
const bunnyFin=thirdElem.getBoundingClientRect().top;

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

const light = new THREE.PointLight( 0xffffff, 100 );
light.position.set(-4.9,-5.9,2);
scene.add( light );
const light2 = new THREE.PointLight( 0xffffff,  40 );
light2.position.set(0.5,1.5,2);
scene.add( light2 );
const light3 = new THREE.PointLight( 0x1E22AA, 500 );
light3.position.set(-1,-6.9,2);
scene.add( light3 );

const b_geometry = new THREE.PlaneGeometry( 6.5, 4);  
const b_material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load( '/img/rabbit2.svg'), transparent: true,  });
const bunny = new THREE.Mesh( b_geometry, b_material );
bunny.position.y=ScreenToSpaceY(elemHeight*2);
bunny.position.x=-3.5;
bunny.scale.setScalar(.85);
window.location.href.split('/')[3].length>0&&window.location.href.split('/')[3]!="index.html"?bunny.visible=false:bunny.visible=true;
scene.add( bunny );



const geometry = new THREE.PlaneGeometry( 5, 3);  
const material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load( '/img/cloud.png'), transparent: true,  });
const cloud = new THREE.Mesh( geometry, material );
cloud.castShadow=true;
cloud.position.y=1.5;
cloud.position.x=0.5;
scene.add( cloud );
const mid= [cloud];

const geometry2 = new THREE.PlaneGeometry( 5, 3);  
const material2 = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load( '/img/cloud5.png'), transparent: true  });
const cloud2 = new THREE.Mesh( geometry2, material2 );
cloud2.castShadow=true;
cloud2.position.y=-4;
cloud2.position.x=ScreenToSpaceX(width*-2);
scene.add( cloud2 );
const left=[cloud2];

const geometry3 = new THREE.PlaneGeometry( 4, 3);  
const material3 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud8.png'), transparent: true,  });
const cloud3 = new THREE.Mesh( geometry3, material3 );
cloud3.castShadow=true;
cloud3.position.y=-7;
cloud3.position.x=6;
scene.add( cloud3 );
const right=[cloud3];

const geometry4 = new THREE.PlaneGeometry( 5, 3);  
const material4 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud5.png'), transparent: true,  });
const cloud4 = new THREE.Mesh( geometry4, material4 );
cloud4.castShadow=true;
cloud4.position.y=-14;
cloud4.position.x=6;
scene.add( cloud4 );
right.push(cloud4);

const geometry5 = new THREE.PlaneGeometry( 6, 3);  
const material5 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud8.png'), transparent: true,  });
const cloud5 = new THREE.Mesh( geometry5, material5 );
cloud5.castShadow=true;
cloud5.position.y=-19;
cloud5.position.x=-2;
scene.add( cloud5 );
mid.push(cloud5);

const geometry6 = new THREE.PlaneGeometry( 5, 3);  
const material6 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud5.png'), transparent: true,  });
const cloud6 = new THREE.Mesh( geometry6, material6 );
cloud6.castShadow=true;
cloud6.position.y=-22;
cloud6.position.x=4.8;
scene.add( cloud6 );
right.push(cloud6);

const geometry7 = new THREE.PlaneGeometry( 5, 3);  
const material7 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud.png'), transparent: true,  });
const cloud7 = new THREE.Mesh( geometry7, material7 );
cloud7.castShadow=true;
cloud7.position.y=-26;
cloud7.position.x=-6;
scene.add( cloud7 );
left.push(cloud7);

const geometry8 = new THREE.PlaneGeometry( 6, 4);  
const material8 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud8.png'), transparent: true,  });
const cloud8 = new THREE.Mesh( geometry8, material8 );
cloud8.castShadow=true;
cloud8.position.y=-35;
cloud8.position.x=3;
scene.add( cloud8 );
mid.push(cloud8);

const geometry9 = new THREE.PlaneGeometry( 5, 4);  
const material9 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud5.png'), transparent: true,  });
const cloud9 = new THREE.Mesh( geometry9, material9 );
cloud9.castShadow=true;
cloud9.position.y=-38;
cloud9.position.x=-5;
scene.add( cloud9 );
left.push(cloud9);

const geometry10 = new THREE.PlaneGeometry( 5, 4);  
const material10 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud8.png'), transparent: true,  });
const cloud10 = new THREE.Mesh( geometry10, material10 );
cloud10.castShadow=true;
cloud10.position.y=-48;
cloud10.position.x=5;
scene.add( cloud10 );
right.push(cloud10);

const geometry11 = new THREE.PlaneGeometry( 5, 4);  
const material11 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud.png'), transparent: true,  });
const cloud11 = new THREE.Mesh( geometry11, material11 );
cloud11.castShadow=true;
cloud11.position.y=-54;
cloud11.position.x=6;
scene.add( cloud11 );
right.push(cloud11);

const geometry12 = new THREE.PlaneGeometry( 5, 4);  
const material12 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( '/img/cloud8.png'), transparent: true,  });
const cloud12 = new THREE.Mesh( geometry12, material12 );
cloud12.castShadow=true;
cloud12.position.y=-72;
cloud12.position.x=-5;
scene.add( cloud12 );
left.push(cloud12);

camera.position.z = 5;
// tx=camera.position.y/-7
// (1-tx)*(-4.4) //x
// (1-t)*(-5.9)-(t)*(-64.50) //y
// (1-tx)*1+tx*(1.44) //scale
// camera.position.y=-window.scrollY/100;
// if (camera.position.y<=-4) {
//     if (camera.position.y>-7) {
//         bunny.position.x=-camera.position.y-4.4*2;
//         bunny.scale.setScalar(-camera.position.y/4.5);
//     }else{
//         bunny.position.x=-7-4.4*2;
//         bunny.scale.setScalar(-7/4.5);
//     }
//     bunny.position.y=camera.position.y-2;
// }
// if (camera.position.y<=-4) {
//     if (camera.position.y>=-7) {
//         bunny.position.x=-camera.position.y-4-4.4;
//         bunny.position.y=camera.position.y-4-5.9;
//         //bunny.scale.setScalar(-camera.position.y/4.5);
//     }
    
// }

// document.addEventListener('scroll',()=>{
//     if (camera.position.y<-4) {
//         if (camera.position.y>-7) {
//             bunny.position.x=-camera.position.y-4-4.4;
//             bunny.position.y=camera.position.y;
//             //bunny.scale.setScalar(-camera.position.y/4.5);
//         }
        
//     }
// })


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
const ini=ScreenToSpaceY(elemHeight*2);
const fin=(ScreenToSpaceY(bunnyFin*2))*1.2;
function animate() {
	const delta=clock.getDelta();
	const time=clock.getElapsedTime();	
	for (let i = 0; i < mid.length; i++) {
		const element = mid[i];
		if (element.position.x>10) {
			element.position.x=-10
			element.scale.setScalar(Math.random()+0.2)
		} else {
			element.position.x+=delta/(Math.random()*10+5);
			element.scale.addScalar(delta/100);
			element.position.y+=delta*Math.sin(time)/(Math.random()*10+5);
		}
	}
	for (let i = 0; i < left.length; i++) {
		const element = left[i];
		if (element.position.x>10) {
			element.position.x=-10
			element.scale.setScalar(Math.random()+0.2)
		} else {
			element.position.x+=delta/(Math.random()*10+5);
			element.scale.addScalar(delta/100);
			element.position.y+=delta*Math.sin(time+Math.random())/(Math.random()*10+5);
		}
	}
	for (let i = 0; i < right.length; i++) {
		const element = right[i];
		if (element.position.x<-10) {
			element.position.x=10
			element.scale.setScalar(Math.random()+0.2)
		} else {
			element.position.x-=delta/(Math.random()*10+5);
			element.scale.addScalar(delta/100);
			element.position.y+=delta*Math.sin(time+Math.random())/(Math.random()*10+5);
		}
	}
	requestAnimationFrame( animate );
    camera.position.y=-window.scrollY/100;
    let t=-(camera.position.y+4)/4;
    if (t<0)t=0;
    if (t>1)t=1;
    bunny.scale.setScalar((1-t)*0.85+t*1.5);
    bunny.position.y=(1-t)*ini+t*fin;
    bunny.position.x=(1-t)*(-3.5);
    light.intensity=(1-t)*200+t*10;
	renderer.render( scene, camera );
}

animate();