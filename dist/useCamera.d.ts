declare type CameraFacingMode = "environment" | "user";
export declare const useCamera: () => {
    cameraFacingMode: CameraFacingMode;
    switchCameraFacingMode: () => void;
    imageData: string;
    captureImage: () => Promise<string>;
};
export {};
