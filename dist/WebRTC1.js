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
    var recordVideo = useWebRTC1_1.useWebRTC1().recordVideo;
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" } },
        react_1.default.createElement("div", { id: "WebRTC1", style: { display: "flex", flexDirection: 'row' } },
            react_1.default.createElement("video", { id: 'localVideo', width: 500 }),
            react_1.default.createElement("video", { id: 'remoteVideo', width: 500 })),
        react_1.default.createElement(Button_1.default, { id: 'RecordButton' }, recordVideo ? "STOP" : "START"),
        react_1.default.createElement(Button_1.default, { id: 'RequestButton' }, "Request")));
};
exports.WebRTC1 = WebRTC1;
