/// <reference types="react" />
interface Props {
    imageDatas: string[];
    width: number;
    createPDFWithImages: (arg: string[]) => Promise<string>;
    pdfFileBase64: string;
    handlePDFFileBase64: (arg: string) => void;
}
declare const ImagesView: ({ imageDatas, width, createPDFWithImages, handlePDFFileBase64 }: Props) => JSX.Element;
export default ImagesView;
