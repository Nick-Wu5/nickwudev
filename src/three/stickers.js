import * as THREE from "three";

// ================ Sticker Meshes ================

const textureLoader = new THREE.TextureLoader();

// Functions
function createSticker(
  texturePath,
  position,
  width,
  height,
  contentId,
  cardId,
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
  mesh.userData = { contentId: contentId, cardId: cardId, isHovered: false };
  mesh.rotate;
  return mesh;
}

export const stickers = new THREE.Group();
const stickerConfigs = [
  {
    path: "/macbook/stickers/pacersSticker.png",
    position: [0.12, 0.1825, -0.009],
    width: 0.08,
    height: 0.08,
    contentId: "me",
    cardId: "pacers",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/purdueSticker.png",
    position: [0, 0.115, -0.009],
    width: 0.1,
    height: 0.08,
    contentId: "me",
    cardId: "purdue",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/githubSticker.png",
    position: [-0.0625, 0.16, -0.009],
    width: 0.105,
    height: 0.042,
    contentId: "projects",
    cardId: "github",
    rotation: -Math.PI / 15.5,
  },
  {
    path: "/macbook/stickers/tottenhamSticker.png",
    position: [-0.125, 0.16, -0.009],
    width: 0.05,
    height: 0.1,
    contentId: "me",
    cardId: "tottenham",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/launchpadStickerOld.png",
    position: [0.118, 0.07, -0.009],
    width: 0.06,
    height: 0.06,
    contentId: "me",
    cardId: "launchpad",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/cortevaSticker.png",
    position: [-0.125, 0.083, -0.009],
    width: 0.05,
    height: 0.05,
    contentId: "work",
    cardId: "corteva",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/betaSticker.png",
    position: [0.115, 0.02, -0.009],
    width: 0.075,
    height: 0.03525,
    contentId: "me",
    cardId: "beta",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/sepStickerNew.png",
    position: [0.055, 0.125, -0.009],
    width: 0.05,
    height: 0.05,
    contentId: "work",
    cardId: "sep",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/oltSticker.png",
    position: [0.041, 0.195, -0.009],
    width: 0.08,
    height: 0.03,
    contentId: "work",
    cardId: "olt",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/drbSticker.png",
    position: [-0.073, 0.03, -0.009],
    width: 0.06,
    height: 0.06,
    contentId: "work",
    cardId: "drb",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/priceIsRightSticker.png",
    position: [0.115, 0.135, -0.009],
    width: 0.08,
    height: 0.04,
    contentId: "projects",
    cardId: "priceisright",
    rotation: Math.PI / 8,
  },
  {
    path: "/macbook/stickers/trecSticker.png",
    position: [-0.085, 0.192, -0.009],
    width: 0.04,
    height: 0.04,
    contentId: "projects",
    cardId: "trec",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/pursuitSticker.png",
    position: [-0.13, 0.027, -0.009],
    width: 0.07,
    height: 0.05,
    contentId: "projects",
    cardId: "pursuit",
    rotation: 0,
  },
  {
    path: "/macbook/stickers/ceepsSticker.png",
    position: [0.07, 0.07, -0.009],
    width: 0.025,
    height: 0.0375,
    contentId: "projects",
    cardId: "ceeps",
    rotation: Math.PI / 16,
  },
  {
    path: "/macbook/stickers/backlogSticker.png",
    position: [0.05, 0.025, -0.009],
    width: 0.05,
    height: 0.05,
    contentId: "projects",
    cardId: "backlog",
    rotation: 0,
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
      cfg.cardId,
      cfg.rotation,
      cfg.isHovered,
    ),
  );
});

export function stickerUpdates() {
  const BASE_SCALE = 1;
  const HOVER_SCALE = 1.1;
  const EASE = 0.05;

  stickers.children.forEach((sticker) => {
    const curScale = sticker.userData.scale;
    if (sticker.userData.isHovered) {
      sticker.scale.setScalar(
        THREE.MathUtils.lerp(sticker.scale.x, HOVER_SCALE, EASE),
      );
    } else {
      sticker.scale.setScalar(
        THREE.MathUtils.lerp(sticker.scale.x, BASE_SCALE, EASE),
      );
    }
  });
}
