import * as THREE from "three";
import { scene, renderer, camera, controls } from "./scene.js";
import { macbook } from "./macbook.js";
import { stickers } from "./stickers.js";

// Attach the scene to the model section
const modelContainer = document.querySelector(".model-section");
modelContainer.appendChild(renderer.domElement);

function updateViewport() {
  const width = modelContainer.clientWidth;
  const height = modelContainer.clientHeight;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);

  camera.aspect = width / height;

  // TODO: update updateViewport() logic now that model never displays on mobile

  camera.updateProjectionMatrix(); // required after changing aspect — Three.js caches the projection matrix

  controls.update();
}

// Set initial camera postition / target
camera.position.set(0, 0.3, 0.6);
camera.lookAt(0, 0, 0);
controls.target.set(0, 0.025, -0.1);

const resizeObserver = new ResizeObserver(updateViewport);
resizeObserver.observe(modelContainer);
window.addEventListener("resize", updateViewport);
updateViewport();

// Macbook
scene.add(macbook.scene);
macbook.scene.position.y = -0.1; // can tweak
macbook.scene.scale.setScalar(1.5);
const lid = macbook.scene.children.find((child) => child.name === "lid_low001");

// Stickers
lid.add(stickers);

// Testing functionality

// Debug: marks the orbit/pivot point the camera targets.
// const pivotMarker = new THREE.Mesh(
//   new THREE.SphereGeometry(0.01, 16, 16),
//   new THREE.MeshBasicMaterial({ color: 0xff4d4d }),
// );
// pivotMarker.position.copy(controls.target);
// scene.add(pivotMarker);

// Debug: shows the world axes so you can see orientation in 3D space.
// const axesHelper = new THREE.AxesHelper(0.25);
// scene.add(axesHelper);

// Conditionally render mac only on desktop
const isMobile = window.matchMedia("(max-width: 767px)");
let frameId;
let isRenderingMac = !isMobile.matches;

isMobile.addEventListener("change", (mobile) => {
  if (mobile.matches && isRenderingMac) {
    cancelAnimationFrame(frameId);
    isRenderingMac = false;
  } else if (!mobile.matches && !isRenderingMac) {
    frameId = requestAnimationFrame(animate);
    isRenderingMac = true;
  }
});

function animate() {
  frameId = requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

if (isRenderingMac) animate();
