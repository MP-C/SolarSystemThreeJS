console.log("box file.js");

import * as THREE from 'three';

function createBox() {
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({color:0xE6E6E6})
    const box = new THREE.Mesh(boxGeometry, boxMaterial);

    return box;
}

export { createBox };