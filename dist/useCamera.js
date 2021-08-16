"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCamera = void 0;
var react_1 = require("react");
var useCamera = function (width) {
    var _a = react_1.useState(false), isStreaming = _a[0], handleIsStreaming = _a[1];
    var _b = react_1.useState({ xCoord: 0, yCoord: 0, width: 0, height: 0 }), videoCoordination = _b[0], handleVideoCoordination = _b[1];
    var _c = react_1.useState(''), imageData = _c[0], handleImageData = _c[1];
    var video;
    var canvas;
    react_1.useEffect(function () {
        try {
            //#1 get permission to use video
            video = document.getElementsByTagName('video')[0];
            canvas = document.getElementsByTagName('canvas')[0];
            canvas.style.position = "absolute";
            canvas.style.left = videoCoordination.xCoord.toString() + 'px';
            canvas.style.top = videoCoordination.yCoord.toString() + 'px';
            canvas.setAttribute('width', videoCoordination.width.toString());
            canvas.setAttribute('height', videoCoordination.height.toString());
            console.log('canvas positioned!');
            console.log('canvas', canvas);
            var clientLeft = video.clientLeft, clientTop = video.clientTop, videoWidth = video.videoWidth, videoHeight = video.videoHeight;
            handleVideoCoordination({ xCoord: clientLeft, yCoord: clientTop, width: videoWidth, height: videoHeight });
            var constraint = {
                video: {
                    width: width,
                    height: 0,
                    facingMode: width < 1000 ? 'environment' : 'user'
                },
                audio: false
            };
            navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
                video.srcObject = stream;
                isStreaming ? video.play() : video.pause();
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
                var context = canvas.getContext('2d');
                context === null || context === void 0 ? void 0 : context.drawImage(video, videoCoordination.xCoord, videoCoordination.yCoord, videoCoordination.width, videoCoordination.height);
                var imageData_1 = canvas.toDataURL('image/png');
                console.log('imageData', imageData_1);
                handleImageData(imageData_1);
            }
        }
        catch (e) {
            console.log(e);
        }
    }, [isStreaming]);
    return { isStreaming: isStreaming, handleIsStreaming: handleIsStreaming, videoCoordination: videoCoordination, imageData: imageData };
};
exports.useCamera = useCamera;
