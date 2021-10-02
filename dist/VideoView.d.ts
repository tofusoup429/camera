/// <reference types="react" />
import { View } from './MobileCamerView';
interface Props {
    bucketName: string;
    objectKey: string;
    handleView: (arg: View) => void;
    view: View;
    width: number;
    height: number;
    imagesBase64Array: string[];
    handleImagesBase64Array: (arg: string[]) => void;
}
declare const VideoView: ({ objectKey, handleView, view, width, height, imagesBase64Array: imageDatas, handleImagesBase64Array }: Props) => JSX.Element;
export default VideoView;
