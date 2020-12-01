"use strict";
// dom elements
const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// Workaround the TypeScript Bug of not having getDisplayMedia
// on type MediaDevices
const mediaDevices = navigator.mediaDevices;
// functions
const askForScreen = async () => {
    const media = await mediaDevices.getDisplayMedia();
    console.log(media);
};
askForScreen();
// event listeners
