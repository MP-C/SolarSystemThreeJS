console.log("renderer file.js");

import * as THREE from 'three';

/* Para que se possa atualizar de forma constante o ficheiro assim que ocorra 
uma modificação dinâmica em qualquer parte do projeto */
function createRenderer() {

    const renderer = new THREE.WebGLRenderer();

    /* Para atualizar o pixel (dimensão, espaço, aspeto, ...) no global (index) 
    em que se torna visual o universo criado */
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    return renderer;
}

export { createRenderer };