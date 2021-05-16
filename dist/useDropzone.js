"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropzone = void 0;
var react_1 = require("react");
var useDropzone = function (_componentId) {
    if (_componentId === void 0) { _componentId = 'dropzone'; }
    var _a = react_1.useState('none'), dndStatus = _a[0], handleDndStatus = _a[1];
    var _b = react_1.useState(null), fileContent = _b[0], handleFileContent = _b[1];
    var _c = react_1.useState(0), fileSize = _c[0], handleFileSize = _c[1];
    react_1.useEffect(function () {
        // Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
        var dropzone = document.getElementById(_componentId);
        var dragover = function (e) {
            handleDndStatus('dragover');
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('dragover', dragover);
        return function () { return removeEventListener('dragover', dragover); };
    }, []);
    react_1.useEffect(function () {
        console.log('dndStatus Changed', dndStatus);
    }, [dndStatus]);
    react_1.useEffect(function () {
        var dropzone = document.getElementById(_componentId);
        var drop = function (e) {
            handleDndStatus('drop');
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files; // Array of all files
            for (var i = 0, file; file = files[i]; i++) {
                //if (file.type.match(/image.*/)) {
                var reader = new FileReader();
                reader.onload = function (file) {
                    // finished reading file data.
                    var fileContent = file.target.result;
                    var fileSize = file.total;
                    console.log('file', fileContent, 'total', fileSize);
                    handleFileContent(fileContent);
                    handleFileSize(fileSize);
                };
                reader.readAsDataURL(file); // start reading the file data.
                //}
            }
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('drop', drop);
        return function () { return removeEventListener('drop', drop); };
    }, []);
    return { dndStatus: dndStatus, fileContent: fileContent, fileSize: fileSize };
};
exports.useDropzone = useDropzone;
