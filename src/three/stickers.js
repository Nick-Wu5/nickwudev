import * as THREE from "three";
import { camera, renderer } from "./scene.js";

// ================ Sticker Meshes ================

const textureLoader = new THREE.TextureLoader();

// Functions
function createSticker(texturePath, position, scale, name) {
  const texture = textureLoader.load(texturePath);
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.1,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(scale, scale), material);
  mesh.position.set(...position);
  mesh.rotation.y = Math.PI;
  mesh.name = name;
  return mesh;
}

export const stickers = new THREE.Group();
const stickerConfigs = [
  {
    path: "/macbook/stickers/pacersSticker.png",
    position: [0.115, 0.18, -0.009],
    scale: 0.08,
    name: "Pacers Sticker",
  },
];

stickerConfigs.forEach((cfg) => {
  stickers.add(createSticker(cfg.path, cfg.position, cfg.scale, cfg.name));
});

// ================ Interactions ================

const raycaster = new THREE.Raycaster();
document.addEventListener("mousedown", onMouseDown);

function onMouseDown(event) {
  const coords = new THREE.Vector2(
    (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -((event.clientY / renderer.domElement.clientHeight) * 2 - 1),
  );

  raycaster.setFromCamera(coords, camera);

  const intersections = raycaster.intersectObjects(stickers.children, true);
  if (intersections.length > 0) {
    const selectedObject = intersections[0].object;
    const color = new THREE.Color("orange");
    selectedObject.material.color = color;
  }
}
