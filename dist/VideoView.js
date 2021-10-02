"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useCamera_1 = require("./useCamera");
var SmallImagesDisplayedOverlapped_1 = require("./SmallImagesDisplayedOverlapped");
var LensSharp_1 = __importDefault(require("@material-ui/icons/LensSharp"));
var Loop_1 = __importDefault(require("@material-ui/icons/Loop"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var VideoView = function (_a) {
    var objectKey = _a.objectKey, handleView = _a.handleView, view = _a.view, width = _a.width, height = _a.height, imageDatas = _a.imagesBase64Array, handleImagesBase64Array = _a.handleImagesBase64Array;
    var _b = useCamera_1.useCamera(), captureImage = _b.captureImage, imageData = _b.imageData, switchCameraFacingMode = _b.switchCameraFacingMode; // customHook that contains logics
    var canvasOpacity = react_1.useState(0)[0];
    react_1.useEffect(function () {
        //whenever imageData changed, which means captureImage is executed, imageUrl is cumulated in the array. 
        if (imageData.length > 10)
            handleImagesBase64Array(__spreadArray(__spreadArray([], imageDatas), [imageData]));
    }, [imageData]);
    return (react_1.default.createElement("div", { id: "VideoView", style: { display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "flex-start", width: width, height: height, overflow: "hidden" } },
        react_1.default.createElement("div", { className: "VideoAndCanvas" },
            react_1.default.createElement("video", { width: width, style: { objectFit: 'contain' } }),
            react_1.default.createElement("canvas", { style: { opacity: canvasOpacity } })),
        react_1.default.createElement(Typography_1.default, { color: "secondary", variant: "caption", style: { position: "absolute", top: '15px', right: '15px' } },
            react_1.default.createElement("b", null, objectKey)),
        react_1.default.createElement(LensSharp_1.default, { id: 'CaptureImageButton', fontSize: 'large', color: "secondary", style: { width: '75px', height: "75px", position: 'absolute', top: height * 0.9, left: width * 0.5, transform: "translate(-50%, -50%)" }, onClick: captureImage }),
        react_1.default.createElement(Loop_1.default, { id: 'SwitchCameraButton', fontSize: 'large', color: "secondary", style: { position: 'absolute', top: '40px', left: '40px', transform: "translate(-50%, -50%)" }, onClick: switchCameraFacingMode }),
        imageDatas.length > 0 &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Typography_1.default, { id: "imageDataCounter", align: "center", color: "secondary", variant: "caption", style: { position: "absolute", bottom: '15px', right: "15px", zIndex: 1000 } },
                    react_1.default.createElement("b", null, imageDatas.length)),
                react_1.default.createElement(SmallImagesDisplayedOverlapped_1.SmallImagesDisplayedOverlapped, { view: view, handleView: handleView, imageDatas: imageDatas, imagesWidth: width * 0.15, bottom: 15, right: 15 }))));
};
exports.default = VideoView;
