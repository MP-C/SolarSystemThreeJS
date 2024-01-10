import * as THREE from 'three';

function createCamera() {
    const camera = new  THREE.PerspectiveCamera(
        75,     /* FOV = Field Of View */
        window.innerWidth / window.innerHeight,      /* Aspect ratio */
        0.1,    /* Determinar a que proximi1ade se encontra o clipping plane próximo */
        1000,   /* Determinar a que distância se encontra o clipping plane distante */
    );

    /* Para determinar o ponto focal em que a camara se centra, ao se iniciar na scene, que tal como indicado, deve ser no ponto central dos 4 ladrilhos em torno do ponto (0,0,0) */
    camera.lookAt(0, 0, 0);

    /* Para determinar qual a zona afastada a que a câmara se encontra da cena, e poder visualizar toda a área */
    camera.position.set(-90,140,140); 

    return camera;
}

export { createCamera };