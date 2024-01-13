console.log("skyHorizont file.js");

import * as THREE from 'three';
import {starsTexture} from '../../img/stars.jpg';
import {galaxyTexture} from '../../img/galaxy.jpg';
import {galaxyZoneTexture} from '../../img/galaxyZone.jpg';

function createSkyHorizont() {
    //const galaxy = new THREE.TextureLoader().load(galaxyZoneTexture);
    //creating a cube 
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color:"yellow", transparent: "true"}).galaxy;
    
    
    const texture = new THREE.TextureLoader().load(galaxyTexture); 
    // immediately use the texture for material creation 
    // const material = new THREE.MeshStandardMaterial( {
    //     map:texture,
    //     side:THREE.BackSide
    // } );
    
    var sky = new THREE.Mesh(geometry, material);

    //changing size of cube which is created.
    // sky.scale.x = 100;
    // sky.scale.y = 100;
    // sky.scale.z = 100;

    // const space = new THREE.Mesh(boxGeo, boxMat)
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

    return sky;
}

export { createSkyHorizont };