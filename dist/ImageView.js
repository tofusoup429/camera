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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var ImagesView = function (_a) {
    var imageDatas = _a.imageDatas, width = _a.width;
    var _b = react_1.useState(2), howManyImagesOnWidth = _b[0], handleHowManyImagesOnWidth = _b[1];
    var handleHowManyImagesOnWidthWrapper = function (e) { return handleHowManyImagesOnWidth(parseInt(e.target.value)); };
    return (react_1.default.createElement("div", { style: { position: "relative" } }, imageDatas.length > 0 &&
        react_1.default.createElement("div", { id: "Images", style: { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap' } },
            imageDatas.map(function (imageData, index) {
                return (imageData.length > 10 && react_1.default.createElement("img", { key: index, src: imageData, width: width * 0.95 / howManyImagesOnWidth, alt: 'NoImage' }));
            }),
            react_1.default.createElement(Select_1.default, { value: howManyImagesOnWidth, onChange: handleHowManyImagesOnWidthWrapper, style: { position: "absolute", top: "15px", left: '15px', zIndex: 1000, backgroundColor: "#f50057" } },
                react_1.default.createElement(MenuItem_1.default, { value: 1 }, "1 x 1"),
                react_1.default.createElement(MenuItem_1.default, { value: 2 }, "2 x 2")))));
};
exports.default = ImagesView;
