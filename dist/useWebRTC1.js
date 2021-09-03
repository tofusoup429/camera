"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebRTC1 = void 0;
var react_1 = require("react");
var useWebRTC1 = function () {
    var _a = react_1.useState(false), recordVideo = _a[0], handleRecordVideo = _a[1];
    var _b = react_1.useState('environment'), cameraFacingMode = _b[0], handleCameraFacingMode = _b[1];
    var localVideo;
    var remoteVideo;
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
                    var recordButton = document.getElementById('RecordButton');
                    var requestDataButton = document.getElementById('RequestButton');
                    if (recordButton) {
                        recordButton.onclick = function () {
                            (recordVideo) ? mediaRecorder.stop() : mediaRecorder.start();
                            handleRecordVideo(function (old) { return !old; });
                        };
                    }
                    if (requestDataButton) {
                        requestDataButton.onclick = function () {
                            mediaRecorder.requestData();
                        };
                    }
                    mediaRecorder.ondataavailable = function (data) {
                        console.log("data", data);
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
    return { cameraFacingMode: cameraFacingMode, switchCameraFacingMode: switchCameraFacingMode, recordVideo: recordVideo };
};
exports.useWebRTC1 = useWebRTC1;
