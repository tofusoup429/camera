import React from 'react';
import { useWindowSize } from '@tofusoup429/use-window-size';
import VideoView from './VideoView';
import ImagesView from './ImageView';
export type View = "videoView"|"imagesView";
interface Props{
    bucketName:string,
    objectKey:string,
    imagesBase64Array:string[],
    handleImagesBase64Array:(arg:string[])=>void,
    view:View,
    handleView:(arg:View)=>void,
    uploadMergedImages?:()=>void
}

export const MobileCameraFullScreenView2 = ({
    bucketName, 
    objectKey, 
    imagesBase64Array, 
    handleImagesBase64Array,
    view,
    handleView,
    uploadMergedImages
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
                imagesBase64Array={imagesBase64Array}
                handleImagesBase64Array={handleImagesBase64Array}
            />
        :
            <ImagesView 
                imagesBase64Array={imagesBase64Array}
                width={width}
                uploadMergedImages={uploadMergedImages}
            />
        }
        </>
    ) 
}
