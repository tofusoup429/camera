/// <reference types="react" />
import { View } from './MobileCamerView';
interface Props {
    view: View;
    handleView: (arg: "videoView" | "imagesView") => void;
    imageDatas: string[];
    imagesWidth: number;
    bottom: number;
    right: number;
}
export declare const SmallImagesDisplayedOverlapped: ({ view, handleView, imageDatas, imagesWidth, bottom, right }: Props) => JSX.Element;
export {};
