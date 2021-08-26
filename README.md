## What is this project about?
This project contains hooks that handle media device APIs on web browsers.

## Repository and installation 
* repository
```
git clone https://github.com/tofusoup429/camera
```
* Installation
```
yarn add @tofusoup429/camera
```

## Hooks and Components List
|num| name | type  | ready  | description  |
|---:| :------- | :--- | :--- |:---------------------------------------------|
|1| useCamera | hook |true| This hook provides logics that captures still photo on video and returns dataUrl |
|2| useWebRTC | hook |false| This handles webRTC APIs |

### 1. useCamera
* This module provides basic APIs related to take still photos and return its dataURL. 
* The motive of this hook is to imitate take-photo-feature of mobile-applications on mobile-browsers.

It takes no parameter and returns 4 objects,"cameraFacingMode", "switchCameraFacingMode" and "imageData", "captureImage".  

1. paramaters => none

2. returns 

| returns | type  | description  |
| :------- | :--- | --- |
| cameraFacingMode|"environment" or "user"|"environment" is camera viewing away from user whereas "user" is camera viewing toward user|
| switchCameraFacingMode | ()=>void | Switch cameraFacingMode |
| captureImage | ()=>string | Take photo of still image on video stream |
| imageData | string | The result of captureImage |

3. An example usage of imitating mobile application
* It is up to you to decide styles, position, size of video and canvas, but the component using useCamera should have one video element and one canvas element.
* The example extends the video and canvas element full-screen using {width, height} from useWindowSize. 
* In the example, every time the CaptureImageButton is pressed, imageData is returned and saved in the imageDatas state, which is an array. The saved imageData are cumulatively displayed in image elements 2 x n.  

```typescript
import {useEffect, useState} from 'react';
import {useCamera} from '@tofusoup429/camera';
import { useWindowSize } from '@tofusoup429/use-window-size';
import LensSharpIcon from '@material-ui/icons/LensSharp';
import LoopIcon from '@material-ui/icons/Loop';
const SimpleCamera1 = () => {
    let {width, height} = useWindowSize()
    const {captureImage ,imageData, switchCameraFacingMode} = useCamera();
    const [imageDatas, handleImageDatas] = useState<string[]>([])  
    
    useEffect(()=>{
        handleImageDatas([...imageDatas, imageData])
    }, [imageData])
    
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"flex-start"}}>
            <div className="VideoAndCanvas">
                <video width={width} style={{objectFit:'contain'}} />
                <canvas style={{opacity:0}} />
            </div>
            <LensSharpIcon id='CaptureImageButton' fontSize='large' color="secondary" style={{width:'75px', height:"75px", position:'absolute', top:height*0.9, left:width*0.5, transform: "translate(-50%, -50%)"}} onClick={captureImage} />
            <LoopIcon id='SwitchCameraButton' fontSize='large' color="secondary" style={{position:'absolute', top:'40px', left:'40px', transform: "translate(-50%, -50%)" }} onClick={switchCameraFacingMode} />
            {imageDatas.length>0 && 
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap', margin:'1%', padding:'1%' }}>
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
export default SimpleCamera1
```


### 2.MobileCameraFullScreen
* workig on...
