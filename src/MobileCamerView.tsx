import React from 'react';
import { useWindowSize } from '@tofusoup429/use-window-size';
import VideoView from './VideoView';
import ImagesView from './ImageView';
export type View = "videoView"|"imagesView";
interface Props{
    bucketName:string,
    objectKey:string,
    imageDatas:string[],
    handleImageDatas:(arg:string[])=>void,
    view:View,
    handleView:(arg:View)=>void,
    //createPDFWithImages:(arg:string[])=>Promise<string>,
    pdfFileBase64:string,
    handlePDFFileBase64:(arg:string)=>void
}

export const MobileCameraFullScreenView2 = ({
    bucketName, 
    objectKey, 
    imageDatas, 
    handleImageDatas,
    view,
    handleView,
    //createPDFWithImages,
    pdfFileBase64,
    handlePDFFileBase64
}:Props) => {
    let {width, height} = useWindowSize();
    return(
        <>
        {view === 'videoView'? 
            <VideoView
                bucketName={bucketName}
                objectKey={objectKey}
                handleView={handleView}
                view={view}
                width={width}
                height={height}
                imageDatas={imageDatas}
                handleImageDatas={handleImageDatas}
            />
        :
            <ImagesView 
                imageDatas={imageDatas}
                width={width}
                //createPDFWithImages={createPDFWithImages}
                pdfFileBase64={pdfFileBase64}
                handlePDFFileBase64={handlePDFFileBase64}
            />
        }
        </>
    ) 
}
