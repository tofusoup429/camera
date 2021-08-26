export declare const useCamera: () => {
    imageData: string;
    captureImage: () => Promise<string>;
    switchCameraFacingMode: () => void;
};
