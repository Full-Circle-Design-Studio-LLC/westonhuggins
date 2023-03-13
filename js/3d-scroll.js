import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF3421 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;
camera.position.x = -5;
camera.position.y = 2;

const loader = new GLTFLoader();

// may need ambient light so object isn't in complete darkness and thus invisible
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);




loader.load( '../assets/3d/building-3d/scene.gltf', function ( gltf ) {

    var pageHeight = document.body.offsetHeight - window.innerHeight;
    const fullRotation = 6.28319;
    console.log(pageHeight);


    // may need to change scale if asset is too small or too large
    scene.scale.set(10,10,10);

	scene.add( gltf.scene );
    console.log(gltf);

    document.addEventListener('scroll', function() {
        let scrollPositionPercent = window.scrollY/pageHeight;
        let rotateValue = scrollPositionPercent*fullRotation;
        gltf.scene.children[0].children[0].children[0].children[0].children[0].rotation.y = rotateValue;
    });

}, undefined, function ( error ) {

	console.error( error );

} );


function animate() {
	requestAnimationFrame( animate );

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();




