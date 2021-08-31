import React, {useEffect, useState} from 'react';
import {useCamera} from '@tofusoup429/camera';
import { useWindowSize } from '@tofusoup429/use-window-size';
import LensSharpIcon from '@material-ui/icons/LensSharp';
import LoopIcon from '@material-ui/icons/Loop';
import Typography from "@material-ui/core/Typography"
import { SmallImagesDisplayedOverlapped } from './SmallImagesDisplayedOverlapped';

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

export type View = "videoView"|"imagesView"

export const MobileCameraFullScreenView2 = ({bucketName, objectKey}:Readonly<Props>) => {
    let {width, height} = useWindowSize() // get window width and height as everytime screen resized. 
    const {captureImage ,imageData, switchCameraFacingMode} = useCamera(); // customHook that contains logics
    const [canvasOpacity,] = useState<number>(0);
    const [imageDatas, handleImageDatas] = useState<string[]>([]) // capture imageUrls are saved in this state. 
    const [view, handleView] = useState<View>("videoView")
    useEffect(()=>{
        //whenever imageData changed, which means captureImage is executed, imageUrl is cumulated in the array. 
        if(imageData.length>10) handleImageDatas([...imageDatas, imageData]) 
    }, [imageData])
    
    return(
        <>
        {view === 'videoView'?
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"flex-start", width:width, height:height, overflow:"hidden"}}>
            <div className="VideoAndCanvas">
                <video width={width} style={{objectFit:'contain'}} />
                <canvas style={{opacity:canvasOpacity}} />
            </div>
            <Typography color="secondary" variant="caption" style={{position:"absolute", top:'15px', right:'15px'}}><b>{bucketName}{objectKey}</b></Typography>
            <LensSharpIcon id='CaptureImageButton' fontSize='large' color="secondary" style={{width:'75px', height:"75px", position:'absolute', top:height*0.9, left:width*0.5, transform: "translate(-50%, -50%)"}} onClick={captureImage} />
            <LoopIcon id='SwitchCameraButton' fontSize='large' color="secondary" style={{position:'absolute', top:'40px', left:'40px', transform: "translate(-50%, -50%)" }} onClick={switchCameraFacingMode} />
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
                width={width} 
                bottom={15} 
                right={15} 
            />
            </>
            }
        </div>:
        <div>imagesView</div>
        }

        </>
    ) 
}
