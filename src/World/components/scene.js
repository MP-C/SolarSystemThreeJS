import * as THREE from 'three';

/* Para criar a cena que, serve como zona de atualização de cada função quando existem
 novas formas / objetos a serem inseridos para que sejam vísiveis no World.js */

function createScene() {
    const scene = new THREE.Scene();

    scene.background = new THREE.Color('#b3b3b3');

    return scene;
}

export { createScene };