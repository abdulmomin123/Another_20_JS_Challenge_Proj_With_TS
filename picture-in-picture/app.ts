// dom elements
const videoElement = document.getElementById('video') as HTMLVideoElement;
const button = document.getElementById('button') as HTMLButtonElement;

// Workaround the TypeScript Bug of not having getDisplayMedia
// on type MediaDevices
const mediaDevices = navigator.mediaDevices as any;

// functions
const askForScreen = async () => {
  const media = await mediaDevices.getDisplayMedia();

  console.log(media);
};

askForScreen();

// event listeners
