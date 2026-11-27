/** Escalir product illustrations and application screenshots. */
export const appCaptures = {
  models: {
    src: "/media/app/model-controls-illustration.webp", width: 1200, height: 546, tone: "dark", illustration: true,
    title: "Models & controls",
    alt: "Illustration of three model modules connected through an access control gate",
    caption: "Choose models for each workflow and define who can use them",
  },
  files: {
    src: "/media/app/structured-files-illustration.webp", width: 1200, height: 546, tone: "dark", illustration: true,
    title: "Files & structured data",
    alt: "Illustration of stacked documents with a grid of data cells",
    caption: "Use documents and structured data in agent workflows",
  },
  response: {
    src: "/media/app/response.webp", width: 650, height: 98, tone: "dark", illustration: false,
    title: "Response details",
    alt: "Escalir response footer with copy and feedback controls, token counts and timing information",
    caption: "Inspect the token counts and timing details attached to an application response",
  },
  document: {
    src: "/media/app/document.webp", width: 962, height: 54, tone: "dark", illustration: false,
    title: "Document import",
    alt: "The actual Choose File control in Escalir's OCR document workspace",
    caption: "Choose a document directly in the OCR workspace",
  },
  audio: {
    src: "/media/app/audio.webp", width: 1514, height: 78, tone: "dark", illustration: false,
    title: "Audio playback",
    alt: "Escalir transcription workspace audio player with playback, seek and volume controls",
    caption: "Replay a recording from the transcription workspace",
  },
  "model-choice": {
    src: "/media/app/model-choice.webp", width: 296, height: 60, tone: "dark", illustration: false,
    title: "Model selection",
    alt: "The actual model selector in Escalir chat, displaying deepseek-v4-pro",
    caption: "Select the model for a conversation in the Escalir chat interface",
  },
} as const;

export type AppCaptureId = keyof typeof appCaptures;
