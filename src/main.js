console.log("main file.js");

import * as THREE from 'three';

/// TODO: to add with timeline when page opened
// import "../src/style/globalStyle.css";
// import gsap from 'gsap';

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
import {sunTexture} from '../src/img/sun.jpg';
import {mercuryTexture} from '../src/img/mercury.jpg';
import {venusTexture} from '../src/img/venus.jpg';
import {earthTexture} from '../src/img/earth.jpg';
import {moonTexture} from '../src/img/moon.jpg';
import {marsTexture} from '../src/img/mars.jpg';
import {jupiterTexture} from '../src/img/jupiter.jpg';
import {saturnoTexture} from '../src/img/saturno.jpg';
import {saturnoRingTexture} from '../src/img/saturnoring.jpg';
import {uranusTexture} from '../src/img/uranus.jpg';
import {uranusRingTexture} from '../src/img/uranusring.jpg';
import {neptunoTexture} from '../src/img/neptuno.jpg';


// const rendered = new THREE.WebGLRenderer();
// rendered.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(rendered.domElement);
const rendered = createRenderer();
const scene = createScene();    // const scene  = new THREE.Scene();
const camera = createCamera();

// To control the object smoothly
const controls = new OrbitControls(camera, rendered.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.rotateSpeed = 1;
controls.update();

const space = createSkyHorizont();
//scene.background = space;
space.position.set(5,5,5);
scene.add(space);

const stars = starfields();
scene.add(stars);

// scene.background = new THREE.CubeTextureLoader()
// .load( [
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//     ] );


const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)



const axes = new THREE.AxesHelper(10);
scene.add(axes);

const box = createBox();
box.position.set(0,0,5)
scene.add(box);




const loader = new THREE.TextureLoader();

// const skyHorizont = createSkyHorizont(scene);
const sun = createPlanet(sunTexture, 3,90,90, true);
scene.add(sun);

const light = new THREE.PointLight(0xffffff,1,300)
light.position.set(0,0,0);
scene.add(light);
const sunGeometry = new THREE.SphereGeometry(5,46,99);
const sunMaterial = new THREE.MeshBasicMaterial({ // MeshPhongMaterial // MeshStandardMaterial // MeshBasicMaterial
    map: loader.load("https://planetpixelemporium.com/download/download.php?plutomap2k.jpg")
});
const sun1 = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun1);




function animate() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  sun.rotateY(0.009);
  rendered.render(scene, camera);
}

//timeline as magic to apears 
// const timeLinescale = gsap.timeline({ defaults: { duration: 1}});
// timeLinescale.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});
// timeLinescale.fromTo("nav", {y:"-100%"}, {y:"0%"}); // to a nav bar

// const resizer = new Resizer(container, camera, renderer);  
window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectMatrix();
    rendered.setSize(window.innerWidth, window.innerHeight);
});    
rendered.setAnimationLoop(animate);
