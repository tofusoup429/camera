"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRTC1 = void 0;
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var react_1 = __importDefault(require("react"));
var useWebRTC1_1 = require("./useWebRTC1");
var WebRTC1 = function () {
    var mediaRecorderStates = useWebRTC1_1.useWebRTC1().mediaRecorderStates;
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" } },
        react_1.default.createElement("div", { id: "WebRTC1", style: { display: "flex", flexDirection: 'row' } },
            react_1.default.createElement("video", { id: 'localVideo', width: 500 }),
            react_1.default.createElement("video", { id: 'remoteVideo', width: 500 })),
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } },
            react_1.default.createElement(Button_1.default, { id: 'StartRecordButton', disabled: mediaRecorderStates === 'recording' || mediaRecorderStates === 'finished' }, "Start"),
            react_1.default.createElement(Button_1.default, { id: 'PauseRecordingButton', disabled: mediaRecorderStates === 'inactive' || mediaRecorderStates === 'paused' || mediaRecorderStates === 'finished' }, "Pause"),
            react_1.default.createElement(Button_1.default, { id: 'StopRecordingButton', disabled: mediaRecorderStates === 'inactive' || mediaRecorderStates === 'paused' || mediaRecorderStates === 'finished' }, "Stop")),
        react_1.default.createElement("div", null, mediaRecorderStates)));
};
exports.WebRTC1 = WebRTC1;
