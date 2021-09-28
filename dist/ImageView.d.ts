/// <reference types="react" />
interface Props {
    imagesBase64Array: string[];
    width: number;
    uploadMergedImages?: () => void;
}
declare const ImagesView: ({ imagesBase64Array, width, uploadMergedImages }: Props) => JSX.Element;
export default ImagesView;
