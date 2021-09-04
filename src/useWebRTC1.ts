import {useEffect, useState} from 'react';
type CameraFacingMode = "environment"|"user"
type MediaRecorderStates = "inactive"|'recording'|'paused'|'finished'
export const useWebRTC1 = ()=> {
    const [cameraFacingMode, handleCameraFacingMode] = useState<CameraFacingMode>('environment');
    const [mediaRecorderStates, handleMediaRecorderStates] = useState<MediaRecorderStates>('inactive');
    const [blobURL, handleBlobURL] = useState<string>('');
    let localVideo:HTMLVideoElement;
    let remoteVideo:HTMLVideoElement;
    let recordedBlobs:any = [];
    useEffect(()=>{
        try{
            //find video and canvas elements by tagNames
            let videos:any = document.getElementsByTagName('video');
            if(videos.length!==2) throw Error('The number of video tags should be two')
            for(let video of videos){
                (video.id==='localVideo') ? 
                    localVideo = video : 
                    remoteVideo = video
            }
            console.log('remoteVideo', remoteVideo)
            let constraint = {
                video:{
                    width:{ideal:4096},
                    height:{ideal:2160},
                    facingMode:cameraFacingMode
                },
                audio:true
            }
            navigator.mediaDevices.getUserMedia(constraint).then((stream)=>{
                localVideo.setAttribute("playsinline", "true");
                localVideo.srcObject = stream;
                localVideo.onloadedmetadata = ()=>{
                    //get position of video tag;
                    localVideo.play();
                    let mediaRecorder = new MediaRecorder(stream);
                    let startRecordButton = document.getElementById('StartRecordButton');
                    let stopRecordingButton = document.getElementById('StopRecordingButton');
                    let pauseRecordingButton = document.getElementById('PauseRecordingButton');
                    if(startRecordButton){
                        startRecordButton.onclick = () =>{
                            if(mediaRecorder.state === 'inactive'){
                                mediaRecorder.start();
                            }else if(mediaRecorder.state==='paused'){
                                mediaRecorder.resume();
                            }
                            console.log('recording started');
                            handleMediaRecorderStates('recording');
                        }
                    }
                    if(stopRecordingButton){
                        stopRecordingButton.onclick = () =>{
                            //mediaRecorder.requestData();
                            mediaRecorder.stop();
                            handleMediaRecorderStates('finished')
                        }
                    }
                    if(pauseRecordingButton){
                        pauseRecordingButton.onclick = () =>{
                            mediaRecorder.pause();
                            handleMediaRecorderStates('paused')
                        }
                    }

                    mediaRecorder.ondataavailable = (event) => {
                        console.log("ondataavailable, event", event);
                        if (event.data && event.data.size > 0) {
                            recordedBlobs.push(event.data);
                            let blobs:Blob = new Blob(recordedBlobs);
                            let url = window.URL.createObjectURL(blobs);
                            console.log('bloburl', url)
                            handleBlobURL(url)
                          }
                    }
                }
            }).catch((e)=>{
                console.log(e);
                alert(e)
            })
        }catch(e){
            alert('error1: '+ e);
            console.log(e);
        }
    },[cameraFacingMode]);

    const switchCameraFacingMode = () => {
        handleCameraFacingMode(old=>(old==='environment')?"user":"environment")
    }

    
    
    return {cameraFacingMode, switchCameraFacingMode, blobURL, mediaRecorderStates }
}