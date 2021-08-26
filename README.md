## What is this project about?
This is a module that handles camera on browsers. 
## Repository and installation 
repository
```
git clone https://github.com/tofusoup429/camera
```
install
```
yarn add @tofusoup429/camera
```

## hooks and components in this module
|num| name | type  | ready  | description  |
|---| ------- | --- | --- |---------------------------------------------|
|1| useMobileCameraFullScreen | hook |true| This handle web-api of camera to take full-screen-viewed camaer on mobile-browser, imitating full-screened camera view on mobile application |
|2| MobileCameraFullScreen | component |false| This renders camera-view full-screen on a mobile browser |

### useMobileCameraFullScreen
This is a custom-hook that handles web APIs of camera. Currently ready and expected modules are as follows 


1.paramaters => non

2.returns 

| returns | type  | description  |
| ------- | --- | --- |
| isStreaming | boolean | whether or not video is playing |
| handleIsStreaming | (arg:boolean)=>void | control on and off of video |
| imageData | string | dataUrl for captured image |
| takePhoto | ()=>void | action to take photo |

