import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { texture } from "three/tsl";

// Scene Config
const scene = new THREE.Scene();
const color = new THREE.Color().setHex(0xfffbdb);
scene.background = color;

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Renderer Config
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment()).texture;

document.body.appendChild(renderer.domElement);

// Camera Config
const fov = 50;
const aspect = w / h;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0.3, 0.8);
camera.lookAt(0, 0, 0);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;
controls.enablePan = false;
controls.enableZoom = false;

controls.target.set(0, 0, 0);
controls.update();

// Lighting
const ambLight = new THREE.AmbientLight(0xffffff, 0.1);
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);
scene.add(ambLight);

// Loading the model
const loader = new GLTFLoader();
const gltf = await loader.loadAsync("/macbook/mac.glb");
scene.add(gltf.scene);
gltf.scene.position.y = -0.1; // tweak this value

// Loading the stickers
const textureLoader = new THREE.TextureLoader();

// Load a sticker
const pacersStickerGeometry = new THREE.PlaneGeometry(0.05, 0.05);
const pacersStickerTexture = textureLoader.load(
  "/macbook/stickers/pacersSticker.png",
);
pacersStickerTexture.colorSpace = THREE.SRGBColorSpace;

const pacersStickerMaterial = new THREE.MeshBasicMaterial({
  map: pacersStickerTexture,
  transparent: true,
  alphaTest: 0.1,
});
const pacersStickerMesh = new THREE.Mesh(
  pacersStickerGeometry,
  pacersStickerMaterial,
);
pacersStickerMesh.rotation.y = Math.PI;
scene.add(pacersStickerMesh);

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

function onMouseDown(event) {
  const coords = new THREE.Vector2(
    (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -((event.clientY / renderer.domElement.clientHeight) * 2 - 1),
  );

  raycaster.setFromCamera(coords, camera);

  const intersections = raycaster.intersectObjects(gltf.scene.children, true);
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
