console.log("renderer file.js");

import * as THREE from 'three';

/* To be able to constantly update the file as soon as a dynamic modification occurs
    in any part of the project*/
function createRenderer() {

    const renderer = new THREE.WebGLRenderer();
  
    /* To update the pixel (dimension, space, aspect, ...) in the global (index)
    in which the created universe becomes visible*/
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    return renderer;
}

export { createRenderer };