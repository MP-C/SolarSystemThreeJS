console.log("scene file.js");

import * as THREE from 'three';

/* To create the scene that serves as an update zone for each function when there are
new shapes/objects to be inserted so that they are visible in main.js */
function createScene() {
    const scene = new THREE.Scene();
    //scene.background = new THREE.Color('#b3b3b3');

    
    return scene;
}

export { createScene };