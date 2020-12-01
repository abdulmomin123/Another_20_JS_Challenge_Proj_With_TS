// dom elements
const videoElement = document.getElementById('video') as any;
const button = document.getElementById('button') as HTMLButtonElement;

// Workaround the TypeScript Bug of not having getDisplayMedia
// method
const mediaDevices = navigator.mediaDevices as any;

// functions
const askForScreen = async () => {
  videoElement.srcObject = await mediaDevices.getDisplayMedia();
  await videoElement.play();
};

const togglePictureInPicture = async () => {
  await askForScreen();
  videoElement.requestPictureInPicture();
};

// event listeners
button.addEventListener('click', togglePictureInPicture);
