console.log("camera file.js");

import * as THREE from 'three';
function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        75, // FOV = Field Of View
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Determine how close the near clipping plane is
        1000 // Determine how far the far clipping plane is
    );

    // To determine the focal point at which the camera is centered, when it starts in the scene, which as indicated, should be at the center point of the 4 tiles around the point (0,0,0)
    camera.lookAt(0, 0, 0);

    // To determine the distant zone at which the camera is from the scene, and to be able to view the entire area
    //camera.position.set(-90, 140, 140);
    camera.position.set(0, 14, 14);

    return camera;
}

export { createCamera };
