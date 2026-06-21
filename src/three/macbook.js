import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

// ================ Macbook Model ================

const loader = new GLTFLoader();
export const macbook = await loader.loadAsync("/macbook/mac.glb");
