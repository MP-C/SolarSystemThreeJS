console.log("planet file.js");

import * as THREE from 'three';

function createPlanet(texture, a,b,c, ring ) {
    const textureLoad = new THREE.TextureLoader().load(texture);

    const planetGeometry = new THREE.SphereGeometry(a,b,c);
    const planetMaterial = new THREE.MeshStandardMaterial({ // MeshPhongMaterial // MeshStandardMaterial // MeshBasicMaterial
        map: textureLoad
        // color: '0xFF0'
    })
    // const sunGeometry = new THREE.SphereGeometry(5,46,99);
    // const sunMaterial = new THREE.MeshBasicMaterial({ 
    //     map: loader.load('../src/img/sun.jpg')
    // });
    // const sun1 = new THREE.Mesh(sunGeometry, sunMaterial);
    // scene.add(sun1);


    // To add a ring to Saturn
    if(ring){

    }

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    return planet;
}

export { createPlanet };