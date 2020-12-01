// dom elements
const videoElement = document.getElementById('video') as any;
const button = document.getElementById('button') as HTMLButtonElement;

// Workaround the TypeScript Bug of not having getDisplayMedia
// and
const mediaDevices = navigator.mediaDevices as any;

// functions
const askForScreen = async () => {
  const stream = await mediaDevices.getDisplayMedia();

  videoElement.srcObject = stream;
  await videoElement.play();
};

const togglePictureInPicture = async () => {
  await askForScreen();

  videoElement.requestPictureInPicture();
};

// event listeners
button.addEventListener('click', togglePictureInPicture);
