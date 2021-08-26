"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCamera = void 0;
var react_1 = require("react");
var useCamera = function () {
    var _a = react_1.useState({ w: 0, h: 0 }), videoDem = _a[0], handleVideoDem = _a[1];
    var _b = react_1.useState('environment'), cameraFacingMode = _b[0], handleCameraFacingMode = _b[1];
    var _c = react_1.useState(''), imageData = _c[0], handleImageData = _c[1];
    var video;
    var canvas;
    react_1.useEffect(function () {
        try {
            //find video and canvas elements by tagNames
            video = document.getElementsByTagName('video')[0];
            canvas = document.getElementsByTagName('canvas')[0];
            var constraint = {
                video: {
                    width: { ideal: 4096 },
                    height: { ideal: 2160 },
                    facingMode: cameraFacingMode
                },
                audio: false
            };
            navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
                video.setAttribute("playsinline", "true");
                video.srcObject = stream;
                video.onloadedmetadata = function () {
                    //console.log('video', video);
                    var clientLeft = video.clientLeft, clientTop = video.clientTop, videoWidth = video.videoWidth, videoHeight = video.videoHeight;
                    handleVideoDem({ w: videoWidth, h: videoHeight });
                    //align canvas position with video position
                    canvas.style.position = "absolute";
                    canvas.style.left = clientLeft.toString();
                    canvas.style.top = clientTop.toString();
                    canvas.setAttribute('width', videoWidth.toString());
                    canvas.setAttribute('height', videoHeight.toString());
                    video.play();
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
    var captureImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var video_1, canvas_1, context, imageData1;
        return __generator(this, function (_a) {
            try {
                video_1 = document.getElementsByTagName('video')[0];
                canvas_1 = document.getElementsByTagName('canvas')[0];
                context = canvas_1.getContext('2d');
                context === null || context === void 0 ? void 0 : context.drawImage(video_1, 0, 0, videoDem.w, videoDem.h);
                imageData1 = canvas_1.toDataURL('image/png', 1.0);
                //console.log('imageData', imageData);
                handleImageData(imageData1);
                return [2 /*return*/, imageData1];
            }
            catch (e) {
                console.log(e);
                alert('Error in Capturing Image: ' + e);
                return [2 /*return*/, ''];
            }
            return [2 /*return*/];
        });
    }); };
    return { cameraFacingMode: cameraFacingMode, switchCameraFacingMode: switchCameraFacingMode, imageData: imageData, captureImage: captureImage, };
};
exports.useCamera = useCamera;
