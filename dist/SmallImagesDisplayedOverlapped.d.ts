/// <reference types="react" />
import { View } from './MobileCamerView';
interface Props {
    view: View;
    handleView: (arg: "videoView" | "imagesView") => void;
    imageDatas: string[];
    width: number;
    bottom: number;
    right: number;
}
export declare const SmallImagesDisplayedOverlapped: ({ view, handleView, imageDatas, width, bottom, right }: Props) => JSX.Element;
export {};
