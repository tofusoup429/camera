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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var ImagesView = function (_a) {
    var imageDatas = _a.imageDatas, width = _a.width, createPDFWithImages = _a.createPDFWithImages, handlePDFFileBase64 = _a.handlePDFFileBase64;
    var _b = react_1.useState(2), howManyImagesOnWidth = _b[0], handleHowManyImagesOnWidth = _b[1];
    var handleHowManyImagesOnWidthWrapper = function (e) { return handleHowManyImagesOnWidth(parseInt(e.target.value)); };
    var createPDFWithImagesAndUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var pdfFileBase64;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createPDFWithImages(imageDatas)];
                case 1:
                    pdfFileBase64 = _a.sent();
                    handlePDFFileBase64(pdfFileBase64);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { style: { position: "relative" } }, imageDatas.length > 0 &&
        react_1.default.createElement("div", { id: "Images", style: { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap' } },
            imageDatas.map(function (imageData, index) {
                return (imageData.length > 10 && react_1.default.createElement("img", { key: index, src: imageData, width: width * 0.95 / howManyImagesOnWidth, alt: 'NoImage' }));
            }),
            react_1.default.createElement(Select_1.default, { value: howManyImagesOnWidth, onChange: handleHowManyImagesOnWidthWrapper, style: { position: "absolute", top: "15px", left: '15px', zIndex: 1000, backgroundColor: "#f50057" } },
                react_1.default.createElement(MenuItem_1.default, { value: 1 }, "1 x 1"),
                react_1.default.createElement(MenuItem_1.default, { value: 2 }, "2 x 2")),
            react_1.default.createElement(Button_1.default, { onClick: createPDFWithImagesAndUpload, size: "small", style: { position: "absolute", top: "40px", left: '15px', zIndex: 1000, backgroundColor: "#f50057" } }, "Upload"))));
};
exports.default = ImagesView;
