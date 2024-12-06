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

const loader = new GLTFLoader();

// may need ambient light so object isn't in complete darkness and thus invisible
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

camera.position.y = 2;

loadModel();

function loadModel() {

    var modelPath = '../assets/3d/building-3d/scene.gltf';
    var modelPath1 = '../assets/3d/CB.gltf';
    var modelPath2 = '../assets/3d/muscular_fish/scene.gltf';

    // const modelInfo = {
    //     path:'../assets/3d/building-3d/scene.gltf',
    //     translateX: -2,
    //     translateY: 0,
    //     translateZ: 2,
    //     positionX: 0.5,
    //     positionY: -0.2,
    //     positionZ: -0.5,
    //     scaleX: 0,
    //     scaleY: 0,
    //     scaleZ: 0
    // }
    const modelInfo1 = {
        path:'../assets/3d/CB/WTC.gltf',
        translateX: -2,
        translateY: 0,
        translateZ: 2,
        positionX: 0,
        positionY: 0,
        positionZ: -0.5,
        scaleX: -0.05,
        scaleY: -0.05,
        scaleZ: -0.05,
        rotateX: 3.1,
        rotateY: 0,
        rotateZ: 0
    }

    const currentModel = modelInfo1;

    loader.load( currentModel.path, function ( gltf ) {

        var pageHeight = document.body.offsetHeight - window.innerHeight;
        const fullRotation = 6.28319;
        console.log(model);
    
    
        // may need to change scale if asset is too small or too large
        scene.scale.set(10,10,10);
    
        scene.add( gltf.scene );
    
        // var model = gltf.scene.children[0].children[0].children[0].children[0].children[0];
        var model = gltf.scene;
        console.log(model);

        // set model position, scale, and rotation
        model.position.set( currentModel.positionX, currentModel.positionY, currentModel.positionZ );
        model.scale.set( currentModel.scaleX, currentModel.scaleY, currentModel.scaleZ );
        model.rotation.set( currentModel.rotateX, currentModel.rotateY, currentModel.rotateZ );
    
        // Reposition model to center on axes
        // model.geometry.translate( model.translate );
    
        const axesHelper = new THREE.AxesHelper( 10 );
        // Show axes
        // model.add( axesHelper );
        // gltf.scene.children[0].children[0].children[0].children[0].children[0].add( axesHelper );
    
        document.addEventListener('scroll', function() {
            let scrollPositionPercent = window.scrollY/pageHeight;
            let rotateValue = scrollPositionPercent*fullRotation;
            model.rotation.y = rotateValue;
        });
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
    
    
    loader.load( modelPath2, function ( gltf ) {
        scene.add(gltf.scene);
        gltf.scene.scale.set(.03,.03,.03);
        gltf.scene.position.x = -0.2;
    });
}


function animate() {
	requestAnimationFrame( animate );

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();




