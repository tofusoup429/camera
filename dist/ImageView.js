"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var ImagesView = function (_a) {
    var imagesBase64Array = _a.imagesBase64Array, width = _a.width, uploadMergedImages = _a.uploadMergedImages;
    return (react_1.default.createElement("div", { style: { position: "relative" } }, imagesBase64Array.length > 0 &&
        react_1.default.createElement("div", { id: "Images", style: { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap' } },
            imagesBase64Array.map(function (imageBase64, index) {
                return (imageBase64.length > 10 && react_1.default.createElement("img", { key: index, src: imageBase64, width: width * 0.95 / 2, alt: 'NoImage' }));
            }),
            react_1.default.createElement(Button_1.default, { onClick: uploadMergedImages, size: "small", style: { position: "absolute", top: "40px", left: '15px', zIndex: 1000, backgroundColor: "#f50057" } }, "Upload"))));
};
exports.default = ImagesView;
