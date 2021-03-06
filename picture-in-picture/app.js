"use strict";
// dom elements
const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// Workaround the TypeScript Bug of not having getDisplayMedia
// method
const mediaDevices = navigator.mediaDevices;
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
