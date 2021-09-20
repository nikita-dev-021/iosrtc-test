const webcamVideo = document.getElementById('webcamVideo');
const webcamButton = document.getElementById('webcamButton');

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log('PLATFORM',cordova.platformId)
}

webcamButton.addEventListener('click', () => {
    if (cordova.platformId.toLowerCase() === 'ios') {
        console.log('ios platform')
        cordova.plugins.iosrtc.getUserMedia({ video: true }).then((mediaStream) => {
            console.log('Stream', mediaStream)
            webcamVideo.srcObject = mediaStream
        }).catch(() => console.log('ERROR!'))
    } else {
        navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
            console.log('Stream', mediaStream)
            webcamVideo.srcObject = mediaStream
        }).catch(() => console.log('ERROR!'))
    }
})
