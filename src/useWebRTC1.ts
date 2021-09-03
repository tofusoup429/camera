import {useEffect, useState} from 'react';
type CameraFacingMode = "environment"|"user"

export const useWebRTC1 = ()=> {
    const [recordVideo, handleRecordVideo] = useState<boolean>(false) 
    const [cameraFacingMode, handleCameraFacingMode] = useState<CameraFacingMode>('environment')
    let localVideo:HTMLVideoElement;
    let remoteVideo:HTMLVideoElement;
    
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
                    let recordButton = document.getElementById('RecordButton');
                    let requestDataButton = document.getElementById('RequestButton');
                    if(recordButton){
                        recordButton.onclick = () =>{
                            (recordVideo)? mediaRecorder.stop():mediaRecorder.start()
                            handleRecordVideo(old=>!old)
                        }
                    }
                    if(requestDataButton){
                        requestDataButton.onclick = () =>{
                            mediaRecorder.requestData();
                        }
                    }

                    mediaRecorder.ondataavailable = (data) => {
                        console.log("data", data)
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

    
    
    return {cameraFacingMode, switchCameraFacingMode, recordVideo}
}