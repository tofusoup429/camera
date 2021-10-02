/// <reference types="react" />
interface Props {
    objectKey: string;
    imagesBase64Array: string[];
    width: number;
    uploadMergedImages: () => void;
    nameToMergedImages: string;
    handleNameToMergedImages: (arg: string) => void;
}
declare const ImagesView: ({ objectKey, imagesBase64Array, width, uploadMergedImages, nameToMergedImages, handleNameToMergedImages }: Props) => JSX.Element;
export default ImagesView;
