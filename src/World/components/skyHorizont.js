console.log("skyHorizont file.js");

import * as THREE from 'three';
import {starsTexture} from '../../img/stars.jpg';
import {galaxyTexture} from '../../img/galaxy.jpg';
import {galaxyZoneTexture} from '../../img/galaxyZone.jpg';

function createSkyHorizont() {
    // const loader = new THREE.TextureLoader();
    // const space = loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg');

    const boxGeo = new THREE.BoxGeometry();
    const boxMat = new THREE.MeshStandardMaterial({
        color: 0xffff00,
    });
    const space = new THREE.Mesh(boxGeo, boxMat)
    // const space = new THREE.CubeTextureLoader()
	// .setPath( '../../img/' )
	// .load( [
	// 			'stars.jpg',
	// 			'stars.jpg',
	// 			'galaxy.jpg',
	// 			'stars.jpg',
	// 			'stars.jpg',
	// 			'galaxyZone.jpg'
	// 		] );

    // const cubeTextureLoader = new THREE.CubeTextureLoader();
    // scene.background = cubeTextureLoader.load([
    //     starsTexture
    // ])


    return space;
}

export { createSkyHorizont };