/// <reference types="react" />
interface Props {
    imageDatas: string[];
    width: number;
    pdfFileBase64: string;
    handlePDFFileBase64: (arg: string) => void;
}
declare const ImagesView: ({ imageDatas, width, handlePDFFileBase64 }: Props) => JSX.Element;
export default ImagesView;
