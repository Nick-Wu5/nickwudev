import * as THREE from "three";
import { camera, renderer, controls } from "./scene.js";
import { stickers } from "./stickers.js";
import { navigateCard } from "../scripts/cards.js";
import { syncButton } from "../scripts/slider.js";

// ================ Interactions ================

export const raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener("pointerdown", onPointerDown);
document.addEventListener("mousemove", onMouseMove, false);

const rightColumn = document.getElementById("right-column");
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", () => {
  rightColumn.classList.remove("open");
});

// ================ Raycasting ================

let lastHoveredSticker;

function onMouseMove(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  const mousePointer = getMouseVector2(event, rect);

  const getFirstValue = true;

  const intersection = checkRayIntersections(
    mousePointer,
    camera,
    raycaster,
    stickers,
    true,
  );

  if (intersection) {
    // console.log("intersection");
    const hoveredSticker = intersection.object;

    if (lastHoveredSticker === hoveredSticker) {
      return;
    } else {
      if (lastHoveredSticker) {
        lastHoveredSticker.userData.isHovered = false;
        lastHoveredSticker = null;
      }
      lastHoveredSticker = hoveredSticker;
      hoveredSticker.userData.isHovered = true;
    }
  } else if (lastHoveredSticker) {
    lastHoveredSticker.userData.isHovered = false;
    lastHoveredSticker = null;
  }
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
    syncButton(contentId);

    rightColumn.classList.add("open");
    rightColumn.addEventListener("transitionend", function handler(e) {
      if (e.target === rightColumn) {
        syncButton(contentId);
        rightColumn.removeEventListener("transitionend", handler);
      }
    });
  }
}

// ================ Utils ================

function resumeRotation() {
  controls.autoRotate = true;
}

function getMouseVector2(event, bounds) {
  const mousePointer = new THREE.Vector2();

  mousePointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
  mousePointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);

  return mousePointer;
}

function checkRayIntersections(
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
