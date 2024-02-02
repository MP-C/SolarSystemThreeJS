console.log("main file.js");

import * as THREE from 'three';

/// TODO: to add with timeline when page opened
import gsap from 'gsap';

// Importing files from ./components
import { createScene } from '../src/World/components/scene.js';
import { createCamera } from '../src/World/components/camera.js';
import { createSkyHorizont } from '../src/World/components/skyHorizont';
import { createPlanet } from '../src/World/components/planet.js';
import { createBox } from '../src/World/components/box.js';

// Importing files from ./systems
import { createRenderer } from '../src/World/system/renderer.js';
// import { Resizer } from '../src/World/system/Resizer.js';

// To control image
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// Importing textures and images
import starfields from "../src/World/components/starfields";

import {sunTexture} from '../src/img/sun.jpg';
import {starsTexture} from '../src/img/stars.jpg';
// import {galaxy} from 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1920px-The_Earth_seen_from_Apollo_17.jpg';
import {galaxyTexture} from '../src/img/galaxy.jpg';
import {galaxyZoneTexture} from '../src/img/galaxyzone.jpg';

import {mercuryTexture} from '../src/img/mercury.jpg';
import {venusTexture} from '../src/img/venus.jpg';
import {earthTexture} from '../src/img/earth.jpg';
import {moonTexture} from '../src/img/moon.jpg';
import {marsTexture} from '../src/img/mars.jpg';
import {jupiterTexture} from '../src/img/jupiter.jpg';
import {saturnTexture} from '../src/img/saturn.jpg';
import {saturnRingTexture} from '../src/img/saturnring.jpg';
import {uranusTexture} from '../src/img/uranus.jpg';
import {uranusRingTexture} from '../src/img/uranusring.jpg';
import {neptuneTexture} from '../src/img/neptune.jpg';


const rendered = createRenderer();
const scene = createScene();
const camera = createCamera();

// To control the object smoothly
const controls = new OrbitControls(camera, rendered.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.rotateSpeed = 1;
controls.update();

const solarSystemGroup = new THREE.Group();

// light to see the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 1.9,100)
solarSystemGroup.add(ambientLight)

const light = new THREE.PointLight(0xffffff,1,300)
light.position.set(0,0,0);
solarSystemGroup.add(light);

// Sky or Stars
const stars = starfields();
solarSystemGroup.add(stars);

// Image in background
const loader = new THREE.TextureLoader();
const backgroundImage = loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg');
scene.background = backgroundImage;


// const skyHorizont = createSkyHorizont(scene);
const sky = createSkyHorizont();
// scene.background = sky;
sky.position.set(5,5,5);
solarSystemGroup.add(sky);


// tridimensional axes to understands the dimension
const axes = new THREE.AxesHelper(10);
solarSystemGroup.add(axes);

// const exempleBox = createBox();
// exempleBox.position.set(0,0,5);
// exempleBox.color(0x00FF00);
// scene.add(exempleBox);


// Add sun
const sun = createPlanet(sunTexture, 3,90,90, true);
solarSystemGroup.add(sun);

// const imgLoader = new THREE.ImageLoader();
// const sun = createPlanet(sunTexture, 3,90,90, true);
// scene.add(sun);

scene.add(solarSystemGroup);
function animate() {
  // exempleBox.rotation.x += 0.01;
  // exempleBox.rotation.y += 0.01;
  stars.rotation.y -= 0.0002;
  sun.rotateY(0.009);
  rendered.render(scene, camera);
}

//timeline as magic to apears 
const timeLinescale = gsap.timeline({ defaults: { duration: 3}});
timeLinescale.fromTo(solarSystemGroup.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});
timeLinescale.fromTo("nav", {y:"-100%"}, {y:"0%"}); // to a nav bar

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  var keyCode = event.which;
  if (keyCode == 87) {
    // up
    sun.position.y += 1;  
  } else if (keyCode == 83) {
    // down
    sun.position.y -= 1;
  } else if (keyCode == 65) {
    // left
    sun.position.x -= 1;
  } else if (keyCode == 68) {
    // right
    sun.position.x += 1;
  } else if (keyCode == 69) {
    // deep
    sun.position.z += 1;
  } else if (keyCode == 81) {
    // undeep
    sun.position.z -= 1;
  } else if (keyCode == 32) {
    // space => reset position
    sun.position.x = 0.0;
    sun.position.y = 0.0;
  }awd
  rendered();
};



// const resizer = new Resizer(container, camera, renderer);  
window.addEventListener('resize', function(){
  camera.aspect = window.innerWidth / this.window.innerHeight;
  camera.updateProjectMatrix();
  rendered.setSize(window.innerWidth, window.innerHeight);
});    
rendered.setAnimationLoop(animate);
