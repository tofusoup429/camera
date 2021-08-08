"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropzone = void 0;
var react_1 = require("react");
var useDropzone = function (_componentId) {
    if (_componentId === void 0) { _componentId = 'dropzone'; }
    var _a = react_1.useState('none'), dndStatus = _a[0], handleDndStatus = _a[1];
    var _b = react_1.useState(null), fileContent = _b[0], handleFileContent = _b[1];
    var _c = react_1.useState(0), fileSize = _c[0], handleFileSize = _c[1];
    var _d = react_1.useState(''), fileName = _d[0], handleFileName = _d[1];
    react_1.useEffect(function () {
        //#1 add event-listener "dragover" to DOM that has id "_componetId";
        //When a file is dragged over to the DOM, the dndStatus becomes 'dragover'
        var dropzone = document.getElementById(_componentId);
        var dragover = function (e) {
            handleDndStatus('dragover');
            e.stopPropagation();
            e.preventDefault();
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('dragover', dragover);
        return function () { return removeEventListener('dragover', dragover); };
    }, []);
    react_1.useEffect(function () {
        //#2 add event-listener "dragleave" to DOM that has id "_componetId";
        //When a file is dragged out of the DOM, the dndStatus becomes "dragleave"
        var dropzone = document.getElementById(_componentId);
        var dragleave = function (e) {
            handleDndStatus('none');
            e.stopPropagation();
            e.preventDefault();
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('dragleave', dragleave);
        return function () { return removeEventListener('dragleave', dragleave); };
    }, []);
    react_1.useEffect(function () {
        //#3 add event-listener "drop" to DOM that has id "_componetId";
        //When a file is dropped on the DOM, the dndStatus becomes "drop";
        //As soon as the file is droped, it reads files and store the file information in the state "fileContents"
        var dropzone = document.getElementById(_componentId);
        var drop = function (e) {
            var fileName = e.dataTransfer.files[0].name || "noName";
            handleFileName(fileName);
            handleDndStatus('drop');
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files;
            for (var i = 0, file; file = files[i]; i++) {
                var reader = new FileReader();
                reader.onload = function (file) {
                    var fileContent = file.target.result;
                    var fileSize = file.total;
                    handleFileContent(fileContent);
                    handleFileSize(fileSize);
                };
                reader.readAsDataURL(file);
            }
        };
        dropzone === null || dropzone === void 0 ? void 0 : dropzone.addEventListener('drop', drop);
        return function () { return removeEventListener('drop', drop); };
    }, []);
    var initializeStates = function () {
        //This function initializes all the states
        handleDndStatus('none');
        handleFileContent(null);
        handleFileName('');
        handleFileSize(0);
    };
    return { fileName: fileName, dndStatus: dndStatus, fileContent: fileContent, fileSize: fileSize, initializeStates: initializeStates };
};
exports.useDropzone = useDropzone;
