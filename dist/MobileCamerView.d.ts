/// <reference types="react" />
export declare type View = "videoView" | "imagesView";
interface Props {
    bucketName: string;
    objectKey: string;
    imagesBase64Array: string[];
    handleImagesBase64Array: (arg: string[]) => void;
    view: View;
    handleView: (arg: View) => void;
    uploadMergedImages?: () => void;
}
export declare const MobileCameraFullScreenView2: ({ bucketName, objectKey, imagesBase64Array, handleImagesBase64Array, view, handleView, uploadMergedImages }: Props) => JSX.Element;
export {};
