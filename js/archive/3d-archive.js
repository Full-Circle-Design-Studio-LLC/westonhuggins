// SOME CODE FOR LOADING IN EXISTING ASSETS
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const loader = new GLTFLoader();

// may need ambient light so object isn't in complete darkness and thus invisible
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

loader.load( '../assets/3d/building-3d/scene.gltf', function ( gltf ) {

    // may need to change scale if asset is too small or too large
    scene.scale.set(10,10,10);

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );