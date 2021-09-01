import React, {useEffect, useState} from 'react';
import {useCamera} from '@tofusoup429/camera';
import { useWindowSize } from '@tofusoup429/use-window-size';
import LensSharpIcon from '@material-ui/icons/LensSharp';
import LoopIcon from '@material-ui/icons/Loop';
import Typography from "@material-ui/core/Typography";
import VideoView from './VideoView';
import ImagesView from './ImageView';

interface Props{
    bucketName:string,
    objectKey:string
}

export const MobileCameraFullScreenView1 = ({bucketName, objectKey}:Readonly<Props>) => {
    let {width, height} = useWindowSize() // get window width and height as everytime screen resized. 
    const {captureImage ,imageData, switchCameraFacingMode} = useCamera(); // customHook that contains logics
    const [imageDatas, handleImageDatas] = useState<string[]>([]) // capture imageUrls are saved in this state. 
    
    useEffect(()=>{
        //whenever imageData changed, which means captureImage is executed, imageUrl is cumulated in the array. 
        if(imageData.length>10) handleImageDatas([...imageDatas, imageData]) 
    }, [imageData])
    
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"flex-start", width:width, margin:0}}>
            <div className="VideoAndCanvas">
                <video width={width} style={{objectFit:'contain'}} />
                <canvas style={{opacity:0}} />
            </div>
            <Typography style={{position:"absolute", top:'30px', right:'30px'}}><b>{bucketName}{objectKey}</b></Typography>
            <LensSharpIcon id='CaptureImageButton' fontSize='large' color="secondary" style={{width:'75px', height:"75px", position:'absolute', top:height*0.9, left:width*0.5, transform: "translate(-50%, -50%)"}} onClick={captureImage} />
            <LoopIcon id='SwitchCameraButton' fontSize='large' color="secondary" style={{position:'absolute', top:'40px', left:'40px', transform: "translate(-50%, -50%)" }} onClick={switchCameraFacingMode} />
            {imageDatas.length>0 && 
            <div id="Images" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap', margin:'1%', padding:'1%' }}>
                {
                    imageDatas.map((imageData, index)=>{
                        return(
                            imageData.length>10 && <img key={index} src={imageData} width={width*0.45} alt='NoImage'/>
                        )
                    })
                }
            </div>
            }
        </div>
    ) 
}

export type View = "videoView"|"imagesView";


export const MobileCameraFullScreenView2 = ({bucketName, objectKey}:Readonly<Props>) => {
    const [view, handleView] = useState<View>("videoView");
    const [imageDatas, handleImageDatas] = useState<string[]>([]) // capture imageUrls are saved in this state. 
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
                imageWidth={width*0.45} 
            />
        }
        </>
    ) 
}
