/// <reference types="react" />
export declare const useMobileCameraFullScreen: (width?: number) => {
    isStreaming: boolean;
    handleIsStreaming: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    imageData: string;
    takePhoto: () => Promise<void>;
};
