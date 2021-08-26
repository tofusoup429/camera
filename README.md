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
|---:| :------- | :--- | :--- |---------------------------------------------|
|1| useMobileCameraFullScreen | hook |true| This handles web-api of camera to take full-screen-viewed camera on mobile-browser, imitating that of a mobile application |
|2| MobileCameraFullScreen | component |false| This renders camera-view full-screen on a mobile browser |

### 1.useMobileCameraFullScreen
* As the name implies, this is a custom-hook providing APIs to use mobile-camera on mobile-web-browsers. 
* The motive of building this hook is to replace mobile-application with mobile-web-browser.
* This hook is used in the MobileCameraFullScreen. But without the component, you can build your own components with this hook. 

It takes no parameter and returns only two and return "takePhoto" and "imageData".  

1.paramaters => none

2.returns 

| returns | type  | description  |
| :------- | :--- | --- |
| takePhoto | ()=>void | action to take photo |
| imageData | string | dataUrl of captured image |


### 2.MobileCameraFullScreen
