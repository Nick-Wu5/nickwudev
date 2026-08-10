import * as THREE from "three";
import { camera, renderer, controls } from "./scene.js";
import { stickers } from "./stickers.js";
import { navigateCard } from "../scripts/cards.js";

// ================ Interactions ================

export const raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener("pointerdown", onPointerDown);
document.addEventListener("mousemove", onMouseMove, false);

// ================ Raycasting ================

function onMouseMove(event) {
  mousePointer = getMouseVector2(event, window);

  const getFirstValue = true;

  const intersections = checkRayIntersections(
    mousePointer,
    camera,
    raycaster,
    scene,
    getFirstValue,
  );

  const cardList = getCardObjects(intersections);
}

function onPointerDown(event) {
  // Pause rotation
  controls.autoRotate = false;
  setTimeout(resumeRotation, 10000);

  // Find intersections
  const rect = renderer.domElement.getBoundingClientRect();
  const coords = getMouseVector2(event, rect);
  const intersections = checkRayIntersections(
    coords,
    camera,
    raycaster,
    stickers,
    false,
  );

  if (intersections.length > 0) {
    const contentId = intersections[0].object.userData.contentId;
    const cardId = intersections[0].object.userData.cardId;
    console.log(contentId);
    navigateCard(contentId, cardId);
  }
}

// ================ Utils ================

function resumeRotation() {
  controls.autoRotate = true;
}

export function getMouseVector2(event, bounds) {
  const mousePointer = new THREE.Vector2();

  mousePointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
  mousePointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);

  return mousePointer;
}

export function checkRayIntersections(
  mousePointer,
  camera,
  raycaster,
  scene,
  getFirstValue,
) {
  raycaster.setFromCamera(mousePointer, camera);

  let intersections = raycaster.intersectObjects(scene.children, true);

  intersections = getFirstValue ? intersections[0] : intersections;

  return intersections;
}
