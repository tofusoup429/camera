/// <reference types="react" />
export declare type View = "videoView" | "imagesView";
interface Props {
    bucketName: string;
    objectKey: string;
    imageDatas: string[];
    handleImageDatas: (arg: string[]) => void;
    view: View;
    handleView: (arg: View) => void;
    pdfFileBase64: string;
    handlePDFFileBase64: (arg: string) => void;
}
export declare const MobileCameraFullScreenView2: ({ bucketName, objectKey, imageDatas, handleImageDatas, view, handleView, pdfFileBase64, handlePDFFileBase64 }: Props) => JSX.Element;
export {};
