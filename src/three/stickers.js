import * as THREE from "three";
import { camera, renderer } from "./scene.js";
import { openModal } from "../modal.js";
import { rotate } from "three/tsl";

// ================ Sticker Meshes ================

const textureLoader = new THREE.TextureLoader();

// Functions
function createSticker(
  texturePath,
  position,
  width,
  height,
  contentId,
  rotation,
) {
  const texture = textureLoader.load(texturePath);
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.1,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
  mesh.position.set(...position);
  mesh.rotation.z = rotation;
  mesh.rotation.y = Math.PI;
  mesh.name = name;
  mesh.userData = { contentId: contentId };
  mesh.rotate;
  return mesh;
}

export const stickers = new THREE.Group();
const stickerConfigs = [
  {
    path: "/macbook/stickers/pacersSticker.png",
    position: [0.115, 0.18, -0.009],
    width: 0.08,
    height: 0.08,
    contentId: "me",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/purdueSticker.png",
    position: [0, 0.115, -0.009],
    width: 0.1,
    height: 0.08,
    contentId: "school",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/githubSticker.png",
    position: [-0.0625, 0.165, -0.009],
    width: 0.105,
    height: 0.042,
    contentId: "projects",
    rotation: -Math.PI / 15,
  },
];

stickerConfigs.forEach((cfg) => {
  stickers.add(
    createSticker(
      cfg.path,
      cfg.position,
      cfg.width,
      cfg.height,
      cfg.contentId,
      cfg.rotation,
    ),
  );
});

// ================ Interactions ================

const raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener("pointerdown", onPointerDown);

const modal = document.querySelector(".modal");

function onPointerDown(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  const coords = new THREE.Vector2(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -(((event.clientY - rect.top) / rect.height) * 2 - 1),
  );
  raycaster.setFromCamera(coords, camera);

  const intersections = raycaster.intersectObjects(stickers.children, true);
  if (intersections.length > 0) {
    const contentId = intersections[0].object.userData.contentId;
    openModal(contentId);
  }
}
