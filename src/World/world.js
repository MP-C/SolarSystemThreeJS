import * as THREE from 'three';

/* Ficheiros importandos de ./components */
import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createBox } from './components/box.js';

/* Ficheiros importandos de ./systems */
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

/* To control image */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

/* Variáveis que são específicas os modulos específicos, para que não sejam acedidos 
fora do módulo correspondente */
let camera;
let scene;
let renderer;
let controls;

/* Para construir um conteúdo único para os objeto criado */
class World {
    constructor(container) {
        /* Para reinicializar todas as partes do objetos criados anteriormente dentro do ficheiro World */
        renderer = createRenderer();
        scene = createScene();
        camera = createCamera();
        
        /* Para criar o tabuleiro e este se tornar visivel */
        //    let displayRaster = new createDisplayRaster(scene, camera, renderer, controls);
        
        /* Para atualizar o container do index.html em main.js a partir da nova função criada em world */
        container.append(renderer.domElement);
        
        /* Para redemensionar cada função a cada momento que ocora alteração do global */
        const resizer = new Resizer(container, camera, renderer);
        
        /* To control the objects */
        const orbit = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0,2,5);
        
        const axes = new THREE.AxesHelper(3);
        scene.add(axes);
        const box = createBox();
        scene.add(box);
        
        orbit.update();
        
        function animate() {
            box.rotation.x += 0.01;
            box.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animate);
    }

    render() {
        controls.addEventListener("change", () => renderer.render(scene, camera));
        renderer.render(scene, camera);
    }

}

export { World };