"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Dropzone = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledCenter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:flex;\n    flex-direction:center;\n    justify-content:center;\n    align-items:'center';\n    width:100%;\n    height:100%;\n"], ["\n    display:flex;\n    flex-direction:center;\n    justify-content:center;\n    align-items:'center';\n    width:100%;\n    height:100%;\n"])));
var StyledDropzone = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color:palevioletred;\n    background-color:ghostwhite;\n    display: inline-block;;\n    padding: 0rem 0rem;\n    width:100%;\n    height:100%;\n    margin:auto;\n"], ["\n    color:palevioletred;\n    background-color:ghostwhite;\n    display: inline-block;;\n    padding: 0rem 0rem;\n    width:100%;\n    height:100%;\n    margin:auto;\n"])));
var Dropzone = function (_a) {
    var text = _a.text;
    react_1.useEffect(function () {
        // Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
        var dropzone = document.getElementById('dropzone');
        var dragover = function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('dragover', dragover);
        return function () { return removeEventListener('dragover', dragover); };
    }, []);
    react_1.useEffect(function () {
        var dropzone = document.getElementById('dropzone');
        var drop = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files; // Array of all files
            for (var i = 0, file; file = files[i]; i++) {
                //if (file.type.match(/image.*/)) {
                var reader = new FileReader();
                reader.onload = function (file) {
                    // finished reading file data.
                    console.log('file', file.target.result, 'total', file.total);
                };
                reader.readAsDataURL(file); // start reading the file data.
                //}
            }
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('drop', drop);
        return function () { return removeEventListener('drop', drop); };
    }, []);
    return (react_1.default.createElement(StyledCenter, null,
        react_1.default.createElement(StyledDropzone, { id: 'dropzone' }, text)));
};
exports.Dropzone = Dropzone;
var templateObject_1, templateObject_2;
