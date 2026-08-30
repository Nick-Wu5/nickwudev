/**
 *
 * @param {number} ms that determine how long between characters
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "software engineer",
  "driven creative",
  "passionate builder",
  "Jesus follower",
  "growing human",
];

const typewriterElement = document.getElementById("typewriter");
let sleepTime = 150;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      if (typewriterElement)
        typewriterElement.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 20);

    for (let i = curWord.length; i > 0; i--) {
      if (typewriterElement)
        typewriterElement.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();
