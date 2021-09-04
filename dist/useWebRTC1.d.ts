declare type CameraFacingMode = "environment" | "user";
declare type MediaRecorderStates = "inactive" | 'recording' | 'paused' | 'finished';
export declare const useWebRTC1: () => {
    cameraFacingMode: CameraFacingMode;
    switchCameraFacingMode: () => void;
    blobURL: string;
    mediaRecorderStates: MediaRecorderStates;
};
export {};
