// { audio: true, video: { facingMode: "user" } } Preferir frontal
// { audio: true, video: { facingMode: { exact: "environment" } } } Solicitar front

// let front = false;
// document.getElementById('flip-button').onclick = function() { front = !front; };
// var constraints = { video: { facingMode: (front? "user" : "environment") } };

// async function getConnectedDevices(type) {
//   const devices = await navigator.mediaDevices.enumerateDevices();
//   return devices.filter((device) => device.kind === type);
// }

// const videoCameras = getConnectedDevices('videoinput');
// console.log('Cameras found:', videoCameras);

export default async function playVideoFromCamera() {
  try {
    const constraints = {
      audio: true,
      video: {
        width: { min: 480, ideal: 720, max: 1920 },
        height: { min: 320, ideal: 640, max: 1080 },
      },
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const videoElement = document.querySelector('video#localVideo');
    videoElement.srcObject = stream;
  } catch (error) {
    console.error('Error opening video camera.', error);
  }
}
