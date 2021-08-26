## What is this project about?
This is hooks and components that handle camera APIs on browsers.

## Repository and installation 
git repository
```
git clone https://github.com/tofusoup429/camera
```
how to install
```
yarn add @tofusoup429/camera
```

## hooks and components in this module
|num| name | type  | ready  | description  |
|---:| :------- | :--- | :--- |:---------------------------------------------|
|1| useMobileCameraFullScreen | hook |true| This handles web-api of camera to take full-screen-viewed camera on mobile-browser, imitating that of a mobile application |
|2| MobileCameraFullScreen | component |false| This renders camera-view full-screen on a mobile browser |

### 1.useMobileCameraFullScreen
This is a custom-hook that handles web APIs of camera. Currently ready and expected modules are as follows 


1.paramaters => non

2.returns 

| returns | type  | description  |
| :------- | :--- | :--- |
| isStreaming | boolean | whether or not video is playing |
| handleIsStreaming | (arg:boolean)=>void | control on and off of video |
| imageData | string | dataUrl of captured image |
| takePhoto | ()=>void | action to take photo |

