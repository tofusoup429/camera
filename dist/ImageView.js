"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ImagesView = function (_a) {
    var objectKey = _a.objectKey, imagesBase64Array = _a.imagesBase64Array, width = _a.width, uploadMergedImages = _a.uploadMergedImages, nameToMergedImages = _a.nameToMergedImages, handleNameToMergedImages = _a.handleNameToMergedImages;
    var handleNameToMergedImagesWrapper = function (e) {
        handleNameToMergedImages(e.target.value);
    };
    return (react_1.default.createElement("div", { style: { position: "relative" } }, imagesBase64Array.length > 0 &&
        react_1.default.createElement("div", { id: "Images", style: { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap' } },
            imagesBase64Array.map(function (imageBase64, index) {
                return (imageBase64.length > 10 && react_1.default.createElement("img", { key: index, src: imageBase64, width: width * 0.95 / 2, alt: 'NoImage' }));
            }),
            react_1.default.createElement(Typography_1.default, { color: "secondary", variant: "caption", style: { position: "absolute", top: '15px', right: '15px' } },
                react_1.default.createElement("b", null, objectKey)),
            react_1.default.createElement("div", { style: { position: "absolute", bottom: "40px", left: '15px', zIndex: 1000, display: "flex", flexDirection: 'row', justifyContent: 'flex-start' } },
                react_1.default.createElement(TextField_1.default, { size: "small", value: nameToMergedImages, onChange: handleNameToMergedImagesWrapper, variant: "outlined", style: { backgroundColor: 'white' } }),
                react_1.default.createElement(Button_1.default, { onClick: uploadMergedImages, size: "small", color: "secondary", variant: "contained", placeholder: "\uD30C\uC77C\uBA85" }, "Upload")))));
};
exports.default = ImagesView;
