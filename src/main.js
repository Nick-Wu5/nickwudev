import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

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
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// Lighting
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

// Loading the model
const loader = new GLTFLoader();
const gltf = await loader.loadAsync("/macbook/mac.glb");
scene.add(gltf.scene);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  controls.update();
}

animate();
