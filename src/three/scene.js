import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// ================ Scene Config ================

export const scene = new THREE.Scene();
// const color = new THREE.Color().setHex(0xfffbdb);
// scene.background = color;

// Renderer
export const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearAlpha(0);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment()).texture;

// Camera
const fov = 50;
const near = 0.1;
const far = 5;
export const camera = new THREE.PerspectiveCamera(fov, 1, near, far);

camera.position.set(0, 0.3, 0.8);
camera.lookAt(0, 0, 0);

// Lighting
const ambLight = new THREE.AmbientLight(0xffffff, 0.1);
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);
scene.add(ambLight);

// Controls
export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = false;
// controls.autoRotateSpeed = 3;

controls.minPolarAngle = 1.15;
controls.maxPolarAngle = 1.45;
controls.minAzimuthAngle = -Infinity;
controls.maxAzimuthAngle = Infinity;

controls.target.set(0, 0, 0);
controls.update();
