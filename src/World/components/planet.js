import * as THREE from 'three';
import {starsTexture} from '../../img/stars.jpg';
import {galaxyTexture} from '../../img/galaxy.jpg';
import {galaxyZoneTexture} from '../../img/galaxyZone.jpg';
import {sunTexture} from '../../img/sun.jpg';
import {mercuryTexture} from '../../img/mercury.jpg';
import {venusTexture} from '../../img/venus.jpg';
import {earthTexture} from '../../img/earth.jpg';
import {moonTexture} from '../../img/moon.jpg';
import {marsTexture} from '../../img/mars.jpg';
import {jupiterTexture} from '../../img/jupiter.jpg';
import {saturnoTexture} from '../../img/saturno.jpg';
import {saturnoRingTexture} from '../../img/saturnoRing.jpg';
import {uranusTexture} from '../../img/uranus.jpg';
import {uranusRingTexture} from '../../img/uranusRing.jpg';
import {neptunoTexture} from '../../img/neptuno.jpg';

function createplanet(texture, translationSpeed, ring ) {
    const planetGeometry = new THREE.SphereGeometry();
    const planetMaterial = new THREE.MeshBasicMaterial({
        map: texture
    })
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    return planet;
}




export { createplanet };