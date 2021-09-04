"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebRTC1 = void 0;
var react_1 = require("react");
var useWebRTC1 = function () {
    var _a = react_1.useState('environment'), cameraFacingMode = _a[0], handleCameraFacingMode = _a[1];
    var _b = react_1.useState('inactive'), mediaRecorderStates = _b[0], handleMediaRecorderStates = _b[1];
    var _c = react_1.useState(''), blobURL = _c[0], handleBlobURL = _c[1];
    var localVideo;
    var remoteVideo;
    var recordedBlobs = [];
    react_1.useEffect(function () {
        try {
            //find video and canvas elements by tagNames
            var videos = document.getElementsByTagName('video');
            if (videos.length !== 2)
                throw Error('The number of video tags should be two');
            for (var _i = 0, videos_1 = videos; _i < videos_1.length; _i++) {
                var video = videos_1[_i];
                (video.id === 'localVideo') ?
                    localVideo = video :
                    remoteVideo = video;
            }
            console.log('remoteVideo', remoteVideo);
            var constraint = {
                video: {
                    width: { ideal: 4096 },
                    height: { ideal: 2160 },
                    facingMode: cameraFacingMode
                },
                audio: true
            };
            navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
                localVideo.setAttribute("playsinline", "true");
                localVideo.srcObject = stream;
                localVideo.onloadedmetadata = function () {
                    //get position of video tag;
                    localVideo.play();
                    var mediaRecorder = new MediaRecorder(stream);
                    var startRecordButton = document.getElementById('StartRecordButton');
                    var stopRecordingButton = document.getElementById('StopRecordingButton');
                    var pauseRecordingButton = document.getElementById('PauseRecordingButton');
                    if (startRecordButton) {
                        startRecordButton.onclick = function () {
                            if (mediaRecorder.state === 'inactive') {
                                mediaRecorder.start();
                            }
                            else if (mediaRecorder.state === 'paused') {
                                mediaRecorder.resume();
                            }
                            console.log('recording started');
                            handleMediaRecorderStates('recording');
                        };
                    }
                    if (stopRecordingButton) {
                        stopRecordingButton.onclick = function () {
                            //mediaRecorder.requestData();
                            mediaRecorder.stop();
                            handleMediaRecorderStates('finished');
                        };
                    }
                    if (pauseRecordingButton) {
                        pauseRecordingButton.onclick = function () {
                            mediaRecorder.pause();
                            handleMediaRecorderStates('paused');
                        };
                    }
                    mediaRecorder.ondataavailable = function (event) {
                        console.log("ondataavailable, event", event);
                        if (event.data && event.data.size > 0) {
                            recordedBlobs.push(event.data);
                            var blobs = new Blob(recordedBlobs);
                            var url = window.URL.createObjectURL(blobs);
                            console.log('bloburl', url);
                            handleBlobURL(url);
                        }
                    };
                };
            }).catch(function (e) {
                console.log(e);
                alert(e);
            });
        }
        catch (e) {
            alert('error1: ' + e);
            console.log(e);
        }
    }, [cameraFacingMode]);
    var switchCameraFacingMode = function () {
        handleCameraFacingMode(function (old) { return (old === 'environment') ? "user" : "environment"; });
    };
    return { cameraFacingMode: cameraFacingMode, switchCameraFacingMode: switchCameraFacingMode, blobURL: blobURL, mediaRecorderStates: mediaRecorderStates };
};
exports.useWebRTC1 = useWebRTC1;
