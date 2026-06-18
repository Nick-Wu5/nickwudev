import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { scene, renderer, camera } from "./scene.js";

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
camera.aspect = w / h;
camera.updateProjectionMatrix(); // required after changing aspect — Three.js caches the projection matrix
document.body.appendChild(renderer.domElement);

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

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;
controls.enablePan = false;
controls.enableZoom = false;

controls.target.set(0, 0, 0);
controls.update();

// Loading the model
const loader = new GLTFLoader();
const gltf = await loader.loadAsync("/macbook/mac.glb");
scene.add(gltf.scene);
gltf.scene.position.y = -0.1; // tweak this value
gltf.scene;

// Loading the stickers
const textureLoader = new THREE.TextureLoader();

// Testing functionality
console.log(gltf.scene);
console.log(gltf.animations);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  controls.update();
}

animate();

// ================ End Scene Setup ================

const raycaster = new THREE.Raycaster();
document.addEventListener("mousedown", onMouseDown);

// Understanding lid rotation
const lid = gltf.scene.children.find((child) => child.name === "lid_low001");

// Adding stickers
const stickers = new THREE.Group();

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

lid.add(stickers);

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

document.addEventListener("keydown", onSpacebarDown);

function onSpacebarDown(event) {
  if (event.key === " ") {
    console.log("position", lid.position);
    console.log("rotation", lid.rotation);
    lid.geometry.computeBoundingBox();
    console.log("geometry box", lid.geometry.boundingBox);
  }
}
