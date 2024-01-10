console.log("skyHorizont file.js");

import * as THREE from 'three';
import {starsTexture} from '../../img/stars.jpg';
import {galaxyTexture} from '../../img/galaxy.jpg';
import {galaxyZoneTexture} from '../../img/galaxyZone.jpg';

function createUniverse() {
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
    ])

    return universe;
}

export { createUniverse };