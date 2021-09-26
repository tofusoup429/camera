"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCameraFullScreenView2 = void 0;
var react_1 = __importDefault(require("react"));
var use_window_size_1 = require("@tofusoup429/use-window-size");
var VideoView_1 = __importDefault(require("./VideoView"));
var ImageView_1 = __importDefault(require("./ImageView"));
var MobileCameraFullScreenView2 = function (_a) {
    var bucketName = _a.bucketName, objectKey = _a.objectKey, imageDatas = _a.imageDatas, handleImageDatas = _a.handleImageDatas, view = _a.view, handleView = _a.handleView, 
    //createPDFWithImages,
    pdfFileBase64 = _a.pdfFileBase64, handlePDFFileBase64 = _a.handlePDFFileBase64;
    var _b = use_window_size_1.useWindowSize(), width = _b.width, height = _b.height;
    return (react_1.default.createElement(react_1.default.Fragment, null, view === 'videoView' ?
        react_1.default.createElement(VideoView_1.default, { bucketName: bucketName, objectKey: objectKey, handleView: handleView, view: view, width: width, height: height, imageDatas: imageDatas, handleImageDatas: handleImageDatas })
        :
            react_1.default.createElement(ImageView_1.default, { imageDatas: imageDatas, width: width, 
                //createPDFWithImages={createPDFWithImages}
                pdfFileBase64: pdfFileBase64, handlePDFFileBase64: handlePDFFileBase64 })));
};
exports.MobileCameraFullScreenView2 = MobileCameraFullScreenView2;
