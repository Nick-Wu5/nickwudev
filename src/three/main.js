import * as THREE from "three";
import { scene, renderer, camera, controls } from "./scene.js";
import { macbook } from "./macbook.js";
import { stickers } from "./stickers.js";

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
camera.aspect = w / h;
camera.updateProjectionMatrix(); // required after changing aspect — Three.js caches the projection matrix

// Attach the scene to the model section
const modelContainer = document.querySelector(".model");
modelContainer.appendChild(renderer.domElement);

// Macbook
scene.add(macbook.scene);
macbook.scene.position.y = -0.1; // tweak this value
macbook.scene;
const lid = macbook.scene.children.find((child) => child.name === "lid_low001");

// Stickers
lid.add(stickers);

// Testing functionality
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  controls.update();
}

animate();
