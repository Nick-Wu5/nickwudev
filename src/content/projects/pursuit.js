import pursuitDiagram from "../../assets/content/pursuitDiagram.png";
import pursuitSteps from "../../assets/content/pursuitSteps.png";
import pursuitThumbnail from "../../assets/thumbnails/pursuitThumbnail.png";
import pursuitLogo from "../../assets/logos/pursuitLogo.png";

/** @type {import("../../types/types.js").Entry} */
const pursuit = {
  id: "pursuit",
  kind: "project",
  thumbnail: {
    thumbnailSource: pursuitThumbnail,
    thumbnailAlt: "Pursuit card thumbnail",
  },
  org: {
    name: "Pursuit",
    logoSrc: pursuitLogo,
    logoAlt: "Pursuit logo",
  },
  title: "Bible Verse Scanning Tool",
  startDate: new Date("2025-05-10"),
  endDate: new Date("2025-07-25"),
  tags: ["Python", "OpenCV", "Google Cloud Vision API"],
  body: [
    {
      type: "paragraph",
      text: "As a follower of Jesus, I'm always thinking about how I can continue to grow in my faith journey. A large part of that is my daily reading, where I dive into the Word and try to be intentional by underlining verses that come across as especially meaningful. Although quickly after identifying a verse I'd like to meditate on throughout the day, oftentimes my underlined text passes out of memory until I get the chance to re-read the chapter again.",
    },
    {
      type: "media",
      src: pursuitSteps,
      alt: "Pictures of different pipeline stages",
      caption: "Stages of the verse detection pipeline",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "In an effort to keep these verses front of mind and be more intentional about consistently reflecting on them, I explored the use of image processing on my annotated Bible pages. Specifically, using a multi-stage verse detection pipeline using OpenCV for image pre-processing/underline detection and the Google Cloud Vision API for OCR.",
    },
    {
      type: "media",
      src: pursuitDiagram,
      alt: "Pursuit pipeline overview graphic",
      caption: "Overview of the verse detection pipeline",
      kind: "image",
    },
    {
      type: "paragraph",
      text: "Underline Detection (OpenCV - Probabilistic Hough Line Transform): First, preprocessing is performed to reduce noise and improve pixel intensity contrast. The uploaded image's color space is converted to grayscale, noise is reduced via a bilateral filter, then is binarized via adaptive thresholding. Next, morphological operations are applied to the binarized image with a wide horizontal kernel to isolate long horizontal structures and eliminate short ones (such as individual characters). Finally, a probabilistic Hough line transform is applied to the image. This returns a set of lines that are filtered for surrounding text presence, angle, and nearby line segments are merged into single underlines.",
    },
    {
      type: "paragraph",
      text: "Verse Detection (Google Cloud Vision - OCR): Once the underlines have been identified, the pipeline calls the Google Cloud Vision API to perform OCR on the original image within the text regions above the identified underlines. Post-processing is performed on the raw text to remove common OCR artifacts. Then, text regions are grouped into verse blocks defined by surrounding verse numbers and vertical proximity to other regions. Finally, a confidence score is calculated based on basic text characteristics including length, common words, and outlier symbols such as unnecessary punctuation.",
    },
    {
      type: "paragraph",
      text: "While this project didn't make it out of personal exploration, it was a great exercise in opening the doors to my curiosity surrounding computer vision.",
    },
  ],
};

export default pursuit;
