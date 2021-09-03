declare type CameraFacingMode = "environment" | "user";
export declare const useWebRTC1: () => {
    cameraFacingMode: CameraFacingMode;
    switchCameraFacingMode: () => void;
    recordVideo: boolean;
};
export {};
