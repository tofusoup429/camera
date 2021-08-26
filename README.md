## What is this project about?
This project contains hooks that handle camera APIs on browsers.

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

1.paramaters => none

2.returns 

| returns | type  | description  |
| :------- | :--- | --- |
| cameraFacingMode|"environment" or "user"|"environment" is camera viewing away from user whereas "user" is camera viewing toward user|
| switchCameraFacingMode | ()=>void | Switch cameraFacingMode |
| captureImage | ()=>string | Take photo of still image on video stream |
| imageData | string | The result of captureImage |


### 2.MobileCameraFullScreen
