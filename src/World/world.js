console.log("world file.js");

import * as THREE from 'three';

// Importing files from ./components
import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
// import { createUniverse } from './components/skyHorizont';
// import { createplanet } from './components/planet';
import { createBox } from './components/box.js';

// Textures
import {starsTexture} from '../img/stars.jpg';
import {galaxyTexture} from '../img/galaxy.jpg';
import {galaxyZoneTexture} from '../img/galaxyzone.jpg';

// Importing files from ./systems
import { createRenderer } from './system/renderer.js';
import { Resizer } from './system/Resizer.js';

// To control image
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// Variables that are specific to the specific modules, so that they are not accessed outside of the corresponding module
let camera;
let scene;
let renderer;
let controls;

// To build a unique content for the created objects
class World {
    constructor(container) {
        // To reset all parts of the objects created earlier within the World file
        renderer = createRenderer();
        scene = createScene();
        camera = createCamera();
        // camera.position.set(-90, 140, 140);

        // To create the board and make it visible
        //    let displayRaster = new createDisplayRaster(scene, camera, renderer, controls);

        // To update the container of index.html in main.js from the new function created in world
        container.append(renderer.domElement);

        // To control the objects
        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.update();

        const axes = new THREE.AxesHelper(3);
        scene.add(axes);
        const box = createBox();
        scene.add(box);
        
        // const ambientLight = new THREE.AmbientLight(0x333333);
        // scene.add(ambientLight);

        // const universe = createUniverse();
        // scene.background.add(universe);
        const cubeTextureLoader = new THREE.CubeTextureLoader();
        const universe = cubeTextureLoader.load([
            starsTexture,
            starsTexture,
            starsTexture,
            galaxyZoneTexture,
            starsTexture,
            starsTexture,
            galaxyTexture,
            starsTexture,
            starsTexture,
        ]);
        const textureLoader = new THREE.TextureLoader();

        function animate() {

            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animate);
    
        // To resize each function at every moment that a global change occurs
        //const resizer = new Resizer(container, camera, renderer);        
        window.addEventListener('resize', function(){
            camera.aspect = window.innerWidth / this.window.innerHeight;
            camera.updateProjectMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });    
    }
    

    render() {
        controls.addEventListener("change", () => renderer.render(scene, camera));
        renderer.render(scene, camera);
    }

}

export { World };