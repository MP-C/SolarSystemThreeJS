console.log("planet file.js");

import * as THREE from 'three';

function createPlanet(texture, a,b,c, ring ) {
    const textureLoad = new THREE.TextureLoader().load(texture);

    const planetGeometry = new THREE.SphereGeometry(a,b,c);
    const planetMaterial = new THREE.MeshStandardMaterial({
        map: textureLoad
    })
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    return planet;
}

export { createPlanet };