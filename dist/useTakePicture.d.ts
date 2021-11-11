declare type CameraFacingMode = "environment" | "user";
export declare const useTakePicture: () => {
    cameraFacingMode: CameraFacingMode;
    switchCameraFacingMode: () => void;
    imageData: string;
    captureImage: () => Promise<string>;
};
export {};
