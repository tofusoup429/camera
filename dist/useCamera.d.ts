/// <reference types="react" />
declare type VideoCoordination = {
    xCoord: number;
    yCoord: number;
    width: number;
    height: number;
};
export declare const useCamera: (width: number) => {
    isStreaming: boolean;
    handleIsStreaming: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    videoCoordination: VideoCoordination;
    imageData: string;
};
export {};
