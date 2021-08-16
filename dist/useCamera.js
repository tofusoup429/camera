"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCamera = void 0;
var react_1 = require("react");
var useCamera = function (width) {
    var _a = react_1.useState(false), isStreaming = _a[0], handleIsStreaming = _a[1];
    var _b = react_1.useState({ xCoord: 0, yCoord: 0, width: 0, height: 0 }), videoCoordination = _b[0], handleVideoCoordination = _b[1];
    var _c = react_1.useState(''), imageData = _c[0], handleImageData = _c[1];
    react_1.useEffect(function () {
        try {
            //#1 get permission to use video
            var video_1 = document.getElementsByTagName('video')[0];
            var clientLeft = video_1.clientLeft, clientTop = video_1.clientTop, videoWidth = video_1.videoWidth, videoHeight = video_1.videoHeight;
            handleVideoCoordination({ xCoord: clientLeft, yCoord: clientTop, width: videoWidth, height: videoHeight });
            var constraint = {
                video: {
                    width: width,
                    height: 0,
                    facingMode: 'user'
                },
                audio: false
            };
            navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
                video_1.srcObject = stream;
                isStreaming ? video_1.play() : video_1.pause();
            }).catch(function (e) {
                console.log('An Error occured', e);
            });
        }
        catch (e) {
            console.log(e);
        }
    }, [isStreaming, width]);
    react_1.useEffect(function () {
        try {
            if (!isStreaming) {
                var canvas = document.getElementsByTagName('canvas')[0];
                canvas.style.position = "absolute";
                canvas.style.left = videoCoordination.xCoord.toString() + 'px';
                canvas.style.top = videoCoordination.yCoord.toString() + 'px';
                canvas.setAttribute('width', videoCoordination.width.toString());
                canvas.setAttribute('height', videoCoordination.height.toString());
                console.log('canvas positioned!');
                var context = canvas.getContext('2d');
                var video = document.getElementsByTagName('video')[0];
                context === null || context === void 0 ? void 0 : context.drawImage(video, videoCoordination.xCoord, videoCoordination.yCoord, videoCoordination.width, videoCoordination.height);
                var imageData_1 = canvas.toDataURL('image/png');
                console.log('imageData', imageData_1);
                handleImageData(imageData_1);
            }
        }
        catch (e) {
            console.log(e);
        }
    }, [isStreaming, width]);
    return { isStreaming: isStreaming, handleIsStreaming: handleIsStreaming, videoCoordination: videoCoordination, imageData: imageData };
};
exports.useCamera = useCamera;
