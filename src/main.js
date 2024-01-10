console.log("main file.js");

import { World } from './World/World.js'

function main() {
  // To select the tag where this part will be displayed
  const container = document.querySelector('#body');

  // Allows you to create and call the World function created in another file
  const world = new World(container);

  // So that the variable is constantly "updated" with each new change immediately
  world.render();
}

main();