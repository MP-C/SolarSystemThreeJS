import { World } from './World/World.js'

function main() {
  /* Para selecionar a tag onde esta parte será apresentada */
    const container = document.querySelector('#body');

    /* Permite criar chamar a função World criada noutro ficheiro */
    const world = new World(container);

    /* Para que a variável sofra "actualização" constante em cada nova alteração de forma imediata */
    world.render();
}

main();