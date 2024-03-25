import * as THREE from 'three';

const scene = new THREE.Scene(); // Sets up scene

// Sets up camera, first attribute is the FOV (in degrees), Second attribute is the aspect Ratio, (almost always use width/height)
// next attributes are near and far clipping planes respectively, meaning things further than far and closer than near are not rendered
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

// Renderer, creates render instance, set size at which you want to render
// for performance intensive apps, you can use smaller values such as window.innerWidth / 2 which is quarter size
// if you want to keep size but render at lower resolution you can call setSize with false as updateStyle (3rd argument)
// Ex. setSize(window.innerWidth, window.innerHeight, false)
const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); // add renderer to the HTML document

// Creating cube

// BoxGeometry creates cube. An Object that contains all vertices and fill (first two are vertices?)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material to color it. Uses Hex Colors
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00 } );

// Create a mesh, A mesh is an object that takes a geometry and applies the material to it, which we can then insert in scene
const cube = new THREE.Mesh( geometry, material);

// Adds our cube to the scene added at coords (0, 0, 0) x, y, z respectively
scene.add( cube );

// change camera position
camera.position.z = 5;

// create a render or animate loop function
// creates a loop that causes the renderer to draw the scene each time the camera is refreshed
// requestAnimationFrame advantage is it pauses whenever user navigates to another browser tab
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01; // rotate cube on X and Y axis
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();