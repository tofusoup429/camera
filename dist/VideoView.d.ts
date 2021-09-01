/// <reference types="react" />
import { View } from './MobileCamerView';
interface Props {
    bucketName: string;
    objectKey: string;
    handleView: (arg: View) => void;
    view: View;
    width: number;
    height: number;
    imageDatas: string[];
    handleImageDatas: (arg: string[]) => void;
}
declare const VideoView: ({ bucketName, objectKey, handleView, view, width, height, imageDatas, handleImageDatas }: Props) => JSX.Element;
export default VideoView;
