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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallImagesDisplayedOverlapped = void 0;
var react_1 = __importStar(require("react"));
var SmallImagesDisplayedOverlapped = function (_a) {
    var view = _a.view, handleView = _a.handleView, imageDatas = _a.imageDatas, width = _a.width, _b = _a.bottom, bottom = _b === void 0 ? 15 : _b, _c = _a.right, right = _c === void 0 ? 15 : _c;
    var handleViewWrapper = function () {
        view === 'videoView' ? handleView('imagesView') : handleView('imagesView');
    };
    react_1.useEffect(function () {
        var smallImagesDisplayedOverlapped = document.getElementById('SmallImagesDisplayedOverlapped');
        smallImagesDisplayedOverlapped === null || smallImagesDisplayedOverlapped === void 0 ? void 0 : smallImagesDisplayedOverlapped.addEventListener('click', handleViewWrapper);
        return function () { return smallImagesDisplayedOverlapped === null || smallImagesDisplayedOverlapped === void 0 ? void 0 : smallImagesDisplayedOverlapped.removeEventListener('click', handleViewWrapper); };
    }, []);
    return (react_1.default.createElement("div", { id: "SmallImagesDisplayedOverlapped", style: { position: "absolute", bottom: bottom + "px", right: right + "px" } }, imageDatas.map(function (imageData, index) {
        return (imageData.length > 10 &&
            react_1.default.createElement("img", { key: index, src: imageData, width: width * 0.15, alt: 'NoImage', style: { position: "absolute", zIndex: 10 + index, bottom: bottom - index * 1 + "px", right: right - index * 1 + "px" } }));
    })));
};
exports.SmallImagesDisplayedOverlapped = SmallImagesDisplayedOverlapped;
