/// <reference types="react" />
export declare type View = "videoView" | "imagesView";
interface Props {
    bucketName: string;
    objectKey: string;
    imageDatas: string[];
    handleImageDatas: (arg: string[]) => void;
    view: View;
    handleView: (arg: View) => void;
}
export declare const MobileCameraFullScreenView2: ({ bucketName, objectKey, imageDatas, handleImageDatas, view, handleView, }: Props) => JSX.Element;
export {};
