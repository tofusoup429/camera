import React, {useEffect, useState} from 'react';
import {View} from './MobileCamerView';
import {useCamera} from "@tofusoup429/camera";
import { SmallImagesDisplayedOverlapped } from './SmallImagesDisplayedOverlapped';
import LensSharpIcon from '@material-ui/icons/LensSharp';
import LoopIcon from '@material-ui/icons/Loop';
import Typography from "@material-ui/core/Typography";
interface Props{
    bucketName:string,
    objectKey:string,
    handleView:(arg:View)=>void,
    view:View
    width:number
    height:number
}

const VideoView = ({bucketName, objectKey, handleView, view, width, height}:Props) => {
    
    const {captureImage ,imageData, switchCameraFacingMode} = useCamera(); // customHook that contains logics
    const [canvasOpacity,] = useState<number>(0);
    const [imageDatas, handleImageDatas] = useState<string[]>([]) // capture imageUrls are saved in this state. 
    
    useEffect(()=>{
        //whenever imageData changed, which means captureImage is executed, imageUrl is cumulated in the array. 
        if(imageData.length>10) handleImageDatas([...imageDatas, imageData]) 
    }, [imageData])
    return(
        <div id="VideoView" style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"flex-start", width:width, height:height, overflow:"hidden"}}>
            <div className="VideoAndCanvas">
                <video width={width} style={{objectFit:'contain'}} />
                <canvas style={{opacity:canvasOpacity}} />
            </div>
            <Typography 
                color="secondary" 
                variant="caption" 
                style={{position:"absolute", top:'15px', right:'15px'}}>
                    <b>{bucketName}{objectKey}</b>
            </Typography>
            <LensSharpIcon 
                id='CaptureImageButton' 
                fontSize='large' 
                color="secondary" 
                style={{width:'75px', height:"75px", position:'absolute', top:height*0.9, left:width*0.5, transform: "translate(-50%, -50%)"}} 
                onClick={captureImage} 
            />
            <LoopIcon 
                id='SwitchCameraButton' 
                fontSize='large' 
                color="secondary" 
                style={{position:'absolute', top:'40px', left:'40px', transform: "translate(-50%, -50%)" }} 
                onClick={switchCameraFacingMode} 
            />
            {imageDatas.length>0 &&
            <> 
            <Typography 
                id="imageDataCounter" 
                align="center" 
                color="secondary" 
                variant="caption"  
                style={{position:"absolute", bottom:'15px', right:"15px", zIndex:1000}}>
                    <b>{imageDatas.length}</b>
            </Typography>
            <SmallImagesDisplayedOverlapped
                view={view}
                handleView={handleView} 
                imageDatas={imageDatas} 
                width={width*0.15} 
                bottom={15} 
                right={15} 
            />
            </>
            }
        </div>
    )
}

export default VideoView